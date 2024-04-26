import React from "react";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <main className="mx-auto grid h-fit w-[85%] place-items-center">
      <section className="m-40 flex h-fit w-3/4 flex-col">
        <h1 className="mb-2 cursor-default text-4xl font-semibold text-gray-50">
          List Of Countries
        </h1>
        <span className="h-0.5 w-full rounded-full bg-gray-50"></span>
      </section>
    </main>
  );
};

export default App;