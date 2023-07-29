"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const api = await fetch("https://dummyjson.com/posts");
        const data = await api.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="max-w-6xl card-wrapper flex items-start sm:flex-wrap sm:justify-center space-x-6 flex-wrap md:space-x-0">
        {posts.map(({ id, title, body }) => {
          return (
            <div
              className="card py-4 px-8 border border-blue-400 w-2/6 my-4"
              key={id}
            >
              <h1 className="font-bold mt-8">{title.substring(0, 30)}....</h1>
              <p className="my-8">{body.substring(0, 100)}....</p>
              <Link
                href={`/blogs/${id}`}
                className="mt-8 underline text-blue-400"
              >
                Read
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
