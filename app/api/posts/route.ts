import { IPost } from "@/types/IPost";
import { NextRequest, NextResponse } from "next/server";

import Post from "@/models/post.model";
import User from '@/models/user.model';
import dbConnect from "@/lib/dbConnect";



/**
 * Get all posts
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


/**
 * Add new post to db (aka "publish")
 * @param req 
 */
export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        // Get data submitted in request's body.
        const body = await req.json();
        console.log('body: ', body);
        if (!body || !body.title || !body.content || !body.author) {
            return NextResponse.json({success: false, message: "Invalid request"}, {status: 400});
        }

        // TODO: remove placeholder user.
        const user = await User.findOne();
        if (!user) return;
    
        const newPost = new Post({
            author: user._id,
            published: true,
            title: body.title,
            content: body.content,
            category: body.category,
            lastEdited: new Date(),
            publishedDate: new Date(),
            tags: body.tags,
            location: body.location ? body.location : null
        })
    
        await newPost.save();
        console.log("Post published successfully");
    
        return NextResponse.json({success:true}, {status:200});
    } catch (err) {
        console.log(err);
        return NextResponse.json({success:false, error: "Internal server error"}, {status:500});
    }
  }
