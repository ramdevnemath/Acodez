import mongoose from 'mongoose'

const connectDB = async ()=> {
    try {
        const dbUrl = process.env.MONGO_URI
        await mongoose.connect(dbUrl)
        console.log("Connected to mongoose!!")
    } catch (error) {
        console.error("Oops! Failed connecting to mongoose.", error)
    } 
}

export default connectDB