'use client';

import { IPost } from "@/models/post.model";
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
                const posts = data.map(el => Convert.toPost(el));
                setPosts(data);
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
            cache: "force-cache",
            next: {revalidate: 60},
            headers: {
                "Content-Type": "application/json",
            }
        })
        // const response = await fetch('/api/posts');

        const data = await response.json();
        console.log(data);

        if (response.status == 200) {
            return data["posts"];
        }
        else {
            return null;
        }
    }, [])



  return (
    <main id="page_posts">
        Posts

        <button onClick={fetchPosts}>test fetching</button>
        <PostList posts={posts}/>
    </main>
  )
}

export default Posts
