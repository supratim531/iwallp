import React, { useEffect, useState } from "react";
import { Brandlogo } from "../../assets";
import { Dropdown, DropMenu } from "../shared";
import { Book, BookOpen, File } from "react-feather";
import { DropdownItem } from "../shared/Dropdown/Dropdown";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [scrolled, setScrolled] = useState(false);
  const navigation = [
    { link: "#home", text: "Home" },
    { link: "#about", text: "About Us" },
    { link: "#service", text: "Our Services" },
    { link: "#contact", text: "Contact Us" },
  ];
  return (
    <nav
      className={`flex top-0 w-full font-mono font-bold justify-between items-center text-white bg-[#415781] shadow-md px-10 py-auto  z-50 transition-all duration-1000 ease-in-out ${
        scrolled ? "fixed " : "relative"
      }`}
    >
      <section>
        <a href="#home">
          <img
            src={Brandlogo}
            alt="Brand"
            className="relative flex items-center justify-between w-40 px-2 py-3"
          />
        </a>
      </section>

      <section className="flex text-xl gap-x-8 ">
        <ul className="flex text-xl gap-x-8">
          {navigation.map((nav) => (
            <li key={nav.text}>
              <a
                className="!text-white hover:!text-black transition duration-300"
                href={nav.link}
              >
                {nav.text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#extra"
              className="!text-white hover:!text-black transition duration-150"
            >
              <Dropdown
                className="bg-black"
                trigger={<DropMenu>More Info</DropMenu>}
              >
                <DropdownItem>
                  <Book size={20} />
                  Our Blogs
                </DropdownItem>
                <DropdownItem>
                  <BookOpen size={20} />
                  Our Legal Insights
                </DropdownItem>
                <DropdownItem>
                  <File size={20} />
                  Our Case Studies
                </DropdownItem>
              </Dropdown>
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
