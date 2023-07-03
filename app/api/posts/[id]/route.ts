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
export const GET = async (req: NextRequest, {params} : {params:{id:string}})  => {
    console.log(`GET /api/posts/${params.id}`);
    
    try {
        await dbConnect();
        const post = await Post.findById(params.id);
        if (!post) {
            return NextResponse.json({success: false, message: "Post does not exist.", post: null}, {status: 400});
        }

        return NextResponse.json(
            {success: true, post}, {status: 200}
            );
    } catch (err) {
        console.error(err);
        return NextResponse.json({success: false, post: null}, {status: 500});
    }
}