import Link from "next/link";
import React from "react";

async function fetchUserLocal(id) {
  const data = await fetch(`http://localhost:3000/api/users/${id}`);
  const userData = await data.json();
  return userData;
}

export default async function UserDetails(params) {
  const id = params.params.id;
  const userInfo = await fetchUserLocal(id);
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {userInfo ? (
        <div>
          <h1 className="text-4xl font-bold">User Details</h1>
          {userInfo.result.map((data) => {
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
                <Link href={`/user/`} className="mt-6 font-bold text-red-400">
                  Go Back
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
