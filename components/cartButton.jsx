import React from "react";
import style from "../styles/cartButton.module.css";
import { useAppContext } from "./StateWrapper";
const CartButton = ({ item }) => {
  const cart = useAppContext();
  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <div>
      <button onClick={handleClick} className={style.button}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CartButton;
