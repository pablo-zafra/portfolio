"use client";

import React, { useState } from "react";
import Link from "next/link";
import BtnHamburguesa from "./BtnHamburguesa/BtnHamburguesa";
import Nav from "./Nav/Nav";
import LogoPabloZafra from "./LogoPabloZafra/LogoPabloZafra";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative">
      <Nav opened={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="fixed z-30 w-screen h-14 md:h-16 flex items-center justify-between p-2 md:p-3 mix-blend-difference">
        <Link href="/" className="relative p-2 h-full">
          <div className="relative h-full w-auto">
            <LogoPabloZafra />
          </div>
        </Link>

        <div className="relative p-2.5 h-full aspect-6/5 z-40">
          <BtnHamburguesa opened={menuOpen} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
