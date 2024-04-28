import React, { useEffect, useState } from "react";

interface Country {
  capital: string;
  code: string;
  currency: string;
  emojiU: string;
  languages: { name: string }[];
  name: string;
}

const ListOfSearch: React.FC = () => {
  const [countries, setCountries] = useState([] as Country[]);
  const [details, setDetails] = useState<number | null>(null);
  const [fetchError, setFetchError] = useState<boolean>(false);

  const HandleDetails = (i: number) => {
    setDetails((prevDetails) => (prevDetails === i ? null : i));
  };

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
      .then((data) => setCountries(data.data.countries))
      .catch((error) => {
        console.error("Error: " + error), setFetchError(true);
      });
  }, []);

  return (
    <>
      {fetchError ? (
        <section className="mb-20 grid h-fit w-full place-items-center">
          <img
            src="/404.png"
            alt="Error while fetching countries!"
            width={500}
          />
          <h4 className="cursor-default text-xl font-semibold text-gray-50">
            Error while fetching countries! 😔
          </h4>
        </section>
      ) : (
        <main className="mb-12 grid h-fit w-full grid-cols-1 gap-x-10 lg:grid-cols-2">
          {countries.map((country: Country, index: number) => (
            <section
              key={index}
              className="mb-8 cursor-default rounded-lg bg-gradient-to-tr from-gray-900 to-slate-800 text-gray-50"
              style={{ boxShadow: "0.2rem 0.2rem 0 #bcbcbc" }}
            >
              <div className="mx-auto my-5 flex h-fit w-4/5 items-center justify-between font-semibold">
                <h4
                  className="h-full w-fit cursor-pointer text-lg transition-all duration-500 ease-in-out hover:text-gray-300 hover:underline"
                  onClick={() => HandleDetails(index)}
                >
                  {country["name"]}
                </h4>
                <h4 className="h-full w-fit text-sm font-medium">
                  {country["code"]}
                </h4>
              </div>
              {details === index && (
                <h5 className="mx-auto -mt-2 mb-8 h-full w-4/5 text-justify text-sm font-normal leading-loose">
                  {country["name"]} has {country["capital"]} as its capital and
                  its currency is the {country["currency"]}. Local people are
                  accustomed to using several languages spoken, such as:
                  {(country["languages"] as Country[]).map((language: any, i: number) => (
                    <li key={i}>{language["name"]}</li>
                  ))}
                </h5>
              )}
            </section>
          ))}
        </main>
      )}
    </>
  );
};

export default ListOfSearch;