"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/img/pablo-zafra-logo.svg";
import Image from "next/image";
import BtnHamburguesa from "../BtnHamburguesa/BtnHamburguesa";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-screen flex items-center justify-between py-4 px-6">
      {/* Logo (lado izquierdo) */}
      <Link href="/" className="flex items-center">
        <Image
          className="h-8 w-auto mr-2"
          src={logo}
          alt="Logo"
          width={32}
          height={32}
        />
      </Link>

      {/* Botón de menú (lado derecho) */}
      <BtnHamburguesa opened={menuOpen} onClick={toggleMenu} />

      {/* Menú desplegable (móvil) -  Ahora está vacío, pero lo mantengo para futura expansión */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-md rounded-b-md md:hidden`}
      >
        {/* Contenido del menú irá aquí  */}
      </div>
    </nav>
  );
};

export default NavBar;
