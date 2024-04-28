import React, { useRef, useEffect, useState } from "react";
// import Logo from "../../assets/Dark Mode.png";
import Logo from "../../assets/Dark Mode.png";
import Image from "next/image";
import "./header.css";
import Link from "next/link";

const Header = () => {
//   const headerShrink = useRef(null);
// const [headerShrink, setheaderShrink] = useState(null);
//   const [hamburger, setHamburger] = useState(false);
  const [headerShrink, setHeaderShrink] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
//   const menuRef = useRef(null);

//   const headerFunc = () => {
//     if (
//       document.body.scrollTop > 80 ||
//       document.documentElement.scrollTop > 80
//     ) {
//       headerShrink.current.classList.add("header__shrink");
//     } else {
//       headerShrink.current.classList.remove("header__shrink");
//     }
//   };
const handleHeaderShrink = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setHeaderShrink((prev) => prev.classList.add("header__shrink"));
    } else {
      setHeaderShrink((prev) => prev.classList.remove("header__shrink"));
    }
  
}
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderShrink);

    return () => window.removeEventListener("scroll", handleHeaderShrink);
  }, []);

//   const handleClick = (e) => {
//     e.preventDefault();

//     const targetAttr = e.target.getAttribute("href");

//     const location = document.querySelector(targetAttr).offsetTop;

//     window.scrollTo({
//       left: 0,
//       top: location - 80,
//     });
//   };

  const toggleMenu = () => {
    setHamburgerOpen((prev) => !prev);
    // menuRef.current.classList.toggle("menu__active");
    if (hamburgerOpen) {
      // Menu is closing, remove overflow-hidden className
      document.body.classList.remove("overflow-hidden");
    } else {
      // Menu is opening, add overflow-hidden className
      document.body.classList.add("overflow-hidden");
    }
  };
  const menuItems = [
    "home",
    "offer",
    "bonus",
    "pricing",
    "testimonial",
    "footer",
  ];
  return (
    <header 
    // ref={headerShrink} 
    className={`${headerShrink ? 'header__shrink' : ''}`}
    id="header">
      <div className="Container ">
        {/* desktop menu */}
        <div className="flex items-center justify-between ">
          <div className=" w-[110px] md:w-[150px] z-50">
            {/* <img src={Logo} alt="logo" className="w-full " /> */}
            <Image src={Logo} alt="logo" className="w-full " />
          </div>
          {/* --navigation-- */}
          <div 
        //   ref={menuRef}
           className="navigation">
            <ul className="hidden md:flex items-center gap-10 text-white capitalize">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:text-primary duration-300 transition-all"
                >
                  <Link key={item} href={`#${item}`}>
                <span className="hover:text-primary duration-300 transition-all">{item}</span>
              </Link>
                </li>
              ))}
            </ul>
          </div>

          <span
            className={`block md:hidden hamburger  ${hamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </span>
        </div>

        {/* mobile menu */}
        <div
          id="menu"
          className={`${
            hamburgerOpen ? "flex" : "hidden"
          } md:hidden bg-black container min-h-screen absolute top-0 left-0 flex flex-col  self-end    pt-32 pl-20 space-y-8  uppercase bg-dark z-10 text-white/80`}
        >
          {menuItems.map((item) => (
            <Link key={item} href={`#${item}`}>
              <span onClick={toggleMenu}>{item}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
