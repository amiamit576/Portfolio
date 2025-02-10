import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../utils/constants.js";
import { useEffect, useRef } from "react";
import debounce from "lodash/debounce";

function NavBar({
  isHamburgerMenuOpen,
  setIsHamburgerMenuOpen,
  setIsDropDownMenuOpen,
  setHoverLinkIndex,
}) {
  // Using useRef to store the timeout ID......
  const timeoutRef = useRef(null);

  // Toggles the hamburger......
  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };


  const handleMouseEnter = (hoverLinkIndex) => {
    setIsDropDownMenuOpen(true);
    setHoverLinkIndex(hoverLinkIndex);

    // Clearing any existing timeout.......
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };


  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropDownMenuOpen(false);
    }, 500);
  };

  useEffect(() => {
    // Debounced function to handle window resizing......
    const handleResize = debounce(() => {
      if (window.innerWidth > 766) {
        setIsHamburgerMenuOpen(false);
      }
    }, 300); // Debounce to optimize performance

    // Adding event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsHamburgerMenuOpen]);


  return (
    <div className="w-full h-[70px] bg-black-background border-2 flex items-center justify-center fixed z-50">
      <div className="w-full sm:w-full md:w-[1000px] h-full flex justify-between items-center font-wix text-white">
        {/* Logo section */}
        <button id="nav-logo-part" className="cursor-pointer">
          <img src="assets/logo.svg" alt="logo" className="h-[50px] w-[50px] m-2" />
        </button>

        {/* Center Navigation Links */}
        <div id="nav-center-part" className="hidden h-full w-[100%] md:flex justify-between items-center md:w-[70%] px-2">
          {navLinks.map((navLink, index) => (
            <NavLink
              key={index}
              to={navLink.linkTo}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="h-full flex items-center transition duration-500 ease-in-out hover:border-b-3 border-transparent hover:border-red-button"
            >
              {navLink.name}
            </NavLink>
          ))}

          {/* Estimate Button */}
          <button id="nav-right-part" className="rounded-lg py-2 px-6 bg-red-button hover:bg-red-500 cursor-pointer">
            Get Estimate
          </button>
        </div>

        {/* Hamburger Menu.............*/}
        <button className="md:hidden mr-4 text-3xl cursor-pointer" onClick={toggleHamburgerMenu}>
          {isHamburgerMenuOpen ? "X" : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
