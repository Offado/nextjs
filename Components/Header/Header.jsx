"use client";

import React from "react";
import "./header.css";
import Logo from "../Logo/Logo";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className="header xl:py-[48px]">
      <div className="container mx-auto">
        <div className="elements lg:flex-row lg:justify-between">
          {/* Nav and socials */}
          <div>
            <ul>
              {/* Logo */}
              <Logo />
              <li>
                <ScrollLink to="sections" className="home">
                  <span className="sp2">Accueil</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="project" className="projects">
                  <span className="sp3">Projets</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" className="about">
                  <span className="sp4">A propos</span>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" className="contact">
                  <span className="sp5">Contact</span>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
