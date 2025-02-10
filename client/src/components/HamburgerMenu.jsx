import { NavLink } from "react-router";
import { v4 as uniqueKey } from "uuid";
import { navLinks } from "../utils/constants";
import { useState } from "react";
import { FaAngleDown , FaAngleUp } from "react-icons/fa";
import { lowerCase } from "lodash";

function HamburgerMenu() {
  const [linkIndex, setLinkIndex] = useState(false);

  const handleToggle =(index)=>{
    setLinkIndex(prevIndex => (prevIndex === index) ? null : index)
  }

  return (
    <div className="text-white h-dvh w-full flex md:hidden justify-between absolute z-10">
      <div className="xs:w-[60%] bg-black-background opacity-40"></div>

      {/* Hamberger Menu Navigation Links....... */}
      <div className="bg-black-background w-full xs:w-[350px] sm:w-[350px] flex flex-col items-baseline pt-25">
        {navLinks?.map((link, index) => (
          <ul
            key={uniqueKey()}
            className="text-white font-semibold text-xl w-full"
          >

            <li>
              <button 
              onClick={()=> handleToggle(index)}
              className= {`${linkIndex === index ? "text-red-button" : "text-white" } w-full flex items-center justify-between p-4 cursor-pointer`}>
                {link.name}
                <span>
                  {(linkIndex === index ) ? <FaAngleUp/>  : <FaAngleDown />} 
                </span>
              </button>

              {/* services contianer...... */}
              { (linkIndex === index) && <div className="w-full flex flex-col font-light text-sm bg-darkGray-background">
                {link.services?.map((service) => (
                  <NavLink
                    to={`${link.linkTo}/${lowerCase(service).split(' ').join('')}`}
                    key={uniqueKey()}
                    className="m-2 pl-2"
                  >
                    {service}
                  </NavLink>
                ))}
              </div>}
            </li>
          </ul>
        ))}

        <div className="w-full m-auto pl-6">
          <button
            id="nav-right-part"
            className="w-[90%] mx-2 rounded-lg py-2 px-6 bg-red-button hover:bg-red-500 cursor-pointer"
          >
            Get Estimate
          </button>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
