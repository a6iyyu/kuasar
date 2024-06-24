import React from "react";
import CountUp from "react-countup";
import numberLists from "../types/number-lists";

const ListOfFacts: React.FC = () => {
  return (
    <main className="list-of-facts mx-auto mb-12 flex h-fit w-4/5 flex-col justify-between lg:flex-row">
      <section className="absolute right-0 z-0 h-40 w-40 bg-[#1fddff] [filter:blur(9rem)]"></section>
      {numberLists.map((data, i) => (
        <section key={i} className="z-10 mt-12 grid h-full w-full cursor-default place-items-center rounded-xl bg-gradient-to-tr from-[#24201f] to-[#202020] py-6 text-gray-50 [box-shadow:0.3rem_0.3rem_0_#bcbcbc] lg:mt-0 lg:w-[30%]">
          <img src={data.img} alt={data.alt} width={data.width} className="mt-4 font-semibold text-gray-950" />
          <CountUp
            start={data.start}
            end={data.end}
            duration={5}
            className="mt-8 text-3xl font-black"
            formattingFn={value => {
              if (value === 7e3) {
                return "7K+";
              } else if (value === 8e6) {
                return "8B+";
              }
              return value.toString();
            }}
          />
          <h4 className="my-4 text-xl font-semibold">{data.title}</h4>
          <h5 className="mx-auto my-4 w-4/5 text-justify text-sm font-medium leading-loose">
            {data.description}
          </h5>
        </section>
      ))}
    </main>
  );
};

export default ListOfFacts;