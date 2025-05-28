"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/img/pablo-zafra-logo.svg";
import Image from "next/image";
import BtnHamburguesa from "./BtnHamburguesa/BtnHamburguesa";
import Nav from "./Nav/Nav";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed z-50 w-screen flex items-center justify-between py-3 px-3 lg:py-4  lg:px-4">
      <Link href="/" className="flex items-center">
        <Image
          className="mx-2 w-16 lg:w-24 h-auto mr-2"
          src={logo}
          alt="Logo"
          width={undefined}
          height={undefined}
        />
      </Link>

      <BtnHamburguesa opened={menuOpen} onClick={toggleMenu} />

      <Nav opened={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
