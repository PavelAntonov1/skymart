import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <ul className={styles.container}>
      <li className={isActive("/products") && styles.active}>
        <NavLink to="/products">Our Products</NavLink>
      </li>

      <li className={isActive("/shipping") && styles.active}>
        <NavLink to="/shipping">Shipping</NavLink>
      </li>

      <li className={isActive("/photo-services") && styles.active}>
        <NavLink to="/photo-services">Photo Services</NavLink>
      </li>

      <li className={isActive("/uhaul-rental") && styles.active}>
        <NavLink to="/uhaul-rental">U-Haul Rental</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
