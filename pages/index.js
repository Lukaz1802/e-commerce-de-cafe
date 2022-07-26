import Layout from "../components/layout";
import { getLatestItems } from "../services/itemService";
import Product from "../components/product";
import styleProducts from "../styles/product.module.css";
import style from "../styles/Home.module.css";
export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Café Shop!</h2>
            <p>Café Café Café Café</p>
          </div>
        </div>
      </div>

      <h3>NOVEDADES</h3>
      <div className={styleProducts.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
