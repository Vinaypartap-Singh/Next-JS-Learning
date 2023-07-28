import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen max-w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl">About Page</h1>
      <p className="text-gray-500 mt-8">We are working on our Website</p>
      <Link href={"/"} className="underline text-blue-400 mt-8">
        Home
      </Link>
    </div>
  );
}
