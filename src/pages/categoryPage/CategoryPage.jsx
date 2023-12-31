import { client } from "../../lib/client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./CategoryPage.module.css";

import Layout from "../../components/utilities/layout/Layout";
import Type from "../../components/type/Type";
import ProductsRow from "../../components/product/productsRow/ProductsRow";
import Product from "../../components/product/Product";
import { FaSadTear, FaSpinner } from "react-icons/fa";

const CategoryPage = (props) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  let content;

  useEffect(() => {
    const fetchProductsData = async () => {
      const QUERY = '*[_type=="product"]';

      const data = await client.fetch(QUERY);

      if (data && data.length > 0) {
        setProducts(
          data
            .filter((product) => product.category === category)
            .map((product) => {
              const { name, category, type, image, price, details, _id } =
                product;

              return {
                name,
                category,
                type,
                image,
                price,
                details,
                id: _id,
              };
            })
        );
      }

      if (data && data.length <= 0) {
        setError("No Items found.");
      }

      if (!data) {
        setError("Error while fetching data");
      }
    };

    fetchProductsData();
  }, []);

  const productTypes = [...new Set(products.map((product) => product.type))];

  if (!error) {
    content = (
      <>
        <section className={styles.typesContainer}>
          {productTypes.map((type, i) => (
            <Type key={i} id={i} title={`${type} ${category}`} />
          ))}
        </section>

        <section className={styles.productsContainer}>
          {productTypes.map((type) => (
            <section className={styles.productsSection}>
              <div>
                <h4 className={styles.typeTitle}>{`${type} ${category}`}</h4>

                <ProductsRow>
                  {products
                    .filter((product) => product.type === type)
                    .map((product) => (
                      <Product
                        title={product.name}
                        price={product.price}
                        id={product.id}
                        key={product.id}
                        image={product.image}
                      />
                    ))}
                </ProductsRow>
              </div>
            </section>
          ))}
        </section>
      </>
    );
  }

  if (error) {
    content = (
      <section className={styles.errorContainer}>
        <FaSadTear className={styles.errorIcon} />
        {error}
      </section>
    );
  }

  if (!products && !error) {
    content = (
      <div className={styles.errorContainer}>
        <FaSpinner className={styles.iconError} />
        Loading...
      </div>
    );
  }

  return <Layout>{content}.</Layout>;
};

export default CategoryPage;
