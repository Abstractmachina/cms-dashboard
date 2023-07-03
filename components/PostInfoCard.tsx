import { IPost } from "@/types/IPost";
import Link from "next/link";
import React from 'react'


type PostInfoCardProps = {
    post: IPost;
}

function PostInfoCard( {post} : PostInfoCardProps) {
  return (
    <div className="border-solid border-2 rounded-lg p-4 hover:bg-gray-200">
        <Link href={`/posts/${post.id}`} >
            <h2>{post.title}</h2>
        </Link>
        <p>{post.category}</p>
        <p>{post.author.toString()}</p>
        <p>{post.lastEdited.toString()}</p>
    </div>
  )
}

export default PostInfoCard