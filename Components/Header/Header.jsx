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
              {/* Nav and socials */}
            </li>
            <li>
              <div>nav</div>
            </li>
            <li>
              <div>socials</div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
