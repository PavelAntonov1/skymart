import styles from "./Product.module.css";

import { urlFor } from "../../lib/client";

import Button from "../utilities/button/Button";
import ProductQuantity from "./productQuantity/ProductQuantity";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  console.log(props.image);
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
          <ProductQuantity />
          <span className={styles.price}>${props.price}</span>
        </div>
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default Product;
