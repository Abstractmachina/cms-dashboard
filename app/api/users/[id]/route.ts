import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/user.model';

/**
 * Get user information
 */
export const GET = async (req: NextRequest, {params} : {params:{id:string}}) => {
    const id = params.id;

    if (!id) return NextResponse.json({success: false, message: "Invalid user id", user: null}, {status:400});

    try {
        // connect to database
        await dbConnect();

        // find user in db
        const user = await User.findById(id);

        //if user not found, return error
        if (!user) return NextResponse.json({success: false, message: "User not found"}, {status:400});

        // if user found, return user as json object
        return NextResponse.json({success: true, user}, {status:200})


    } catch (error) {
        console.error(error);
        return NextResponse.json({success:false, user:null}, {status: 500});
    }
}