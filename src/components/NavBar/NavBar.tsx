"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/img/pablo-zafra-logo.svg";
import Image from "next/image";
import BtnHamburguesa from "./BtnHamburguesa/BtnHamburguesa";
import OffCanvasMenu from "./OffCanvasMenu/OffCanvasMenu";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed z-50 w-screen flex items-center justify-between py-4 px-6">
      <Link href="/" className="flex items-center">
        <Image
          className="h-8 w-auto mr-2"
          src={logo}
          alt="Logo"
          width={undefined}
          height={undefined}
        />
      </Link>

      <BtnHamburguesa opened={menuOpen} onClick={toggleMenu} />

      <OffCanvasMenu opened={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};

export default NavBar;
