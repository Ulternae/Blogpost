import { useContext } from "react";
import { AuthContext, useAuth } from "../utilities/auth";
import { Layout } from "./Layout";

const LogoutPage = () => {
  const auth = useAuth();
  const { redirect } = useContext(AuthContext)
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
    redirect.setPage("/profile")
  };

  return (
    <Layout>
      <div className="grid place-content-center md:place-content-end ">
        <div className="w-[290px]">
          <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
            Logout
          </h1>
          <p className="md:mb-8 mb-12 text-center md:text-start">Are your sure you want to get out?</p>
          <div className="grid grid-cols-1 md:ml-8 gap-1">
            <button
              className=" h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
              onClick={logout}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { LogoutPage };
