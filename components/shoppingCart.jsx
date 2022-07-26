import React from "react";
import { useAppContext } from "./StateWrapper";
import Product from "./product";
import style from "../styles/shoppingCart.module.css";

const ShoppingCart = () => {
  const cart = useAppContext();

  function handleCloseCart() {
    cart.closeCart();
  }

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total;
  }
  return (
    <div
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.close} onClick={handleCloseCart}>
        Cerrar
      </button>

      {cart.items.length === 0 ? (
        <div className={style.empty}>Carrito vacio</div>
      ) : (
        <>
          <h3>Tus compras</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </div>
          <div className={style.total}>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
