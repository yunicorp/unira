import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateOTP, sendEmail } from '@/lib/otp';

export default async function handler(req, res) {
  await connectDB();
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: 'User already exists' });

  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  const newUser = new User({ email, password, otp, otpExpires });
  await newUser.save();

  await sendEmail(email, 'Unira OTP Verification', `Your OTP is: ${otp}`);

  res.status(200).json({ message: 'Signup successful, OTP sent' });
}
