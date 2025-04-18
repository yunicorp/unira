import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  otp: String,
  otpExpires: Date,
  isVerified: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
