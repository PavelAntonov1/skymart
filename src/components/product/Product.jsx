import styles from "./Product.module.css";

import { urlFor } from "../../lib/client";
import { useRef } from "react";

import Button from "../utilities/button/Button";
import ProductQuantity from "./productQuantity/ProductQuantity";

import { useDispatch } from "react-redux";
import { addProduct } from "../../storeSlices/cartSlice";

const Product = (props) => {
  const quantityRef = useRef();

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      addProduct({
        title: props.title,
        id: props.id,
        price: props.price,
        quantity: +quantityRef.current.value,
      })
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={urlFor(props.image[0])}
        alt={props.title}
        className={styles.image}
      />

      <div className={styles.infoContainer}>
        <h4 className={styles.title}>{props.title}</h4>

        <div className={styles.info}>
          <ProductQuantity ref={quantityRef} />
          <span className={styles.price}>${props.price}</span>
        </div>

        <Button onClick={addToCartHandler}>Add</Button>
      </div>
    </div>
  );
};

export default Product;
