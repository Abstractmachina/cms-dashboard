'use client'

import Convert from '@/lib/convert';
import { IPost } from '@/types/IPost';
import React, { useCallback, useEffect, useState } from 'react'

function PostPage({params}: {params: {id: string}}) {

    const [post, setPost] = useState<IPost | null>(null);
  
    useEffect(() => {

        console.log("useEffect called");
        const fetchData = async () => {
            try {
                const data = await fetchPostContent();
                // const newPosts = data.map((el:any) => Convert.toPost(el));
                // setPosts(newPosts);
                const convertedPost = Convert.toPost(data["post"]);
                console.log(convertedPost);
                setPost(convertedPost);
            } catch (err) {
                console.error(err);
                setPost(null);
            }
        }

        fetchData();
    }, [])

    const fetchPostContent = useCallback(async () => {

        console.log("fetchPostContent called");
        const response = await fetch(`/api/posts/${params.id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await response.json();
        console.log(data);

        if (response.status == 200) {
            return data;
        }
        else {
            return null;
        }
    }, [])



    const renderContent = () => {
        if (!post) return <p>No post found</p>
        else {
            return <div>
                <h2>{post.title}</h2>
                <p>{post.author.toString()}</p>
                <p>{post.lastEdited.toISOString()}</p>
                <p>{post.category}</p>
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
            </div>
        }
    }
  
    return (
    <main id='SinglePost'>
        {renderContent()}
    </main>
  )
}

export default PostPage