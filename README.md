## Blog Application - Full Stack with Next.js 15

This is a full-stack blog application built with the Next.js 15 App Router. It features a responsive user interface, scalable image handling through Cloudinary, and supports both light and dark themes. The application includes an admin dashboard for managing blog content and newsletter subscriptions.

  
# Features

  - Display a list of blog posts with title, image, and preview

  - View full blog post details by selecting a post card

  - Email subscription form allowing users to subscribe to blog updates

  - Admin dashboard for:
    - Creating new blog posts
    - Deleting existing posts

  - Viewing and managing email subscribers

  - Toggle between light and dark themes using next-themes

  - Image uploads and hosting handled by Cloudinary

  - Per-page metadata configured for SEO optimisation

  - Custom site favicon for consistent branding

  - API routes implemented using Next.js built-in functionality

  - Data fetching managed via Axios

# Tech Stack

  - Frontend

    - Next.js 15 (App Router)

    - Tailwind CSS

    - next-themes

  - Backend

    - Next.js API Routes

    - MongoDB for data persistence (posts and subscriptions)

    - Cloudinary for image storage and delivery

  - Additional Tools

    - Axios for HTTP requests

    - Environment variables managed via .env
   
# Deployment

This application is ready to deploy on Vercel:

    - Vercel will automatically run next build during deployment

    - Environment variables must be configured in the Vercel project settings

    - Legacy local images under /public/uploads/ are included in the build output

    - New images are stored and served from Cloudinary

# Demo

The demo can be viewed [here](https://next-blog-app-blond-rho.vercel.app/)
