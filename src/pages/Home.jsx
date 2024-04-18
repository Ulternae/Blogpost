import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="relative grid max-md:place-content-center md:grid-cols-2 h-full gap-12">
        <div>
          <h1 className="text-5xl md:text-7xl mb-4 md:mb-0 font-bold text-center">
            BLOGPOST
          </h1>
          <p className="md:mb-8 mb-12">
            Read Write Comment as many posts as you want, try here!{" "}
          </p>
          <button onClick={() => navigate("/blog")} className="w-full bg-neutral-700 py-2 px-6 rounded-lg h-12 text-neutral-50 md:mt-12 ">
            BLOGS
          </button>
        </div>

        <div className="md:absolute right-0 bottom-0 flex flex-col max-md:items-end">
          <div>
            <p>Find others user here</p>
            <button
              className="w-40  h-10 bg-neutral-400 rounded-lg border-2 border-neutral-700"
              onClick={() => navigate("/profiles")}
            >
              Profiles
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { Home };
