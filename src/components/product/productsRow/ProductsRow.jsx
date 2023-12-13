import styles from "./ProductsRow.module.css";

const ProductsRow = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ProductsRow;
