import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        if (!email) return NextResponse.json({ error: "Email not provided" }, { status: 400 });
        if (!password) return NextResponse.json({ error: "Password not provided" }, { status: 400 });

        await connectDB();

        const user = await User.findOne({ email });
        if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const token = await new SignJWT({ userId: user._id })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("4w")
            .setIssuedAt()
            .sign(secret);

        return NextResponse.json({
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error in v1/login:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
