import styles from "./ProductPage.module.css";

import Layout from "../../components/utilities/layout/Layout";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/client";
import { useState, useEffect, useRef } from "react";

import ProductImage from "../../components/productImage/ProductImage";
import ProductQuantity from "../../components/product/productQuantity/ProductQuantity";
import Button from "../../components/utilities/button/Button";
import Wave from "../../components/utilities/wave/Wave";

import { useDispatch } from "react-redux";
import { addProduct } from "../../storeSlices/cartSlice";
import { FaCartPlus } from "react-icons/fa";

import { transformProducts } from "../../helpers/productsFunctions.js";
import ProductsRow from "../../components/product/productsRow/ProductsRow.jsx";
import Product from "../../components/product/Product.jsx";

const ProductPage = (props) => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [similarProducts, setSimilarProducts] = useState(null);

  const [error, setError] = useState();

  const dispatch = useDispatch();

  const quantityRef = useRef();

  useEffect(() => {
    const fetchSimilarProducts = async (product) => {
      const QUERY = `*[category=="${product.category}"][0..5]`;

      const data = await client.fetch(QUERY);

      if (data && data.length > 0) {
        setSimilarProducts(
          transformProducts(data).filter(
            (similarProduct) => similarProduct.id !== product.id
          )
        );
      }

      if (data && data.length <= 0) {
        setError("No Similar Products found.");
      }

      if (!data) {
        setError("Error while fetching similar products data");
      }
    };

    const fetchProductData = async () => {
      const QUERY = `*[_id=="${productId}"]`;

      const data = await client.fetch(QUERY);

      if (data && data.length > 0) {
        const product = transformProducts(data)[0];

        setProduct(product);
        fetchSimilarProducts(product);
      }

      if (data && data.length <= 0) {
        setError("No Items found.");
      }

      if (!data) {
        setError("Error while fetching data");
      }
    };

    fetchProductData();
  }, [productId]);

  const addToCartHandler = () => {
    dispatch(
      addProduct({
        title: product.name,
        id: product.id,
        price: product.price,
        quantity: +quantityRef.current.value,
        category: product.category,
      })
    );
  };

  let content = <div></div>;

  if (product && !error) {
    content = (
      <>
        <div className={styles.container}>
          <ProductImage src={urlFor(product.image[0])} />

          <div className={styles.productInformation}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.description}>{product.details}</p>

            <div className={styles.productInteraction}>
              <div className={styles.cost}>
                <h2 className={styles.price}>${product.price}</h2>
                <ProductQuantity ref={quantityRef} />
              </div>
            </div>

            <Button onClick={addToCartHandler} className={styles.button}>
              <FaCartPlus className={styles.icon} />
              Add To Cart
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <Layout>
      <section className={styles.productSection}>{content}</section>

      <section className={styles.similarProductsSection}>
        {similarProducts && (
          <>
            <h4 className={styles.heading}>You May Also Like</h4>
            <ProductsRow>
              {similarProducts.map((product) => (
                <Product
                  title={product.name}
                  price={product.price}
                  id={product.id}
                  key={product.id}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </ProductsRow>
          </>
        )}
      </section>

      <Wave />
    </Layout>
  );
};

export default ProductPage;
