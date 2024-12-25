import React from "react";
import "./about.css";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container mx-auto">
        <h1 className="h1-about">A propos</h1>
        <p>
          Je me nomme Adon Offolome Bill Chris Jonathan
        </p>
        <Image src="/assets/about/img2.jpg" width={400} height={400} alt="" />
      </div>
    </section>
  );
};

export default About;
