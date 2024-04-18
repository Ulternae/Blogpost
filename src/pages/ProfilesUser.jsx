import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { useContext, useState } from "react";
import { AuthContext } from "../utilities/auth";
import leftIcon from "../assets/left.svg";
import { createPortal } from "react-dom";
import { Delete } from "./Delete";
import { EditAccount } from "./EditAccount";

const ProfilesUser = () => {
  const { users, authorization, loading } = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const dataUser = users.getDataUser(params.user);
  const [portalDelete, setPortalDelete] = useState(false);
  const [portalEdit, setPortalEdit] = useState(false);
  const isExistingUser = !!dataUser;

  const canDeleteAccount = authorization.deleteAccount();
  const canEditAccount = authorization.editAccount(params.user);

  if (loading) {
    return (
      <Layout>
        <div className="grid place-content-center md:place-content-end ">
          <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
            Loading info of {params.user} ...
          </h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      {isExistingUser && (
        <>
          <div className="grid place-content-center md:place-content-end ">
            <div className="w-auto">
              <span className="flex items-center">
                <img
                  src={leftIcon}
                  alt=""
                  onClick={() => navigate("/profiles")}
                />
                <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
                  Profile user {dataUser.name}
                </h1>
              </span>

              <div className="mt-4 flex flex-col gap-2 mb-8">
                <span className="grid grid-cols-[120px_auto] ">
                  <p className="bg-neutral-500 rounded-s-lg py-2 px-6 w-44 text-neutral-50">
                    Username
                  </p>
                  <p className="bg-neutral-300 rounded-r-lg py-2 px-6 w-full text-neutral-950">
                    {dataUser.name}
                  </p>
                </span>
                <span className="grid grid-cols-[120px_auto] ">
                  <p className="bg-neutral-500 rounded-s-lg py-2 px-6 w-44 text-neutral-50">
                    Email
                  </p>
                  <p className="bg-neutral-300 rounded-r-lg py-2 px-6 w-full text-neutral-950">
                    {dataUser.email}
                  </p>
                </span>
                <span className="grid grid-cols-[120px_auto] ">
                  <p className="bg-neutral-500 rounded-s-lg py-2 px-6 w-44 text-neutral-50">
                    Role
                  </p>
                  <p className="bg-neutral-300 rounded-r-lg py-2 px-6 w-full text-neutral-950">
                    {dataUser.role}
                  </p>
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              {canDeleteAccount && (
                <button
                  className="w-48 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
                  onClick={() => {
                    setPortalDelete(true);
                  }}
                >
                  Delete Account
                </button>
              )}
              {canEditAccount && (
                <button
                  className="w-48 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
                  onClick={() => setPortalEdit(true)}
                >
                  Edit Account
                </button>
              )}
            </div>
          </div>

          {portalDelete &&
            createPortal(
              <Delete
                text={"You are sure in delete this Account"}
                accion={() => {
                  users.deleteAccount(dataUser.name);
                  setPortalDelete(false);
                }}
                setModal={setPortalDelete}
              />,
              document.body
            )}

          {portalEdit &&
            createPortal(
              <EditAccount
                user={dataUser}
                accion={() => {
                  setPortalEdit(false);
                }}
                setModal={setPortalEdit}
              />,
              document.body
            )}
        </>
      )}

      {!isExistingUser && (
        <div className="grid place-content-center md:place-content-end ">
          <h1 className="text-2xl mb-4 md:mb-0  text-center md:text-start">
            User <span className="font-bold">{params.user}</span> no found
          </h1>
          <button
            className="w-60  h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700 mt-6"
            onClick={() => navigate("/profiles", { replace: true })}
          >
            View Profiles
          </button>
        </div>
      )}
    </Layout>
  );
};

export { ProfilesUser };
