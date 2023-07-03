import { IPost } from "@/types/IPost";
import { NextRequest, NextResponse } from "next/server";

import Post from "@/models/post.model";
import User from '@/models/user.model';
import dbConnect from "@/lib/dbConnect";



/**
 * Get post data based on id
 * @param req 
 * @returns 
 */
export const GET = async (req: NextRequest)  => {
    console.log("GET /api/posts");

    try {
        await dbConnect();
        const posts = await Post.find();
        return NextResponse.json(
            {success: true, posts}, {status: 200}
            );
    } catch (err) {
        console.error(err);
        return NextResponse.json({success: false}, {status: 500});
    }
}