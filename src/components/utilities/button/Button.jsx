import styles from "./Button.module.css";

const Button = (props) => {
  return <button className={styles.container}>{props.children}</button>;
};

export default Button;
