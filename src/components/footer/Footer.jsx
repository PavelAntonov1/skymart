import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.listContainer}>
        <h4 className={styles.title}>About Us</h4>
        <ul className={styles.list}>
          <li>
            <NavLink to="/about-us/lorem">Lorem</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/ipsum">Ipsum</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/dolor">Dolor</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/sit-amet">Sit Amet</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h4 className={styles.title}>Customer Service</h4>
        <ul className={styles.list}>
          <li>
            <NavLink to="/about-us/lorem">Lorem</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/ipsum">Ipsum</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/dolor">Dolor</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/sit-amet">Sit Amet</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h4 className={styles.title}>Services</h4>
        <ul className={styles.list}>
          <li>
            <NavLink to="/about-us/lorem">Lorem</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/ipsum">Ipsum</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/dolor">Dolor</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/sit-amet">Sit Amet</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.listContainer}>
        <h4 className={styles.title}>Vendors & Supplies</h4>
        <ul className={styles.list}>
          <li>
            <NavLink to="/about-us/lorem">Lorem</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/ipsum">Ipsum</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/dolor">Dolor</NavLink>
          </li>

          <li>
            <NavLink to="/about-us/sit-amet">Sit Amet</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
