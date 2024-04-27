import React from "react";
import "../styles/tailwind.css";
import Header from "../components/header";
import ScrollIndicator from "../components/scroll-indicator";
import Hero from "../components/hero";
import Summary from "../components/summary";
import ScrollToTop from "../components/scroll-to-top";

const App: React.FC = () => {
  return (
    <body className="flex h-fit w-full flex-col overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <ScrollIndicator />
      <Hero />
      <Summary />
    </body>
  );
};

export default App;