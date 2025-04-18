import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateOTP, sendEmail } from '@/lib/otp';

export default async function handler(req, res) {
  await connectDB();
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const otp = generateOTP();
  user.otp = otp;
  user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();

  await sendEmail(email, 'Unira Password Reset OTP', `Your OTP is: ${otp}`);
  res.status(200).json({ message: 'OTP sent to your email' });
}
