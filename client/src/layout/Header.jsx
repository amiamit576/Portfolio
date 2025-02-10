import { useState } from "react";
import NavBar from "../components/NavBar";
import HamburgerMenu from "../components/HamburgerMenu";
import NavBarDropDown from "../components/NavBarDropDown";

const Header = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const [hoverLinkIndex, setHoverLinkIndex] = useState(null);

  return (
    <>
      <NavBar
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
        isDropDownMenuOpen = {isDropDownMenuOpen}
        setIsDropDownMenuOpen={setIsDropDownMenuOpen}
        setHoverLinkIndex={setHoverLinkIndex}
      />

      {isHamburgerMenuOpen && <HamburgerMenu />}


      {isDropDownMenuOpen && (
        <NavBarDropDown
          setIsDropDownMenuOpen={setIsDropDownMenuOpen}
          hoverLinkIndex={hoverLinkIndex}
        />
      )}
    </>
  );
};

export default Header;
