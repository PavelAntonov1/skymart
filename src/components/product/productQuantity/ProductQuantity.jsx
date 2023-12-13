import styles from "./ProductQuantity.module.css";

const ProductQuantity = () => {
  return (
    <input
      type="number"
      defaultValue={1}
      min={1}
      max={100}
      className={styles.input}
    />
  );
};

export default ProductQuantity;
