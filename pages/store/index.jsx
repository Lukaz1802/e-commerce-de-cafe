import React from "react";
import Layout from "../../components/layout";
import { getItems } from "../../services/itemService";
import styleItems from "../../styles/product.module.css";
import Product from "../../components/product";

const index = ({ items }) => {
  return (
    <>
      <Layout>
        <h1>Tienda</h1>
        <div className={styleItems.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="Default" />
            ))}
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}

export default index;
