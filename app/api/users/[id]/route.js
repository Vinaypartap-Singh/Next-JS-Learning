import { users } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, params) {
  console.log(params.params.id);
  const data = users;
  const filteredData = data.filter((data) => data.id == params.params.id);
  return NextResponse.json(
    filteredData.length == 0
      ? { result: "No Data Found", status: "error" }
      : { result: filteredData, status: "ok" }
  );
}

export async function PUT(req, res) {
  const payload = await req.json();
  payload.id == res.params.id;
  console.log(payload);

  if (!payload.id || !payload.name || !payload.email || !payload.aim) {
    return NextResponse.json({ result: "Missing Data", sattus: 400 });
  }

  return NextResponse.json({ result: "Success" });
}

export async function DELETE(req, content) {
  const id = content.params.id;

  if (id) {
    return NextResponse.json({ result: "User Deleted" });
  } else {
    return NextResponse.json({ result: "User Not Found" });
  }
}
