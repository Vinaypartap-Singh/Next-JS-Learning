"use client";

import React, { useState } from "react";

export default function UserSignup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const getValue = async () => {
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    response = await response.formData();
    console.log(response);
  };
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="space-y-6 flex flex-col w-1/3">
        <input
          type="text"
          className="px-6 py-4 text-black"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="px-6 py-4 text-black"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="px-6 py-4 text-black"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-400 px-8 py-4 font-bold"
          onClick={() => getValue()}
        >
          Submit Form
        </button>
      </div>
    </div>
  );
}
