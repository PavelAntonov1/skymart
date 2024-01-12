import styles from "./TypePage.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { transformProducts } from "../../helpers/productsFunctions";

import Layout from "../../components/utilities/layout/Layout";
import Product from "../../components/product/Product";
import Wave from "../../components/utilities/wave/Wave";

const TypePage = () => {
  const { productType, category } = useParams();

  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  console.log(productType, category);
  console.log(products, error);

  useEffect(() => {
    const fetchProducts = async () => {
      const QUERY = `*[category=="${category}" && type=="${productType}"]`;

      const data = await client.fetch(QUERY);

      if (data && data.length > 0) {
        setProducts(transformProducts(data));
      }

      if (data && data.length <= 0) {
        setError("No Items found.");
      }

      if (!data) {
        setError("Error while fetching data");
      }
    };

    fetchProducts();
  }, []);

  let content = <div className={styles.loadingContainer}>Loading ...</div>;

  if (error && (!products || products.length === 0)) {
    content = <div className={styles.errorContainer}>{error}</div>;
  }

  if (!error && products && products.length > 0) {
    content = (
      <>
        {products.map((product) => (
          <Product
            title={product.name}
            price={product.price}
            id={product.id}
            key={product.id}
            image={product.image}
            category={product.category}
            className={styles.product}
          />
        ))}
      </>
    );
  }

  return (
    <Layout>
      <h4 className={styles.title}>
        {productType} {category}
      </h4>
      <section className={styles.productsSection}>{content}</section>
      <Wave />
    </Layout>
  );
};

export default TypePage;
