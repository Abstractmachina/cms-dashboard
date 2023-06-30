import { IUserLoginForm } from "@/app/login/page";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
    console.log(">hitting route /api/users/login");

    try {
        const body = await req.json();
        const form: IUserLoginForm = body.form;

        await dbConnect();

        const user = await User.findOne({email: form.email});

        console.log(`user: ${user}`);

        // TODO: implement authentication for this bit
        if (!user) {
            return NextResponse.json({success:false, error: "User not found."}, {status:400});
        }

        if (form.password != user.hash) {
            return NextResponse.json({success:false, error: "Invalid password"}, {status:400});

        }
        return NextResponse.json({success:true}, {status:200});

    } catch (err) {
        if (process.env.NODE_ENV === "development") console.error (err);
        return NextResponse.json({success:false, error: "Something went wrong with the server!"}, {status:500});
    }
}