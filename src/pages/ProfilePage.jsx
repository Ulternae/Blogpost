import { AuthRoute, useAuth } from "../utilities/auth";
import { Layout } from "./Layout";

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <Layout>
      <AuthRoute>
        <div className="grid place-content-center md:place-content-end ">
          <div className="w-[290px]">
            <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
              Profile
            </h1>
            <p className="md:mb-8 mb-12">
              Welcome {auth.user?.role}, this is your
              profile
            </p>
            <div className="grid grid-cols-1 md:ml-8 gap-1">
              <p className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-neutral-50 flex items-center">
                {auth.user?.username}
              </p>
              <p className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-neutral-50 flex items-center">
                {auth.user?.email}
              </p>
              <p className="w-full max-w-96 h-10 rounded-lg border-2 border-neutral-500 px-6 focus:outline-none bg-neutral-50 flex items-center">
                {auth.user?.password}
              </p>
            </div>
          </div>
        </div>

      </AuthRoute>
    </Layout>
  );
};

export { ProfilePage };
