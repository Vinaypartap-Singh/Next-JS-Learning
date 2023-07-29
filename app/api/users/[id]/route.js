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
