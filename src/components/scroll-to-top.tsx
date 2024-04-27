import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const handleShowScroll = () => {
    if (window.scrollY > 40) {
      setShowScroll(true);
    } else if (window.scrollY <= 40) {
      setShowScroll(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowScroll);
    return () => window.removeEventListener("scroll", handleShowScroll);
  }, [showScroll]);

  return (
    <section
      className={`fixed bottom-16 right-16 z-50 grid h-24 w-24 cursor-pointer place-items-center rounded-full bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-200 
      ${showScroll ? "visible opacity-100" : "invisible opacity-0"}`}
      onClick={ScrollToTop}
    >
      <img
        src="/scroll-to-top.png"
        alt="Scroll To Top"
        className="text-sm font-semibold text-gray-950"
        width={75}
      />
    </section>
  );
};

export default ScrollToTop;