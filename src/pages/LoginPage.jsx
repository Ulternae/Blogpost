import React, { useContext, useState } from "react";
import { Layout } from "./Layout";
import { AuthContext, useAuth } from "../utilities/auth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useAuth();
  const { users, loading } = useContext(AuthContext);

  const [userIdSelect, setUserIdSelect] = useState();

  const dataUser = users.getDataUserId(userIdSelect);

  const [isWarning, setWarning] = React.useState({
    warning: false,
    message: "",
  });

  const login = (e) => {
    e.preventDefault();
    const dataUserValues = Object.values(dataUser);
    const isDataComplete = dataUserValues.every((value) => value !== "");

    if (!isDataComplete) {
      setWarning({ warning: true, message: "You need complete all data" });
      return;
    }
    
    const validateEmail =
    dataUserValues[3].includes("@") && dataUserValues[3].includes(".");
    if (!validateEmail) {
      setWarning({ warning: true, message: "This email is no valid" });
      return;
    }

    setWarning({ warning: false });
    auth.login({
      ...dataUser,
    });
  };
  if (auth.user) {
    return <Navigate to={"/home"} />;
  }

  return (
    <Layout>
      <div className="grid place-content-center md:place-content-end ">
        <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
          Login
        </h1>
        <p className="md:mb-8 mb-12">
          Welcome back, Please login to your account
        </p>
        <form className="grid grid-cols-1 md:ml-8 gap-1" onSubmit={login}>
          <select
            onChange={(e) => {
              const selectedOption = e.target.options[e.target.selectedIndex];
              const dataId = selectedOption.getAttribute("data-id");
              setUserIdSelect(dataId);
            }}
            className="w-full h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
          >
            <option value="">Select a user</option>
            {!loading &&
              users.getData.map((value, index) => (
                <option key={index} value={value.name} data-id={value.id}>
                  {value.name}
                </option>
              ))}
          </select>

          <div className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-white flex items-center">
            <p>{dataUser?.role || ""}</p>
          </div>
          <div className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-white flex items-center">
            <p>{dataUser?.email || ""}</p>
          </div>
          <div className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-white flex items-center">
            <p>{dataUser?.password || ""}</p>
          </div>
          <button
            className="mt-14 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
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

export { LoginPage };
