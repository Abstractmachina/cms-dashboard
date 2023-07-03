import { IPost } from "@/types/IPost";
import React, { FC, PropsWithChildren } from 'react'
import PostInfoCard from "./PostInfoCard";


type IPostListProps = {
    posts?: Array<IPost>;
};

const PostList = ( {posts} : IPostListProps) => {
    let count =0;

    console.log(posts);
    
    const listItems = (!posts) ? <li>No posts found</li> :
            posts.map(post => 
                <li className="py-1 px-6" key= {count++}>
                    <PostInfoCard post={post}/>
                </li>)


  return (
    <div className='PostList'>
        <ul>{listItems}</ul>

    </div>
  )
}

export default PostList