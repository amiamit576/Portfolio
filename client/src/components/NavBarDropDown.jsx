import { NavLink } from "react-router";
import { navLinks } from "../utils/constants";
import { v4 as uniqueKey } from "uuid";

function NavBarDropDown({ setIsDropDownMenuOpen, hoverLinkIndex }) {

    const onMouseEnter = () => {
      console.log('mouse in NavBarDropDown')
      setIsDropDownMenuOpen(true);
    };

    const onMouseLeave = () => {
      setIsDropDownMenuOpen(false);
    };

  return (
    <div className="w-full h-[300px] absolute top-17 bg-black-background flex items-end text-white"

      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full h-full flex justify-center items-center py-2 px-20 gap-4">
        {/* Left-side image container */}
        <div className="border-2 border-white w-[30%] h-full flex justify-center items-center">
          {/* Add an image or content here */}
        </div>

        {/* Right-side services container using Flexbox */}
        <div className="border-2 border-white w-[70%] h-full flex flex-col gap-8 flex-wrap p-4">
          {navLinks[hoverLinkIndex]?.services?.map((service) => (
            <NavLink
              key={uniqueKey()}
              className="p-2 flex justify-center text-lg"
            >
              {service}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBarDropDown;
