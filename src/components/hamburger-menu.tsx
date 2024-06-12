import React, { useEffect, useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menus: string[] = ["About", "Summary", "Search"];

  const HandleMenulick = (target: string) => {
    if (document.querySelector(`.${target}-section`)) {
      ((document.querySelector(`.${target}-section`) as HTMLElement) || null).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const HandleOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".hamburger-menu")) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", HandleOutside);
    return () => document.body.removeEventListener("click", HandleOutside);
  }, [open]);

  return (
    <section className="hamburger-menu flex h-full w-3/5 items-center justify-end lg:hidden">
      <i className="fa-solid fa-bars cursor-pointer text-3xl text-gray-50" onClick={() => setOpen(!open)}></i>
      {open && (
        <div className="absolute top-24 z-50 h-fit w-fit rounded-xl bg-slate-50" data-aos="fade-down">
          {menus.map((menu, i) => (
            <h5
              id={menu.toLowerCase()}
              key={i}
              onClick={() => HandleMenulick(menu.toLowerCase())}
              className="grid h-full w-full cursor-pointer place-items-center py-5 font-semibold text-slate-950 transition-all duration-300 ease-in-out hover:bg-slate-200 first:hover:rounded-t-xl last:hover:rounded-b-xl"
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