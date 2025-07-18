import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

export async function LoadDB() {
  await connectDB();
}
LoadDB();

export async function POST(req) {
  const formData = await req.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Subscribed Successfully" });
}

// Get all the emails from MongoDB
export async function GET(req) {
  const emails = await EmailModel.find();
  return NextResponse.json({ emails });
}

// Delete subscription from admin dashboard
export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: "Deleted successfully" });
}
