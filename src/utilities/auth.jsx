import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { blogdata } from "../api/blogdata";
import { userList } from "../api/usersdata";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataBlogs, setDataBlogs] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirectPage, setRedirectPage] = useState("/profile");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("blogs")) {
        setDataBlogs(blogdata);
        localStorage.setItem("blogs", JSON.stringify(blogdata));
        setLoading(false);
      } else {
        const data = JSON.parse(localStorage.getItem("blogs"));
        setDataBlogs(data);
        setLoading(false);
      }
    }, 1000);
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("users")) {
        setDataUser(userList);
        localStorage.setItem("users", JSON.stringify(userList));
        setLoading(false);
      } else {
        const data = JSON.parse(localStorage.getItem("users"));
        setDataUser(data);
        setLoading(false);
      }
    }, 1000);
  }, [loading]);

  const login = (values) => {
  // const login = ({ username, email, password }) => {
    // const { role } = dataUser.find(({ name }) => name === username) || {
    //   role: "User",
    // };

    setUser({ ...values, username: values.name });

    navigate(`${redirectPage}`);
  };
  const logout = () => {
    setUser(null);
    navigate("/login");
  };
  const isAdmin = () => {
    return user?.role === "Admin" ? true : false;
  };
  const createBlogAuth = () => {
    return isAdmin() || user?.role === "Tester" ? true : false;
  };
  const getBlogAuth = (slug) => {
    const blog = dataBlogs.find((post) => post.slug === slug);
    return blog || {};
  };
  const editBlogAuth = (blog) => {
    const isAuthor = blog?.author === user?.username && !!user?.username;
    return isAdmin() || isAuthor || user?.role === "Editor";
  };
  const deleteBlogAuth = () => {
    return isAdmin();
  };
  const editCommentAuth = (userComment) => {
    return user?.username === userComment ? true : false;
  };
  const deteteBlogData = (id) => {
    const filterBlogs = dataBlogs.filter((blog) => blog.id !== id);
    setDataBlogs(filterBlogs);
    localStorage.setItem("blogs", JSON.stringify(filterBlogs));
  };
  const editBlogData = (id, value) => {
    const filterBlogs = dataBlogs.filter((blog) => blog.id !== id);
    const editBlog = value;
    setDataBlogs([editBlog, ...filterBlogs]);
    localStorage.setItem("blogs", JSON.stringify([editBlog, ...filterBlogs]));
  };
  const addCommentBlogData = (idBlog, comment) => {
    const filterBlogs = dataBlogs.filter((blog) => blog.id !== idBlog);
    const blog = dataBlogs.filter((blog) => blog.id === idBlog);
    blog[0].comments.push(comment);
    setDataBlogs([...blog, ...filterBlogs]);
    localStorage.setItem("blogs", JSON.stringify([...blog, ...filterBlogs]));
  };

  const editCommentBlogData = (idBlog, idComment, value) => {
    const filterBlogs = dataBlogs.filter((blog) => blog.id !== idBlog);
    const blog = dataBlogs.filter((blog) => blog.id === idBlog);
    const commentsBlog = blog[0].comments;

    const filterCommentBlog = commentsBlog.filter(
      (comment) => comment.id !== idComment
    );
    const commentBlog = commentsBlog.filter(
      (comment) => comment.id === idComment
    );
    const newCommentBlog = { ...commentBlog[0], text: value };
    const newComments = [...filterCommentBlog, newCommentBlog];

    const newBlog = { ...blog[0], comments: newComments };

    setDataBlogs([newBlog, ...filterBlogs]);
    localStorage.setItem("blogs", JSON.stringify([newBlog, ...filterBlogs]));
  };

  const deleteAccountAuth = () => {
    return isAdmin();
  };
  const editAccountAuth = (name) => {
    return isAdmin() || user?.username === name ? true : false;
  };

  const getDataUser = (username) => {
    const user = users.getData.find((value) => value.name === username);
    return user;
  };

  const getDataUserId = (id) => {
    const user = users.getData.find((value) => value.id === id);
    return user;
  }

  const deleteAccountUser = (username) => {
    const newData = dataUser.filter(({name}) => name !== username)
    setDataUser(newData)
    localStorage.setItem("users" , JSON.stringify(newData))
  }

  const editAccountUser = (idUser, value) => {
    const data = dataUser.filter(({id}) => id !== idUser)
    const newData = [...data, value]

    setDataUser(newData)
    localStorage.setItem("users", JSON.stringify(newData))
  }
  const auth = {
    user,
    setUser,
    login,
    logout,
  };
  const authorization = {
    createBlog: createBlogAuth,
    editBlog: editBlogAuth,
    deleteBlog: deleteBlogAuth,
    getBlog: getBlogAuth,
    editComment: editCommentAuth,

    deleteAccount: deleteAccountAuth,
    editAccount: editAccountAuth,
    isAdmin: isAdmin
  };
  const blog = {
    getBlogs: dataBlogs,
    deteteBlog: deteteBlogData,
    editBlog: editBlogData,
    addCommentBlog: addCommentBlogData,
    editCommentBlog: editCommentBlogData,
  };
  const redirect = {
    page: redirectPage,
    setPage: setRedirectPage,
  };

  const users = {
    getData: dataUser,
    getDataUser: getDataUser,
    getDataUserId: getDataUserId,
    deleteAccount: deleteAccountUser,
    editAccount: editAccountUser,
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        authorization,
        blog,
        loading,
        redirect,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  // Redirect si el usuario no existe
  const auth = useAuth();
  if (!auth.user) return <Navigate to="/" />;

  return props.children;
};

const AuthRouteCreate = (props) => {
  const { authorization } = useContext(AuthContext);
  if (!authorization.createBlog()) return <Navigate to="/" />;
  return props.children;
};

export { AuthContext, AuthProvider, useAuth, AuthRoute, AuthRouteCreate };
