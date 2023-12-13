import { NavLink } from "react-router-dom";
import styles from "./Type.module.css";

const Type = (props) => {
  return (
    <NavLink
      to={props.title.trim().replace(" ", "-").toLowerCase()}
      className={`${styles.container} ${
        props.id % 2 === 0 ? styles.greened : styles.oranged
      }`}
    >
      <p className={styles.title}>{props.title}</p>
    </NavLink>
  );
};

export default Type;
