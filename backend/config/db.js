import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:0717636347@cluster0.i2ryzfz.mongodb.net/FoodDelevery').then(()=>console.log("DB Connected"));
}