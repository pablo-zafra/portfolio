'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import logo from '../../../public/img/pablo-zafra-logo.svg';
import Image from 'next/image';

export const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between py-4 px-6">
      {/* Logo (lado izquierdo) */}
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          {/* <Logo className="h-8 w-auto mr-2" /> */}
          <Image className='h-8 w-auto mr-2' src={logo} alt="Logo" width={32} height={32} />
        </a>
      </Link>

      {/* Botón de menú (lado derecho) */}
      <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md" onClick={toggleMenu}>
      </button>

      {/* Menú desplegable (móvil) -  Ahora está vacío, pero lo mantengo para futura expansión */}
      <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-md rounded-b-md md:hidden`}>
        {/* Contenido del menú irá aquí  */}
      </div>
    </nav>
  );
};