import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(
    {
      name: "Vinay Developer",
      age: 17,
      passion: "Web Development",
      aim: "Perform Best In New Company",
    },
    { status: 200 }
  );
}
