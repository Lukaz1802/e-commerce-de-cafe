import Link from "next/link";
import React from "react";
import style from "../styles/menu.module.css";
import { useAppContext } from "./StateWrapper";

const Menu = () => {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }
  return (
    <>
      <nav className={style.menu}>
        <div>
          <Link href="/">
            <a className={style.link}>Inicio</a>
          </Link>

          <Link href="/store">
            <a className={style.link}>Tienda</a>
          </Link>

          <Link href="/faq">
            <a className={style.link}>Info</a>
          </Link>
        </div>
        <div>
          <a href="#" className={style.link} onClick={handleOpenCart}>
            Carrito ({cart.getNumberOfItems()})
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
