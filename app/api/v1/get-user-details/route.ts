import { NextResponse, type NextRequest } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function GET(request: NextRequest) {
    try {
        const email = request.nextUrl.searchParams.get("email");
        if (!email) return NextResponse.json({ error: "Email not provided" }, { status: 400 });

        await connectDB();

        const user = await User.findOne({ email }).select("name email accountActivated");
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        return NextResponse.json({
            name: user.name,
            email: user.email,
            accountActivated: user.accountActivated,
        });
    } catch (error) {
        console.error("Error in v1/get-user-details:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
