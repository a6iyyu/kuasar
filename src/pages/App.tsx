import React, { useEffect } from "react";
import "../styles/tailwind.css";
import Header from "../components/header";
import ScrollIndicator from "../components/scroll-indicator";
import Hero from "../components/hero";
import ScrollToTop from "../components/scroll-to-top";
import Summary from "../components/list-of-facts";
import About from "../components/about";

const App: React.FC = () => {
  useEffect(() => {
    const scrollIntoView = (trigger: Element, target: Element) => {
      trigger.addEventListener("click", () => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    };

    const AboutButton = null || (document.getElementById("about") as HTMLElement);
    const AboutSection = null || (document.querySelector(".about-section") as HTMLElement);
    scrollIntoView(AboutButton, AboutSection);

    const GetToKnow = null || (document.querySelector(".get-to-know") as HTMLElement);
    const ListOfFacts = null || (document.querySelector(".list-of-facts") as HTMLElement);
    scrollIntoView(GetToKnow, ListOfFacts);
  });

  return (
    <>
      <ScrollToTop />
      <Header />
      <ScrollIndicator />
      <Hero />
      <About />
      <Summary />
    </>
  );
};

export default App;