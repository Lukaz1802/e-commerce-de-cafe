import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/product.module.css";
import { convertToPath } from "../lib/utils";
import CartButton from "./cartButton";
import { useAppContext } from "./StateWrapper";

const Product = ({ item, showAs, qty }) => {
  const cart = useAppContext();

  function deleteOneFromCart(item) {
    cart.deleteOneItemFromCart(item);
  }
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={700}
            height={700}
          />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
            <div className={style.price}>${item.price}</div>
            <div>{item.description}</div>
          </div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
          {qty === 0 ? (
            ""
          ) : (
            <>
              {" "}
              <div>Cantidad: {qty}</div>
              <div>Total: {qty * item.price}</div>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                }}
                onClick={() => deleteOneFromCart(item)}
              >
                X
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a href="">
            <Image
              src={item.image}
              alt={item.description}
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/url-a-mi-componente`}>
            <a href="">{item.title}</a>
          </Link>
        </h3>
      </div>

      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
};

export default Product;
