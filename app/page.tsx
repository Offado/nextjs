"use client"

import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import Sections from '../Components/Sections/Sections';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Page = () => {
  // Implémentation du défilement de la locomotive
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div>
      <Hero />
      <Sections />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page;
