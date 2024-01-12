import styles from "./Product.module.css";

import { urlFor } from "../../lib/client";
import { useRef } from "react";

import Button from "../utilities/button/Button";
import ProductQuantity from "./productQuantity/ProductQuantity";

import { useDispatch } from "react-redux";
import { addProduct } from "../../storeSlices/cartSlice";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
        category: props.category,
      })
    );
  };

  return (
    <div className={`${styles.container} ${props.className}`}>
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

        <div className={styles.info}>
          <Button onClick={addToCartHandler}>Add</Button>
          <NavLink
            to={`/products/${props.category}/${props.id}`}
            className={styles.link}
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
