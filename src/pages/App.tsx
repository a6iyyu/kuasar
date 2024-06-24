import React, { useEffect } from "react";
import WebsiteMeta from "../components/website-meta";
import ScrollToTop from "../components/scroll-to-top";
import Header from "../components/header";
import ScrollIndicator from "../components/scroll-indicator";
import Hero from "../components/hero";
import About from "../components/about";
import ListOfFacts from "../components/list-of-facts";
import Summary from "../components/summary";
import Search from "../components/search";

const App: React.FC = () => {
  useEffect(() => {
    const scrollIntoView = (trigger: Element, target: Element) => {
      trigger.addEventListener("click", () => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    };

    const AboutButton = null || (document.getElementById("about") as HTMLElement || null);
    const AboutSection = null || (document.querySelector(".about-section") as HTMLElement || null);
    scrollIntoView(AboutButton, AboutSection);

    const SummaryButton = null || (document.getElementById("summary") as HTMLElement || null);
    const SummarySection = null || (document.querySelector(".summary-section") as HTMLElement || null);
    scrollIntoView(SummaryButton, SummarySection);

    const SearchButton = null || (document.getElementById("search") as HTMLElement || null);
    const SearchSection = null || (document.querySelector(".search-section") as HTMLElement || null);
    scrollIntoView(SearchButton, SearchSection);

    const GetToKnow = null || (document.querySelector(".get-to-know") as HTMLElement || null);
    const ListOfFacts = null || (document.querySelector(".list-of-facts") as HTMLElement || null);
    scrollIntoView(GetToKnow, ListOfFacts);
  });

  return (
    <>
      <WebsiteMeta />
      <ScrollToTop />
      <Header />
      <ScrollIndicator />
      <Hero />
      <About />
      <ListOfFacts />
      <Summary />
      <Search />
    </>
  );
};

export default App;