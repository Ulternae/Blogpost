import { useContext, useState } from "react";
import { AuthContext } from "../utilities/auth";
import { useLocation, useNavigate } from "react-router-dom";

const AddCommentBlog = ({ blogInfo, setModal }) => {
  const { blog, auth, redirect } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const location = useLocation()

  const navigate = useNavigate();
  const user = auth.user?.username || "";
  const userIsLogin = !!auth.user?.username;
  const [isWarning, setWarning] = useState({
    warning: false,
    message: "",
  });


  const newCommentBlog = (e) => {
    e.preventDefault();
    if (comment === "") {
      setWarning({ warning: true, message: "You need complete all data" });
      return;
    }
    if (!userIsLogin) return;
    setWarning({ warning: false, message: "" });

    const commentBlog = {
      text: comment,
      author: user,
      id: crypto.randomUUID(),
    };
    blog.addCommentBlog(blogInfo.id, commentBlog);
    setModal(false);
  };

  return (
    <div className="z-10 top-0 left-0 bottom-0 right-0 bg-neutral-600/50 grid place-content-center fixed">
      <div className="w-80 min-h-96 bg-neutral-50 rounded-lg border-2 border-neutral-600 py-6 px-6 grid place-content-center gap-10">
        <div>
          <h1 className="font-bold text-center text-xl leading-none">
            Add Comment
          </h1>
          <h3 className="text-center">{blogInfo.title}</h3>
        </div>
        {!userIsLogin && (
          <>
            <div className="leading-none font-bold text-center">
              You need login to application for comment this blog
            </div>
            <div className="flex gap-2 mt-8">
              <button
                className="w-1/2 h-10 bg-neutral-50 rounded-lg border-2 "
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-1/2 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
                onClick={() => {
                  navigate("/login")
                  redirect.setPage(location.pathname)
                }}
              >
                Login
              </button>
            </div>
          </>
        )}
        {userIsLogin && (
          <>
            <form onSubmit={newCommentBlog}>
              <textarea
                type="text"
                className="form-sizing-content w-full max-w-96 min-w-72 min-h-40 max-h-96 rounded-lg border-2 border-neutral-500 px-6 py-2 focus:outline-none mt-2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Content"
              />
              <div className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none flex items-center">
                {user}
              </div>

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
              <p className="text-center mt-2">{isWarning.message}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { AddCommentBlog };
