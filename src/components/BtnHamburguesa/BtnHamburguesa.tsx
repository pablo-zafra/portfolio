import React from "react";
import styles from "./BtnHamburguesa.module.css"; // Importa el archivo CSS como un módulo

interface BtnHamburguesaProps {
  opened: boolean;
  onClick?: () => void;
}

const BtnHamburguesa: React.FC<BtnHamburguesaProps> = ({ opened, onClick }) => {
  return (
    <button
      className={`${styles.hamburgerButton} ${opened ? styles.opened : ""}`}
      onClick={onClick}
      aria-label={opened ? "Cerrar menú" : "Abrir menú"}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default BtnHamburguesa;
