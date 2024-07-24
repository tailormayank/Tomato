import mongoose from "mongoose";
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MayankTailor:Mayank123@cluster0.cb0yi1a.mongodb.net/?')
}