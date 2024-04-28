import React, { useState } from "react";
import HamburgerMenu from "./hamburger-menu";

const Header: React.FC = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const menus: string[] = ["About", "Summary", "Search"];

  const handleHeaderSticky = () => {
    if (window.scrollY > 5) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  window.addEventListener("scroll", handleHeaderSticky);

  return (
    <header
      className={`fixed z-50 grid h-28 w-full place-items-center transition-all duration-300 ease-in-out lg:h-36 ${headerSticky ? "bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg" : "bg-none"}`}
    >
      <nav className="flex h-full w-4/5">
        <section className="flex h-full w-2/5 items-center">
          <a href="/" className="h-fit w-fit">
            <img
              src="/logo.png"
              alt="Logo"
              className="font-semibold text-gray-50"
              width={150}
            />
          </a>
        </section>
        <section className="flex h-full w-3/5 items-center justify-end">
          {menus.map((menu, i) => (
            <h5
              className="hidden cursor-pointer text-lg font-medium text-gray-50 transition-all duration-300 ease-in-out hover:text-gray-300 hover:underline lg:flex"
              id={menu.toLowerCase()}
              style={{ letterSpacing: "0.1rem" }}
              key={i}
            >
              {menu}
            </h5>
          ))}
        </section>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;