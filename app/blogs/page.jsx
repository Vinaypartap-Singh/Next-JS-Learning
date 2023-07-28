import Image from "next/image";
import React from "react";

export default function BlogPage() {
  const blogsData = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      image:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      image:
        "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      image:
        "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2146&q=80",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="max-w-6xl card-wrapper flex items-start sm:flex-wrap sm:justify-center md:space-x-6 flex-wrap md:flex-nowrap">
        {blogsData.map(({ id, title, body, image }) => {
          return (
            <div
              className="card py-4 px-8 border border-blue-400 w-2/6"
              key={id}
            >
              <Image
                src={image}
                width={400}
                height={300}
                className="object-cover h-[250px]"
              />
              <h1 className="font-bold mt-8">{title.substring(0, 30)}....</h1>
              <p>{body.substring(0, 170)}....</p>
              <button className="mt-8 bg-white text-black px-6 py-2">
                Read All
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
