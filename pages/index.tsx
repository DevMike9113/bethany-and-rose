import type { NextPage } from "next";
import About from "./about";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 w-[100vw]">
      <h1 className="font-sans flex uppercase text-gray-600 justify-center items-center w-full h-full text-3xl font-bold underline">
        Bethany & Rose Co.
      </h1>
      <About />
    </div>
  );
};

export default Home;
