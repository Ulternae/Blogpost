import { NavLink } from "react-router-dom";
import { AuthContext, useAuth } from "../utilities/auth";
import MenuIcon from '../assets/menu.svg'
import React from "react";
const Menu = () => {
  const auth = useAuth()
  const { authorization } = React.useContext(AuthContext)

  return (
    <div className="bg-gray-50 h-16 flex items-center gap-3 py-1 px-4 md:border-gray-500 border-2 md:rounded-full md:w-fit md:absolute md:top-12 md:z-10 md:left-12 font-bold text-lg text-black overflow-auto">
      {/* <img src={MenuIcon} className="mr-4 ml-2 w-8" alt="" /> */}
      {routes.map((route, index) => {
        if (route.private && !auth.user) return null
        if (route.onlyPublic && !!auth.user) return null
        if (route.beta && (!authorization.createBlog() || !auth.user)) return null;

        return (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? "text-white bg-black py-1 px-4 rounded-full " : ""
            }
            to={route.to}
          >
            {route.text}
          </NavLink>
        )
      })}
    </div>
  ); 
};


const routes = [];
routes.push({
  to: "/",
  text: "HOME",
  private: false
});
routes.push({
  to: "/blog",
  text: "BLOGS",
  private: false
});
routes.push({
  to: "/profile",
  text: "PROFILE",
  private: true
});
routes.push({
  to: "/login",
  text: "LOGIN",
  private: false,
  onlyPublic: true

});
routes.push({
  to: "/logout",
  text: "LOGOUT",
  private: true,
});
routes.push({
  to: "/create",
  text: "CREATE",
  private: true,
  beta: true
});
export { Menu };
