import { useContext, useState } from "react";
import { AuthContext } from "../utilities/auth";

const EditBlog = ({ blogInfo, setModal }) => {
  const { blog } = useContext(AuthContext)
  const [blogDataEdit, setBlogDataEdit] = useState(blogInfo);

  const [isWarning, setWarning] = useState({
    warning: false,
    message: "",
  });

  const newBlog = (e) => {
    e.preventDefault();
    const dataBlogs = Object.values(blogDataEdit);
    const isDataComplete = dataBlogs.every((value) => value !== "");
    if (!isDataComplete) {
      setWarning({ warning: true, message: "You need complete all data" });
      return;
    }

    setWarning({warning: false, message: ''})
    blog.editBlog(blogDataEdit.id, blogDataEdit)
    setModal(false)
  };

  return (
    <div className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-neutral-600/50 grid place-content-center">
      <div className="w-80 min-h-96 bg-neutral-50 rounded-lg border-2 border-neutral-600 py-6 px-6 grid place-content-center gap-10">
        <h1 className="font-bold text-center text-xl leading-none">
          Edit Blog
        </h1>
        <form
          onSubmit={newBlog}
        >
          <input
            type="text"
            className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={blogDataEdit.title}
            onChange={(e) =>
              setBlogDataEdit({ ...blogDataEdit, title: e.target.value })
            }
            placeholder="Title"
          />
          <textarea
            type="text"
            className="form-sizing-content w-full max-w-96 min-h-40 max-h-96 rounded-lg border-2 border-neutral-500 px-6 py-2 focus:outline-none mt-2"
            value={blogDataEdit.content}
            onChange={(e) =>
              setBlogDataEdit({ ...blogDataEdit, content: e.target.value })
            }
            placeholder="Content"
          />
          <input
            type="text"
            className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={blogDataEdit.author}
            onChange={(e) =>
              setBlogDataEdit({ ...blogDataEdit, author: e.target.value })
            }
            placeholder="Author"
          />
          <div className="flex gap-2 mt-8">
            <button
              className="w-1/2 h-10 bg-neutral-50 rounded-lg border-2 "
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              className="w-1/2 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
        {isWarning.warning && (
          <p className="text-center mt-2">
            {isWarning.message}
          </p>
        )}
      </div>
    </div>
  );
};

export { EditBlog };
