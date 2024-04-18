import { Link, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { useContext } from "react";
import { AuthContext } from "../utilities/auth";

const BlogPage = () => {
  const { blog, loading } = useContext(AuthContext);
  const blogs = blog.getBlogs;

  return (
    <Layout>
      <div className="grid md:grid-cols-[2fr_1fr] md:max-w-[700px] gap-8 max-md:max-w-[420px]">
        <Outlet />

        <div className="grid ">
          <div className="w-[290px]">
            <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
              BLOGS
            </h1>
            <div className="grid grid-cols-1 md:ml-8 gap-1 mt-6">
              {loading && <div>Loading</div>}
              {!loading && blogs.length === 0 && <div>We no have blogs</div>}
              {blogs.map((post, index) => (
                <BlogLink post={post} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
const BlogLink = ({ post }) => {
  return (
    <Link
      className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-neutral-50 flex items-center truncate"
      to={`/blog/${post.slug}`}
    >
      {" "}
      {post.title}
    </Link>
  );
};

export { BlogPage };
