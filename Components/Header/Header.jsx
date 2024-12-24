"use client";

import React from "react";
import "./header.css";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../Logo/Logo";


const links = [
  {
    name: "home",
  },
  {
    name: "Projects",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header xl:py-[48px]">
      <div className="container mx-auto">
        <div className="elements lg:flex-row lg:justify-between">
          <ul>
            <li>
              {/* Logo */}
              <Logo />
            </li>
            {/* Nav and socials */}
            <li>nav</li>
            <li>socials</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
