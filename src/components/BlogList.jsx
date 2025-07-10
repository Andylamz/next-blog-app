import { blog_data } from "../../public/assets/assets";
import BlogItem from "./BlogItem";

function BlogList() {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button className="py-1 px-6 rounded-sm bg-black text-white dark:bg-white dark:text-black">
          All
        </button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Next.js</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 sm:mx-24">
        {blog_data.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            category={blog.category}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
