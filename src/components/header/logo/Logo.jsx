import { FaGlobeAmericas } from "react-icons/fa";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <p className={styles.container}>
      <FaGlobeAmericas className={styles.icon} />
      <span className={styles.title}>Skymart</span>
    </p>
  );
};

export default Logo;
