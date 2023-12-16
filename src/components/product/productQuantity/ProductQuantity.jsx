import styles from "./ProductQuantity.module.css";
import React from "react";

const ProductQuantity = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="number"
      defaultValue={props.defaultValue ?? 1}
      min={1}
      max={100}
      className={styles.input}
      onChange={props.onChange}
    />
  );
});

export default ProductQuantity;
