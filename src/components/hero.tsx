import React from "react";

const Hero: React.FC = () => {
  return (
    <main
      className="hero mx-auto mb-40 mt-72 flex h-fit w-4/5"
      style={{ letterSpacing: "0.075rem" }}
    >
      <section
        className="absolute z-0 h-40 w-40"
        style={{ backgroundColor: "#ff85ad", filter: "blur(9rem)" }}
      ></section>
      <section className="z-10 flex h-full w-1/2 flex-col items-start">
        <h2 className="cursor-default text-justify text-4xl font-bold text-gray-50">
          Let's Get To Know Around The World!
        </h2>
        <h5 className="mt-6 cursor-default text-justify text-lg font-medium text-gray-50">
          Discover more about the geographical location, history and cultural
          diversity that makes each country so unique.
        </h5>
        <div
          className="mt-8 h-fit w-fit cursor-pointer rounded-full bg-gray-50 px-9 py-6 font-black text-gray-950 transition-all duration-300 ease-in-out hover:bg-gray-200"
          style={{ boxShadow: "0.3rem 0.3rem 0 #bcbcbc" }}
        >
          GET TO KNOW &nbsp; &#10132;
        </div>
      </section>
    </main>
  );
};

export default Hero;