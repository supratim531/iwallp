import React, { useRef, useEffect, useState } from "react";
import { Brandlogo } from "../../assets";
import { Dropdown, DropMenu } from "../shared";
import { Book, BookOpen, File } from "react-feather";
import { DropdownItem } from "../shared/Dropdown/Dropdown";
import SidebarMaybe from "../SidebarMaybe/SidebarMaybe";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const sidebarMaybeRef = useRef(null);

  const toggleSidebar = () => {
    sidebarMaybeRef.current.toggle();
  };

  const [scrolled, setScrolled] = useState(false);
  const navigation = [
    { link: "home", text: "Home" },
    { link: "about", text: "About Us" },
    { link: "service", text: "Our Services" },
    { link: "contact", text: "Contact Us" },
  ];

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

  return (
    <nav
      className={`py-auto top-0 z-50 flex w-full items-center justify-between bg-[#415781] px-10 font-mono font-bold text-white shadow-md transition-all duration-150 ease-in-out ${
        scrolled ? "fixed" : "fixed"
      }`}
    >
      <SidebarMaybe ref={sidebarMaybeRef}>
        <div className="flex h-full flex-col justify-between bg-primary-dark pb-24 pt-10">
          <ul className="flex flex-col text-xl text-white [&>li]:h-16 [&>li]:text-center">
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <Link
                to={"/"}
                className="flex h-full w-full items-center justify-center"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <a
                href="#about"
                className="flex h-full w-full items-center justify-center"
              >
                About Us
              </a>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <a
                href="#service"
                className="flex h-full w-full items-center justify-center"
              >
                Services
              </a>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <a
                href="#contact"
                className="flex h-full w-full items-center justify-center"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </SidebarMaybe>

      <section>
        <HashLink
          smooth
          to={"/#home"}
          // onClick={() => {
          //   const section = document.getElementById("home");
          //   section?.scrollIntoView({ behavior: "smooth" });
          // }}
        >
          <img
            alt="Brand"
            src={Brandlogo}
            className="relative flex w-40 items-center justify-between px-2 py-3"
          />
        </HashLink>
      </section>

      <section className="hidden gap-x-8 text-xl md:flex">
        <ul className="flex gap-x-8 text-xl">
          {navigation.map((nav) => (
            <li key={nav.text}>
              <HashLink
                smooth
                to={`/#${nav.link}`}
                className="!text-white transition duration-300 hover:!text-black"
                // onClick={() => {
                //   const section = document.getElementById(nav.link);
                //   section?.scrollIntoView({ behavior: "smooth" });
                // }}
              >
                {nav.text}
              </HashLink>
            </li>
          ))}
          {/* <li>
            <a
              href="#extra"
              className="!text-white transition duration-150 hover:!text-black"
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
          </li> */}
        </ul>
      </section>

      <button onClick={toggleSidebar} className="block md:hidden">
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
    </nav>
  );
};

export default Navbar;
