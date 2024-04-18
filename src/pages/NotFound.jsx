import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="grid place-content-center md:place-content-end ">
        <div className="w-[290px]">
          <h1 className="text-2xl mb-4 md:mb-0 font-bold text-center md:text-start">
            This page not was found
          </h1>
          <button
            className="mt-6 w-48 h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
            onClick={() => navigate("/")}
          >
            Go to home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export { NotFound };
