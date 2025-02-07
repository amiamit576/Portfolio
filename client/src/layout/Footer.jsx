import { v4 as uniqueKey } from "uuid";
import {
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaGlobe,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const socialMedia = [
  { name: "LinkedIn", icon: <FaLinkedin />, href: "#" },
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "Website", icon: <FaGlobe />, href: "#" },
  { name: "Pinterest", icon: <FaPinterest />, href: "#" },
  { name: "Instagram", icon: <FaInstagram />, href: "#" },
];

const services = [
  "Web Development",
  "Mobile Development",
  "Machine Learning and AI",
  "QA Testing",
  "Code Audit",
];

function Footer() {
  return (
    <footer className="bg-black text-white py-12 h-auto">
      <div className="mx-auto max-w-[1330px] px-6">
        {/* Grid Layout */}
        <div className="mx-auto max-w-[1080px] grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {/* Logo & Social Links */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <img
                src="assets/logo.svg"
                alt="Anadea Logo"
                className="h-16 cursor-pointer"
              />
            </div>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 max-w-[170px] justify-center">
              {socialMedia.map((item) => (
                <a
                  key={uniqueKey()}
                  href={item.href}
                  className="border border-pink-500 p-2 rounded-full flex items-center justify-center w-10 h-10 text-xl hover:bg-pink-600 transition duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            {/* Extra Links */}
            <div className="mt-4 space-y-1">
              <a
                href="#"
                className="block text-xs hover:text-pink-400 cursor-pointer"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="block text-xs hover:text-pink-400 cursor-pointer"
              >
                Business Name Generator
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 hover:text-pink-500">
              Services
            </h3>
            <ul className="hidden [@media(min-width:450px)]:block space-y-2">
              {services.map((service) => (
                <li
                  key={uniqueKey()}
                  className="hover:text-pink-400 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 hover:text-pink-500 cursor-pointer">
              Contact
            </h3>
            <button className="border border-white px-4 py-2 bg-black rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
              Contacts
            </button>

            <p className="mt-2 hover:text-pink-400 cursor-pointer">
              contact@ayn.com
            </p>
            <p className="mt-2 font-bold text-lg hover:text-pink-400 cursor-pointer">
              Office
            </p>
            <p className="mt-2 hover:text-pink-400 cursor-pointer">Delhi</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-100 mt-12 max-w-[1080px] mx-auto"></div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center text-sm">
          <p>© 2000-2025 All rights reserved</p>
          <p>Privacy & Terms</p>
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
