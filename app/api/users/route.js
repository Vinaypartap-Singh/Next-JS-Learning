import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = users;
  return NextResponse.json(data);
}

export async function POST(req, res) {
  const payload = await req.json();
  console.log(payload.name);
  return NextResponse.json({ result: "success" });
}
