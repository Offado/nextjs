"use client"

import Link from "next/link";
import React from "react";
import "./logo.css";

const Logo = ({ light = false }) => {
  // Détermine la couleur du props light
  const colorClass = light ? "text-white" : "text-black";
  return (
    <div>
      <Link href="/" className="lien1">
        <span className={colorClass}>Adon Offolome Chris</span>
      </Link>
    </div>
  );
};

export default Logo;
