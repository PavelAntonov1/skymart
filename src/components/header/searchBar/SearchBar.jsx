import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <FaSearch className={styles.icon} />
      <input type="text" className={styles.input} />
    </div>
  );
};

export default SearchBar;
