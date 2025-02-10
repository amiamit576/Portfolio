import { useState } from "react";
import NavBar from "../components/NavBar";
import HamburgerMenu from "../components/HamburgerMenu";

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  return (
    <>
      <NavBar
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
      {isHamburgerMenuOpen && <HamburgerMenu/>}
    </>
  );
};

export default Header;
