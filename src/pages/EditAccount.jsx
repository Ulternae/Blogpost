import { useContext, useState } from "react";
import { AuthContext } from "../utilities/auth";
import { useNavigate } from "react-router-dom";

const EditAccount = ({ accion, user, setModal }) => {
  const { authorization, users, auth } = useContext(AuthContext);
  const [dataUser, setDataUser] = useState({ ...user });
  const [password, setPassword] = useState(
    authorization.isAdmin() ? dataUser.password : ""
  );
  const navigate = useNavigate();

  const [isWarning, setWarning] = useState({
    warning: false,
    message: "",
  });

  const dataEditAccount = (e) => {
    e.preventDefault(e);
    const dataUserAccount = [...Object.values(dataUser), password];
    const isCompleteData = dataUserAccount.every((value) => value !== "");
    if (!isCompleteData) {
      setWarning({ warning: true, message: "You need complete all data" });
      return;
    }
    const passwordIsCorrect = password === dataUser.password;
    if (!passwordIsCorrect) {
      setWarning({ warning: true, message: "The password is wrong" });
      return;
    }
    setWarning({ warning: false, message: "" });

    const isSameUser = user.name === auth.user?.username;
    if (isSameUser) {
      auth.setUser({
        ...auth.user,
        role: dataUser.role,
        password: dataUser.password,
        email: dataUser.email,
        username: dataUser.name,
      })
    }
    users.editAccount(user.id, dataUser)
    setModal(false)
    navigate(`/profiles/${dataUser.name}`)
  };

  return (
    <div className="fixed z-10 top-0 left-0 bottom-0 right-0 bg-neutral-600/50 grid place-content-center">
      <div className="w-80 min-h-96 bg-neutral-50 rounded-lg border-2 border-neutral-600 py-6 px-6 grid place-content-center gap-10">
        <h1 className="font-bold text-center text-xl leading-none">
          Edit Profile
        </h1>
        <form className="grid w-72 gap-1" onSubmit={dataEditAccount}>
          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={dataUser.name}
            onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })}
            placeholder="Username"
          />
          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={dataUser.email}
            onChange={(e) =>
              setDataUser({ ...dataUser, email: e.target.value })
            }
            placeholder="Email"
          />

          <select
            onChange={(e) =>
              setDataUser({
                ...dataUser,
                role: e.target.value,
              })
            }
            className="w-full h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            defaultValue={dataUser.role}
            disabled={!authorization.isAdmin()}
          >
            {authorization.isAdmin() && (
              <>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Tester">Tester</option>
                <option value="User">User</option>
              </>
            )}
            {!authorization.isAdmin() && (
              <>
                <option value={dataUser.role}>{dataUser.role}</option>
              </>
            )}
          </select>

          <input
            type="text"
            className="w-full h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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
          <p className="text-center mt-2">{isWarning.message}</p>
        )}
      </div>
    </div>
  );
};

export { EditAccount };
