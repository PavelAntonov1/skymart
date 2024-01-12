import styles from "./CartPage.module.css";
import Layout from "../../components/utilities/layout/Layout";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

import { client } from "../../lib/client";

import { removeProduct } from "../../storeSlices/cartSlice";

import { transformProducts } from "../../helpers/productsFunctions";

import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/utilities/button/Button";
import { FaFrown, FaFrownOpen, FaMoneyBillWave } from "react-icons/fa";

import Wave from "../../components/utilities/wave/Wave";
import ProductsRow from "../../components/product/productsRow/ProductsRow";
import Product from "../../components/product/Product";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [similarProducts, setSimilarProducts] = useState(null);
  const [error, setError] = useState(null);

  let content;

  console.log(similarProducts);

  const checkoutHandler = () => {};

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      const cateogries = [
        ...new Set(cart.products.map((product) => product.category)),
      ];

      const products = [];

      const string = cart.products.reduce((str, product, i) => {
        if (i !== cart.products.length - 1) {
          return (str += `"${product.id}",`);
        } else {
          return (str += `"${product.id}"`);
        }
      }, "");

      for (const category of cateogries) {
        console.log(category);
        const QUERY = `*[category=="${category}" && !(_id in [${string}])][0]`;

        const data = await client.fetch(QUERY);

        if (data) {
          products.push(data);
        }
      }

      if (products.length > 0) {
        setSimilarProducts(transformProducts(products));
      }

      if (products.length <= 0) {
        setError("No Similar Products found.");
      }
    };

    fetchSimilarProducts();
  }, []);

  if (cart.products.length > 0) {
    content = (
      <>
        <h2 className={styles.title}>Shopping Cart</h2>

        <div className={styles.itemsContainer}>
          {cart.products.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              category={product.category}
            />
          ))}
        </div>

        <h2 className={styles.total}>Total ${cart.totalPrice.toFixed(2)}</h2>

        <Button className={styles.btnCheckout} onClick={checkoutHandler}>
          <FaMoneyBillWave />
          Checkout
        </Button>
      </>
    );
  }

  if (cart.products.length <= 0) {
    content = (
      <p className={styles.titleEmpty}>
        <FaFrownOpen className={styles.icon} />
        Your cart is empty.
      </p>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>{content}</div>
      {similarProducts && similarProducts.length > 0 && (
        <section className={styles.similarProductsSection}>
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
        </section>
      )}
      <Wave />
    </Layout>
  );
};

export default CartPage;
