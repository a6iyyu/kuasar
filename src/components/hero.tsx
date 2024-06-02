import React from "react";

const Hero: React.FC = () => {
  return (
    <main
      className="hero mx-auto mb-40 mt-64 flex h-fit w-4/5 flex-col-reverse md:mt-72 xl:flex-row"
      style={{ letterSpacing: "0.075rem" }}
    >
      <section className="absolute z-0 h-40 w-40" style={{ backgroundColor: "#ff85ad", filter: "blur(9rem)" }} ></section>
      <section className="z-10 mt-20 flex h-full w-full flex-col items-center xl:mt-0 xl:w-1/2 xl:items-start">
        <h2 className="cursor-default text-center text-4xl font-bold text-gray-50 xl:text-justify">
          Let's Get To Know Around The World!
        </h2>
        <h5 className="mt-6 cursor-default text-center text-lg font-medium text-gray-50 xl:text-justify">
          Discover more about the geographical location, history and cultural
          diversity that makes each country so unique.
        </h5>
        <div
          className="get-to-know mt-8 h-fit w-fit cursor-pointer rounded-full bg-gray-50 px-9 py-6 font-black text-gray-950 transition-all duration-300 ease-in-out hover:bg-gray-200"
          style={{ boxShadow: "0.3rem 0.3rem 0 #bcbcbc" }}
        >
          GET TO KNOW &nbsp; &#10132;
        </div>
      </section>
      <section className="z-10 flex h-full w-full items-center justify-center xl:w-1/2 xl:justify-end">
        <img
          src="/mount-everest.jpg"
          alt="Hero Image"
          className="w-fit cursor-default font-semibold text-gray-50 md:w-[40rem] xl:w-[25rem]"
          style={{ borderRadius: "76% 24% 23% 77% / 51% 39% 61% 49%" }}
        />
      </section>
    </main>
  );
};

export default Hero;