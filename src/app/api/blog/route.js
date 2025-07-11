import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";

const { NextResponse } = require("next/server");

async function LoadDB() {
  await connectDB();
}
LoadDB();

export async function GET(request) {
  const blogs = await BlogModel.find();
  return NextResponse.json({ blogs });
}

// API for uploading blogs
export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();

  //    sorting the uploaded image -- image
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}
