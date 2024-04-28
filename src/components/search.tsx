import React, { useEffect, useState } from "react";
import ListOfSearch from "./list-of-search";

const Search: React.FC = () => {
  const [input, setInput] = useState<string>("");

  useEffect(() => {});

  return (
    <main className="search-section mx-auto h-fit w-4/5">
      <h3 className="cursor-default text-center text-4xl font-bold text-gray-50">
        List Of Countries
      </h3>
      <hr className="my-2 h-0.5 w-full text-gray-50" />
      <h5 className="my-8 cursor-default text-center text-lg font-medium text-gray-50 lg:text-justify">
        Search for the country you want to explore.
      </h5>
      <section
        className="mb-8 flex h-16 w-full rounded-full"
        style={{ backgroundColor: "#211c1d" }}
      >
        <input
          type="text"
          placeholder="Search . . ."
          className="h-full w-3/4 rounded-full bg-transparent pl-8 text-gray-50 outline-none lg:w-[90%]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="grid h-full w-1/4 cursor-pointer place-items-center lg:w-[10%]">
          <i className="fas fa-search text-lg text-gray-50"></i>
        </div>
      </section>
      <ListOfSearch />
    </main>
  );
};

export default Search;