import { NavLink } from "react-router-dom";
import styles from "./Offer.module.css";

const Offer = (props) => {
  return (
    <NavLink
      to={props.to}
      className={`${styles.container} ${props.className}`}
      style={{ background: `var(--gradient-${props.color}-135)` }}
    >
      {props.children}
    </NavLink>
  );
};

export default Offer;
