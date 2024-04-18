import { useContext, useState } from "react";
import { Layout } from "./Layout";
import { AuthContext } from "../utilities/auth";
import { Navigate, useNavigate } from "react-router-dom";

const BlogCreate = () => {
  const { blog } = useContext(AuthContext);
  const navigate = useNavigate();

  const [newBlogData, setNewBlogData] = useState({
    title: "Title Default",
    content:
      "perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut",
    author: "Milo",
  });

  const [isWarning, setWarning] = useState({
    warning: false,
    message: "",
  });

  const newBlog = (e) => {
    e.preventDefault()
    const dataBlogs = Object.values(newBlogData);
    const isDataComplete = dataBlogs.every((value) => value !== "");
    if (!isDataComplete) {
      setWarning({ warning: true, message: "You need complete all data" });
      return;
    }
    const dataBlogUser = {
      id: crypto.randomUUID(),
      slug: newBlogData.title.toLowerCase().trim().split(" ").join("-"),
      comments: [],
      ...newBlogData,
    };

    setWarning({ warning: false, message: "" });
    blog.editBlog(dataBlogUser.id, dataBlogUser);
    navigate("/blog")
  };
  return (
    <Layout>
      <div>
        <span className="flex items-center  mb-4">
          <h1 className="font-bold text-xl leading-6 max-md:min-w-80 max-sm:min-w-72">
            NEW BLOG
          </h1>
        </span>
        <form
          className="grid grid-cols-1 place-content-center md:ml-8 gap-1 "
          onSubmit={newBlog}
        >
          <input
            type="text"
            className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={newBlogData.title}
            onChange={(e) =>
              setNewBlogData({ ...newBlogData, title: e.target.value })
            }
            placeholder="Title"
          />
          <textarea
            type="text"
            className="form-sizing-content w-full max-w-96 min-h-40 max-h-96 rounded-lg border-2 border-neutral-500 px-6 py-2 focus:outline-none"
            value={newBlogData.content}
            onChange={(e) =>
              setNewBlogData({ ...newBlogData, content: e.target.value })
            }
            placeholder="Content"
          />
          <input
            type="text"
            className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={newBlogData.author}
            onChange={(e) =>
              setNewBlogData({ ...newBlogData, author: e.target.value })
            }
            placeholder="Author"
          />
          <button
            className="w-full max-w-96 mt-14 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
            type="submit"
          >
            Confirm
          </button>
        </form>
        {isWarning.warning && (
          <p className="md:ml-8 text-center mt-2 md:text-start">
            {isWarning.message}
          </p>
        )}
      </div>
    </Layout>
  );
};

export { BlogCreate };
