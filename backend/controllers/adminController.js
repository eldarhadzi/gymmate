import validator from "validator";
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import trainerModel from "../models/trainerModel.js";
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

// API for adding trainer
const addTrainer = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file 
        
        // checking for all data to add trainer
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false, message:"Missing Details"})
        } 

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // validate a password
        if (!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            return res.json({ success: false, message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol" });
        }

        // checking if image upload is missing
        if (!imageFile) {
            return res.json({ success: false, message: "Image file is required" });
        }
        

        // hashing trainers password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url


        // parse address if it iss a JSON string
        let parsedAddress;
        try {
            parsedAddress = typeof address === 'string' ? JSON.parse(address) : address;
        } catch (e) {
            return res.json({ success: false, message: "Invalid address format" });
        }

        // normalize speciality into an array
        let parsedSpeciality;
        try {
            if (typeof speciality === 'string') {
                parsedSpeciality = [speciality];
            } else if (Array.isArray(speciality)) {
                parsedSpeciality = speciality;
            } else {
                return res.json({ success: false, message: "Invalid speciality format" });
            }

            if (parsedSpeciality.length === 0) {
                return res.json({ success: false, message: "Speciality must not be empty" });
            }
        } catch (e) {
            return res.json({ success: false, message: "Error processing speciality" });
        }


        const trainerData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality: parsedSpeciality,
            degree,
            experience,
            about,
            fees,
            address: parsedAddress,
            date: Date.now()
        };

        const newTrainer = new trainerModel(trainerData)
        await newTrainer.save()

        res.json({success:true, message:"Trainer Added Successfully"})
        

    } catch (error) {
        console.error("Error adding trainer:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// API for admin login
const loginAdmin = async (req, res) => {
    try {
        
        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else {
            res.json({success:false, message:"Invalid credentials"})
        }

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

// API to get All Trainers List for admin panel
const allTrainers = async (req,res) => {
    try {

        const trainers = await trainerModel.find({}).select('-password')
        res.json({success:true, trainers})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
    try {

        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to cancel appointment from admin
const appointmentCancel = async (req, res) => {

    try {

        const { appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

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

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {

        const trainers = await trainerModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            trainers: trainers.length,
            appointments: appointments.length,
            clients: users.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }

        res.json({success:true, dashData})

        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message}) 
    }
}

export {addTrainer, loginAdmin, allTrainers, appointmentsAdmin, appointmentCancel, adminDashboard}