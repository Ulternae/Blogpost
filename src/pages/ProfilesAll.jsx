import { Link } from "react-router-dom";
import { Layout } from "./Layout";
import { useContext } from "react";
import { AuthContext } from "../utilities/auth";

const ProfilesAll = () => {
  const { users } = useContext(AuthContext);
  return (
    <Layout>
      <div className="grid min-w-full md:place-content-start ">
        <div className="">
          <h1 className="text-2xl mb-4 md:mb-0 font-bold text-start max-md:text-center">
            PROFILES
          </h1>
          <p className="md:mb-8 mb-12 max-md:text-center">Welcome this is all profiles</p>
          <div className="grid gap-1 md:grid-cols-3 max-md:grid-cols-1">
            {users.getData.map(({ name }, index) => (
              <LinkProfilesUser name={name} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const LinkProfilesUser = ({ name }) => {
  return (
    <Link
      className="max-w-auto w-56 max-md:w-60 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-neutral-50 flex items-center truncate"
      to={`/profiles/${name}`}
    >
      {name}
    </Link>
  );
};

export { ProfilesAll };
