import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${styles.container} ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
