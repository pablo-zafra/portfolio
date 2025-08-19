import Link from "next/link";
import React from "react";

interface CustomPProps {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
}

export const CustomButton: React.FC<CustomPProps> = ({
  children,
  href,
  blank = false,
}) => {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      className={`inline-block w-max relative text-sm md:text-base p-3 md:p-4 bg-transparent hover:bg-turquesa text-white rounded-full border-white border-1 hover:border-turquesa box-border h-fit`}
    >
      {children}
    </Link>
  );
};
