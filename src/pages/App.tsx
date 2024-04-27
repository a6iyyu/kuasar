import React from "react";
import "../styles/tailwind.css";
import Header from "../components/header";
import ScrollIndicator from "../components/scroll-indicator";
import Hero from "../components/hero";
import Summary from "../components/summary";
import ScrollToTop from "../components/scroll-to-top";
import ListOfFacts from "../components/list-of-facts";
import About from "../components/about";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ScrollIndicator />
      <Hero />
      <ListOfFacts />
      <About />
      <Summary />
    </>
  );
};

export default App;