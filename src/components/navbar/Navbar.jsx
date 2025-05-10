import React, { useRef, useEffect, useState } from "react";
import { Book, BookOpen, File } from "react-feather";
import { HashLink } from "react-router-hash-link";

import { Dropdown, DropMenu, Container } from "../shared";

import SidebarMaybe from "../SidebarMaybe/SidebarMaybe";
import { DropdownItem } from "../shared/Dropdown/Dropdown";

import css from "./Navbar.module.css";
import { Brandlogo } from "../../assets";

const Navbar = () => {
  const sidebarMaybeRef = useRef(null);

  const toggleSidebar = () => {
    sidebarMaybeRef.current.toggle();
  };

  const [scrolled, setScrolled] = useState(false);
  const navigation = [
    { link: "home", text: "Home" },
    { link: "service", text: "Our Services" },
    { link: "about", text: "About Us" },
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
    <header>
      <div className="fixed top-0 z-[110] flex h-[48px] w-full items-center justify-between bg-primary-dark px-4 text-center">
        <div className="block lg:hidden">
          <a href="tel:9073672051">
            <i className="fa-solid fa-phone text-secondary"></i>
          </a>
        </div>
        <div className="relative hidden border-2 border-black bg-[#C9A267] px-2 text-white lg:flex">
          <div className="relative flex items-center justify-between p-2 text-sm">
            24x7 Emergency :{"  "}
            <a
              href="tel:9073672051"
              className="flex-col px-1 text-sm font-semibold"
            >
              9073672051
            </a>
          </div>
        </div>

        <h1 className="relative flex items-center justify-between px-4 py-3 text-center text-sm font-extrabold text-[#C9A267] md:text-xl">
          Welcome to Innerwork Advisors LLP
        </h1>

        <div className="block lg:hidden">
          <a href="mailto:info@innerworkadvisorsllp.com">
            <i className="fa-solid fa-envelope text-secondary"></i>
          </a>
        </div>
        <div className="relative hidden border-2 border-black bg-[#C9A267] px-2 text-lg text-white lg:flex">
          <div className="relative flex items-center justify-between p-2 text-sm">
            Email Id :{"  "}
            <a
              href="mailto:info@innerworkadvisorsllp.com"
              className="flex flex-col px-1 text-sm font-semibold"
            >
              info@innerworkadvisorsllp.com
            </a>
          </div>
        </div>
      </div>

      <SidebarMaybe ref={sidebarMaybeRef}>
        <div className="flex h-full flex-col justify-between bg-primary-dark pb-24 pt-10">
          <ul className="flex flex-col text-xl text-white [&>li]:h-16 [&>li]:text-center">
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#home`}
                className="flex h-full w-full items-center justify-center"
              >
                Home
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#service`}
                className="flex h-full w-full items-center justify-center"
              >
                Services
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#about`}
                className="flex h-full w-full items-center justify-center"
              >
                About Us
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#contact`}
                className="flex h-full w-full items-center justify-center"
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
      </SidebarMaybe>

      <nav className={`${css.navbar} border-b-4 border-[#C9A267]`}>
        <Container
          data-aos="fade-up"
          className="flex flex-row items-center justify-between md:flex-row"
        >
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
                className="relative flex w-40 items-center justify-between py-3"
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
                    className="!text-white transition duration-200 hover:!text-secondary"
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
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
