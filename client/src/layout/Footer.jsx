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
  "MachineLearning and AI",
  "QA Testing",
  "Code Audit",
];

function Footer() {
  return (
    <footer className="bg-black text-[#fff] py-12 h-auto">
      <div className="mx-auto max-w-[1330px] px-6">
        {/* Grid Layout - Max Width 1160px Without Padding */}
        <div className="mx-auto max-w-[1122px] grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
          {/* Logo & Social Links */}
          <div>
            <div className="mb-4">
              <img src="assets/logo.svg" alt="Anadea Logo" className="h-15 cursor-pointer" />
            </div>
            {/* Social Icons to  intreact   with us  socially */}
            <div className="flex flex-wrap gap-3 max-w-[170px] ">
              {socialMedia.map((item) => (
                <a
                  key={uniqueKey()}
                  href={item.href}
                  className="border border-pink-500 p-2 rounded-full flex items-center justify-center w-10 h-10 text-xl  hover:bg-pink-600"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            {/* needed comment here */}
            <div className="mt-4 space-y-1">
              <a href="#" className="block text-[8px] hover:text-pink-400 cursor-pointer">
                Sitemap
              </a>
              <a href="#" className="block text-[8px] hover:text-pink-400 cursor-pointer">
                Business Name Generator
              </a>
            </div>
          </div>

          {/* Services section  we  import   services from   above */}
          <div className="">
            <h3 className="text-lg font-bold mb-4 hover:text-pink-500">
              Services
            </h3>
            <ul className="space-y-2">
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

          {/* Contact Section were we need  to update  some change required */}
          <div className="">
            <h3 className="text-lg font-bold mb-4 hover:text-pink-500 cursor-pointer">Contact</h3>
            <button className="border border-white px-4 py-2 bg-black rounded-lg hover:bg-white hover:text-black text-white">
              Contacts
            </button>

            <p className="mt-2 hover:text-pink-400 cursor-pointer">contact@anadeainc.com</p>
            <p className="mt-2 font-bold text-[20px] hover:text-pink-400 cursor-pointer">Office</p>
            <p className="mt-2 hover:text-pink-400 cursor-pointer">Delhi</p>
          </div>
        </div>
        <hr className="border-t-1 border-slate-100 mt-12" />

        {/* Footer Bottom  side  with */}
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
