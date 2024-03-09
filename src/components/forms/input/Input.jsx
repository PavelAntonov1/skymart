import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className={`${styles.input} ${
        props.className === "invalid" ? styles.invalid : ""
      }`}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
    />
  );
});

export default Input;
