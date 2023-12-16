import styles from "./CartPage.module.css";
import Layout from "../../components/utilities/layout/Layout";

import { useSelector, useDispatch } from "react-redux";

import { removeProduct } from "../../storeSlices/cartSlice";

import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/utilities/button/Button";
import { FaFrown, FaFrownOpen, FaMoneyBillWave } from "react-icons/fa";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let content;

  const checkoutHandler = () => {};

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
    </Layout>
  );
};

export default CartPage;
