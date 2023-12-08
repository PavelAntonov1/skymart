import { NavLink } from "react-router-dom";
import styles from "./HeaderLink.module.css";

const HeaderLink = (props) => {
  return (
    <NavLink to={props.to} className={styles.container}>
      {props.children}
    </NavLink>
  );
};

export default HeaderLink;
