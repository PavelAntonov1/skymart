import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";

const Category = (props) => {
  return (
    <NavLink className={styles.container} to={props.to}>
      <p className={styles.title}>{props.title}</p>
    </NavLink>
  );
};

export default Category;
