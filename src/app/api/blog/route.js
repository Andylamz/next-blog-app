import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import cloudinary from "@/lib/cloudinary";
// import { writeFile } from "fs/promises";
// const fs = require("fs");
const { NextResponse } = require("next/server");

async function LoadDB() {
  await connectDB();
}
LoadDB();

async function uploadToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
      .end(buffer);
  });
}

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find();
    return NextResponse.json({ blogs: blogs });
  }
}

// API for uploading blogs
export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();

  //    sorting the uploaded image -- image
  const image = formData.get("image");
  const title = formData.get("title");
  const description = formData.get("description");
  const category = formData.get("category");
  const author = formData.get("author");
  const authorImg = formData.get("authorImg");

  if (!image) {
    return NextResponse.json({ success: false, msg: "No Image added" });
  }
  // const path = `./public/${timestamp}_${image.name}`;
  // await writeFile(path, buffer);
  // const imgUrl = `/${timestamp}_${image.name}`;

  try {
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const uploadImage = await uploadToCloudinary(buffer, "blogs");

    const blogData = {
      title,
      description,
      category,
      author,
      authorImg,
      image: uploadImage.secure_url,
    };

    await BlogModel.create(blogData);

    return NextResponse.json({ success: true, msg: "Post Added Successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.message });
  }
}

// Creating API endpoint to delete blogs

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({
    msg: "Blog Deleted",
  });
}
