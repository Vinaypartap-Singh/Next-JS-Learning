import Link from "next/link";
import React from "react";

async function fetchUserLocal() {
  const data = await fetch("http://localhost:3000/api/users");
  const userData = await data.json();
  return userData;
}

export default async function UserDetails() {
  const allUser = await fetchUserLocal();
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {allUser ? (
        <div>
          <h1 className="text-4xl font-bold">User Details</h1>
          {allUser.map((data) => {
            return (
              <>
                <h2 className="text-blue-400 fontlight mt-8">
                  <span className="font-bold text-blue-300">Name </span>:
                  {data.name}
                </h2>
                <p className="text-blue-400 fontlight mt-4 mb-4">
                  <span className="font-bold text-blue-300">Aim </span>:
                  {data.aim}
                </p>
                <Link
                  href={`/user/${data.id}`}
                  className="mt-6 font-bold text-red-400"
                >
                  Full Info
                </Link>
              </>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}
