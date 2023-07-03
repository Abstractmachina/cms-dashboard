'use client';

import { IPost } from "@/types/IPost";
import PostList from "@/components/PostList";
import { useCallback, useEffect, useState } from "react";
import Convert from "@/lib/convert";

const Posts = () => {

    const[posts, setPosts] = useState<Array<IPost>>([]);

    useEffect(() => {

        console.log("useEffect called");
        const fetchData = async () => {
            try {
                const data = await fetchPosts();
                const newPosts = data.map((el:any) => Convert.toPost(el));
                setPosts(newPosts);
                console.log(posts);

            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [])

    /**
     * fetch all posts from database
     */
    const fetchPosts = useCallback(async () => {

        console.log("fetchPosts called");
        const response = await fetch('api/posts',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        // const response = await fetch('/api/posts');

        const data = await response.json();

        if (response.status == 200) {
            return data["posts"];
        }
        else {
            return null;
        }
    }, [])



  return (
    <main id="page_posts">
        <h1>Posts</h1>

        <button onClick={fetchPosts} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8">Refetch posts</button>
        <PostList posts={posts}/>
    </main>
  )
}

export default Posts
