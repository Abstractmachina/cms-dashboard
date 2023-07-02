import { IPost } from '@/models/post.model'
import React, { FC, PropsWithChildren } from 'react'


type IPostListProps = {
    posts?: Array<IPost>;
};

const PostList = ( {posts} : IPostListProps) => {

    
    const listItems = (!posts) ? <li>No posts found</li> :
            posts.map(post => 
                <li>{post.title}</li>)


  return (
    <div className='PostList'>
        <ul>{listItems}</ul>

    </div>
  )
}

export default PostList