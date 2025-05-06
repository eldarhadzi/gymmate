import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import trainerModel from '../models/trainerModel.js'
import appointmentModel from '../models/appointmentModel.js'
import Stripe from 'stripe';
import purchaseModel from '../models/purchaseModel.js'

// API to register the user
const registerUser = async (req, res) => {
    try {
        
        const { name, email, password } = req.body

        // checking for all data to add user
        if( !name || !password || !email ){
            return res.json({success:false, message:'Missing Details'})
        }

        // validate an email
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:'Enter a valid email'})
        }

        // validate a password
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol' });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        res.json({success:true, token})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API for user login
const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false, message:'User does not exist'}) 
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success:false, message:'Invalid Credentials'})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get user profile data
const getProfile = async (req,res) => {
    try {

        const { userId } = req.body

        if (!userId) {
            return res.status(400).json({ success: false, message: "userId is required" });
        }

        const userData = await userModel.findById(userId).select('-password')

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.json({success:true, userData})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API for updating user profile
const updateProfile = async (req, res) => {
    try {

        const {userId, name, phone, address, dob, gender} = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            res.json({success:false, message: 'Data Missing'})
        }

        await userModel.findByIdAndUpdate(userId, {name, phone, address: JSON.parse(address), dob, gender})

        if(imageFile) {

            // upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, {image: imageURL})

        }

        res.json({success:true, message: 'Profile Updated'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to book appointment
const bookAppointment = async (req,res) => {

    try {

        const {userId, trainerId, slotDate, slotTime} = req.body

        const trainerData = await trainerModel.findById(trainerId).select('-password')

        if(!trainerData.available) {
            return res.json({success:false, message: 'Trainer Not Available'})
        }

        let slots_booked = trainerData.slots_booked

        // checking for availability of slots
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({success:false, message: 'Slot Not Available'})
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete trainerData.slots_booked

        const appointmentData = {
            userId,
            trainerId,
            userData,
            trainerData,
            amount: trainerData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        // updating new slots data in trainerData
        await trainerModel.findByIdAndUpdate(trainerId, {slots_booked})

        res.json({success:true, message:'Appointment Booked'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get user appointments in MyAppointment page
const listAppointment = async (req, res) => {
    try {

        const {userId} = req.body
        const appointments = await appointmentModel.find({userId})

        res.json({success:true, appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to cancel an appointment
const cancelAppointment = async (req, res) => {

    try {

        const {userId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        // verify appointment user
        if (appointmentData.userId !== userId) {
            return res.json({success:false, message: 'Unauthorized Action'})
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})

        // making space in trainers slot
        const {trainerId, slotDate, slotTime} = appointmentData

        const trainerData = await trainerModel.findById(trainerId)

        let slots_booked = trainerData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await trainerModel.findByIdAndUpdate(trainerId, {slots_booked})

        res.json({success: true, message: 'Appointment Canceled'})

        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message}) 
    }
}


// API to make payment with Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createStripePaymentIntent = async (req, res) => {
    try {
        const { appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: "Appointment cancelled or not found" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: appointmentData.amount * 100,
            currency: process.env.CURRENCY || 'usd',
            metadata: {
                appointmentId: appointmentId
            }
        });

        res.json({ success: true, clientSecret: paymentIntent.client_secret });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, createStripePaymentIntent}