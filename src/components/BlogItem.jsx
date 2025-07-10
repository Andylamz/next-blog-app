import Link from "next/link";
import { blog_data } from "../../public/assets/assets";
import Image from "next/image";

function BlogItem({ image, title, description, category, id }) {
  return (
    <div className="flex flex-col justify-between group max-w-[420px] sm:max-w-[400px] border border-[#e9e9e9] dark:border-gray-400 rounded-xl overflow-hidden hover:-translate-y-5 transform transition-transform duration-500">
      <Link href={`/blogs/${id}`}>
        <div className="max-w-[420px] h-[300px] sm:max-w-[400px] relative border-b-1 border-[#e9e9e9]">
          <Image src={image} alt={id} fill className="object-cover" />
        </div>
      </Link>

      <div className="flex flex-col justify- p-5">
        <Link href={`/blogs/${id}`}>
          <h5 className="mb-2 text-lg min-h-[50px] font-medium tracking-tight text-gray-700 group-hover:text-[#fc5d0f] transition-colors duration-800 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 text-sm tracking-tight text-gray-500">
            {description}
          </p>
          <span className="inline-flex items-center py-2 font-semibold text-center text-gray-400">
            Read more
          </span>
        </Link>
      </div>
      <div className="flex border-t-1 border-[#e9e9e9] dark:border-gray-400 py-3">
        <p className="ml-5  px-2 py-1 inline-block border border-[#e9e9e9] dark:border-gray-400 hover:bg-[#f3f5f9] transition-colors duration-800 dark:hover:text-[#fc5d0f] text-sm text-gray-400">
          {category}
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
