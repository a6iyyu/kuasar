import React, { useEffect, useState } from "react";
import ListOfSearch from "./list-of-search";

const Search: React.FC = () => {
  const [country, setCountry] = useState<any[]>([]);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query GetCountries {
            countries {
              capital
              code
              currency
              emojiU
              languages {name}
              name
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.data.countries);
        setFilteredCountries(data.data.countries);
      })
      .catch((error) => {
        console.error("Error: " + error), setFetchError(true);
      });
  }, []);

  const HandleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setInput(searchTerm);

    if (searchTerm) {
      const filtered = country.filter((country) =>
        country["name"].toLowerCase().includes(searchTerm),
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(country);
    }
  };

  return (
    <main className="search-section mx-auto h-fit w-4/5">
      <h3 className="cursor-default text-center text-4xl font-bold text-gray-50">
        List Of Countries
      </h3>
      <hr className="my-2 h-0.5 w-full text-gray-50" />
      <h5 className="my-8 cursor-default text-center text-lg font-medium text-gray-50 lg:text-justify">
        Search for the country you want to explore.
      </h5>
      <section className="mb-8 flex h-16 w-full rounded-full" style={{ backgroundColor: "#211c1d" }}>
        <input
          type="text"
          placeholder="Search . . ."
          className="h-full w-3/4 rounded-full bg-transparent pl-8 text-gray-50 outline-none lg:w-[90%]"
          onChange={HandleSearchFilter}
          value={input}
        />
        <div className="grid h-full w-1/4 cursor-pointer place-items-center lg:w-[10%]">
          <i className="fas fa-search text-lg text-gray-50"></i>
        </div>
      </section>
      {fetchError ? (
        <section className="mb-20 grid h-fit w-full place-items-center">
          <img src="/404.png" alt="Error while fetching countries!" width={500} />
          <h4 className="cursor-default text-xl font-semibold text-gray-50">
            Error while fetching countries! 😔
          </h4>
        </section>
      ) : (
        <ListOfSearch countries={filteredCountries} />
      )}
    </main>
  );
};

export default Search;