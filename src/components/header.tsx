import React, { useState } from "react";

const Header: React.FC = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const menus = ["About", "Summary", "Search"];

  const handleHeaderSticky = () => {
    if (window.scrollY > 50) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  window.addEventListener("scroll", handleHeaderSticky);

  return (
    <header
      className={`fixed z-20 grid h-36 w-full place-items-center transition-all duration-300 ease-in-out ${headerSticky ? "bg-gradient-to-tr from-gray-900 to-gray-800 shadow-lg" : "bg-none"}`}
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
        <section className="flex h-full w-3/5 items-center justify-evenly">
          {menus.map((menu) => (
            <h5 className="cursor-pointer text-lg font-medium text-gray-50 transition-all duration-300 ease-in-out hover:text-gray-300 hover:underline">
              {menu}
            </h5>
          ))}
        </section>
      </nav>
    </header>
  );
};

export default Header;