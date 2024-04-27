import React from "react";
import CountUp from "react-countup";
import numberLists from "../types/number-lists";

const Summary: React.FC = () => {
  return (
    <main className="list-of-facts mx-auto mb-20 flex h-fit w-4/5 justify-between">
      <section
        className="absolute right-0 z-0 h-40 w-40"
        style={{ backgroundColor: "#1fddff", filter: "blur(9rem)" }}
      ></section>
      {numberLists.map((data, i) => (
        <section
          className="z-10 grid h-full w-1/4 cursor-default place-items-center rounded-xl py-6 text-gray-50"
          key={i}
          style={{
            backgroundImage: "linear-gradient(to top right, #24201f, #202020)",
            boxShadow: "0.3rem 0.3rem 0 #bcbcbc",
          }}
        >
          <img
            src={data.img}
            alt={data.alt}
            width={data.width}
            className="mt-4 font-semibold text-gray-950"
          />
          <CountUp
            start={data.start}
            end={data.end}
            duration={5}
            className="mt-8 text-3xl font-black"
            formattingFn={(value) => {
              if (value === 7e3) {
                return "7K+";
              } else if (value === 8e6) {
                return "8B+";
              }
              return value.toString();
            }}
          />
          <h4 className="my-4 text-xl font-semibold">{data.title}</h4>
          <h5 className="mx-auto my-4 w-4/5 text-justify text-sm font-medium">
            {data.description}
          </h5>
        </section>
      ))}
    </main>
  );
};

export default Summary;