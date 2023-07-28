import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <Link href={"/"} className="mt-8 text-blue-400 underline">
        Go Back To Home
      </Link>
    </div>
  );
}
