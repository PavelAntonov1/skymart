import styles from "./ProductImage.module.css";

const ProductImage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.panel2}></div>

      <div className={styles.panel1}>
        <img src={props.src} className={styles.image} />
      </div>
    </div>
  );
};

export default ProductImage;
