import trainerModel from "../models/trainerModel.js"

const changeAvailability = async (req, res) => {
    try {

        const {trainerId} = req.body

        const trainerData = await trainerModel.findById(trainerId)
        await trainerModel.findByIdAndUpdate(trainerId, {available: !trainerData.available})
        res.json({success: true, message:'Availability Changed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const trainerList = async (req, res) => {
    try {
        
        const trainers = await trainerModel.find({}).select(['-password','-email'])

        res.json({success:true, trainers})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {changeAvailability, trainerList}