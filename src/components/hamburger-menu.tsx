import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

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
          <h5 className="grid h-full w-full cursor-pointer place-items-center rounded-xl py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200">
            About
          </h5>
          <h5 className="grid h-full w-full cursor-pointer place-items-center rounded-xl py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200">
            Summary
          </h5>
          <h5 className="grid h-full w-full cursor-pointer place-items-center rounded-xl py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200">
            Search
          </h5>
        </div>
      )}
    </section>
  );
};

export default HamburgerMenu;