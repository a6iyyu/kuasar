import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus: string[] = ["About", "Summary", "Search"];

  return (
    <section className="flex h-full w-3/5 items-center justify-end lg:hidden">
      <i
        className="fa-solid fa-bars cursor-pointer text-3xl text-gray-50"
        onClick={() => setOpen(!open)}
      ></i>
      {open && (
        <div
          className="absolute top-24 h-fit w-fit rounded-xl bg-slate-50"
          data-aos={open ? "fade-down" : "fade-up"}
        >
          {menus.map((menu, i) => (
            <h5
              id={menu.toLowerCase()}
              key={i}
              className="grid h-full w-full cursor-pointer place-items-center rounded-xl py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200"
            >
              {menu}
            </h5>
          ))}
        </div>
      )}
    </section>
  );
};

export default HamburgerMenu;