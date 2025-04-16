import mongoose from "mongoose";

export async function connectDB() {
    try {
        if (mongoose.connection.readyState === 1) return;

        await mongoose.connect(process.env.MONGODB_URI!);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}
