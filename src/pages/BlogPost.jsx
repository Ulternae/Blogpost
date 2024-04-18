import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../utilities/auth";
import leftIcon from "../assets/left.svg";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Delete } from "./Delete";
import { EditBlog } from "./EditBlog";
import { AddCommentBlog } from "./AddCommentBlog";

const BlogPost = () => {
  const { authorization, blog } = useContext(AuthContext);
  const [portalDelete, setPortalDelete] = useState(false);
  const [portalEdit, setPortalEdit] = useState(false);
  const [portalAddComment, setPortalAddComment] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const slug = params.slug;
  const blogpost = authorization.getBlog(slug);

  const canDelete = authorization.deleteBlog();
  const canEdit = authorization.editBlog(blogpost);
  const { loading } = useContext(AuthContext);
  const [textEditComment, setTextEditComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const isExistingBlog = Object.keys(blogpost).length === 0;
  const returnToBlog = () => {
    navigate("/blog", { replace: true });
    // replace true hace que las rutas nuevas que accedimos sean invisible y reemplzadas por la que pusimos en navigate
    // navigate(-1) // volver hacia atras
  };

  const canEditComment = (userComment, textComment, idComment) => {
    setTextEditComment("");
    setEditingCommentId(null);
    if (authorization.editComment(userComment)) {
      setTextEditComment(textComment);
      setEditingCommentId(idComment);
    }
  };

  const confirmEditComment = () => {
    blog.editCommentBlog(blogpost.id, editingCommentId, textEditComment);
    setEditingCommentId(null);
  };
  return (
    <>
      {loading && <div> </div>}
      {!loading && isExistingBlog && (
        <div>
          This blog{" "}
          <span className="font-bold">{slug.split("-").join(" ")}</span> is no
          found
        </div>
      )}
      {!loading && !isExistingBlog && (
        <div>
          <span className="flex items-center  mb-4">
            <img src={leftIcon} alt="" onClick={returnToBlog} />
            <h1 className="font-bold text-xl leading-6"> {blogpost.title} </h1>
          </span>
          <div className="text-sm mb-2 leading-4">
            <p className="mb-4 text-pretty"> {blogpost.content} </p>
            <p className="text-start "> {blogpost.author}</p>
          </div>

          <div className="grid gap-2 mt-12">
            {canDelete && (
              <button
                className="w-48 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
                onClick={() => setPortalDelete(true)}
              >
                Delete blogpost
              </button>
            )}
            {canEdit && (
              <button
                className="w-48 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
                onClick={() => setPortalEdit(true)}
              >
                Edit blogpost
              </button>
            )}
          </div>

          {portalDelete &&
            createPortal(
              <Delete
                text={"You are sure in delete this Blogpost"}
                accion={() => {
                  blog.deteteBlog(blogpost.id);
                  setPortalDelete(false);
                }}
                setModal={setPortalDelete}
              />,
              document.body
            )}

          {portalEdit &&
            createPortal(
              <EditBlog blogInfo={blogpost} setModal={setPortalEdit} />,
              document.body
            )}

          {portalAddComment &&
            createPortal(
              <AddCommentBlog blogInfo={blogpost} setModal={setPortalAddComment} />,
              document.body
            )}

          <div className="grid gap-8">
            <h1 className="font-bold text-lg mt-8">Comments</h1>
            <div className="grid gap-2">
              {blogpost.comments.map((value) => (
                <div
                  key={value.id}
                  className="bg-neutral-300 py-2 px-6 rounded-lg border-2 border-neutral-500"
                  onDoubleClick={() =>
                    canEditComment(value.author, value.text, value.id)
                  }
                  onKeyDown={(e) => {
                    if (e.code === "Enter") {
                      confirmEditComment(e);
                    }
                  }}
                  onBlur={confirmEditComment}
                >
                  {editingCommentId === value.id ? (
                    <input
                      type="text"
                      className="bg-neutral-300 focus:outline-none font-bold w-full h-auto text-neutral-700" // text-neutral-500
                      value={textEditComment}
                      onChange={(e) => setTextEditComment(e.target.value)}
                    />
                  ) : (
                    <p className="leading-none text-sm">{value.text}</p>
                  )}
                  <p className="text-end text-xs">{value.author}</p>
                </div>
              ))}
            </div>
              <div className="flex justify-end">
                <button
                  className="w-48 h-10 bg-neutral-50 rounded-lg border-2 border-neutral-500"
                  onClick={() => setPortalAddComment(true)}
                >
                  Create comment
                </button>
              </div>

          </div>
        </div>
      )}
    </>
  );
};

export { BlogPost };
