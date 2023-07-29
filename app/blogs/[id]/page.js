import React from "react";

async function fetcApi(id) {
  const apiFetch = fetch(`https://dummyjson.com/posts/${id}`);
  const data = (await apiFetch).json();
  return data;
}

export default async function BlogPost(params) {
  const id = params.params.id;
  try {
    const blogsData = await fetcApi(id);
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Read Post</h1>
        {blogsData ? (
          <div className="bg-blue-400 px-8 py-6 max-w-4xl mt-8">
            <h1 className="text-black font-bold"> {blogsData.title} </h1>
            <p> {blogsData.body} </p>
          </div>
        ) : (
          <div>
            <h3>Loading</h3>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div>
        <p>Error fetching data</p>
      </div>
    );
  }
}

export function generateMetadata() {
  return {
    title: `Blog Post`,
    description: "Read New Blogs",
  };
}
