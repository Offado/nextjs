"use client";

import React from "react";
import "./hero.css";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <section id="hero" className="xl\:bg-white">
      {/* Header */}
      <div>
        <Header />
      </div>
      <div className="container-header">
        <div className="head xl:max-w-[768px] xl:items-start xl:text-left">
          <h1 className="xl:max-w-none xl:text-[90px] max-w-[320px] mb-2">
            <span className="sp1">Je développe</span> et conçois des
            <br />
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Sites web", 2000, "Applications web", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Fournir des sites Web puissants et personnalisés qui allient
            esthétique et performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contactez-moi</button>
          </ScrollLink>
          {/* Stats */}
          <div>Stats</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
