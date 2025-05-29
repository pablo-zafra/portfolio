interface BtnHamburguesaProps {
  opened: boolean;
  onClick?: () => void;
}

const BtnHamburguesa: React.FC<BtnHamburguesaProps> = ({ opened, onClick }) => {
  return (
    <button
      className={`relative w-full h-full flex flex-col justify-between cursor-pointer z-40`}
      onClick={onClick}
      aria-label={opened ? "Cerrar menú" : "Abrir menú"}
    >
      <div
        className={`relative w-full h-full transition-transform duration-300 ease-in-out ${
          opened ? "rotate-180" : ""
        }`}
      >
        <div
          className={`absolute w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${
            opened
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45  w-12/10!"
              : "top-0 left-1/2 -translate-x-1/2 rotate-0"
          }`}
        ></div>
        <div
          className={`absolute w-full h-[2px] bg-white transition-opacity duration-300 ease-in-out ${
            opened
              ? "opacity-0"
              : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0"
          }`}
        ></div>
        <div
          className={`absolute w-full h-[2px] bg-white transition-all duration-300 ease-in-out ${
            opened
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] w-12/10!"
              : "top-full left-1/2 -translate-x-1/2 -translate-y-full rotate-0"
          }`}
        ></div>
      </div>
    </button>
  );
};

export default BtnHamburguesa;
