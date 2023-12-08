import styles from "./Header.module.css";

import { FaUser, FaShoppingCart } from "react-icons/fa";

import Logo from "./logo/Logo";
import SearchBar from "./searchBar/SearchBar";
import HeaderLink from "./headerLink/HeaderLink";

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <SearchBar />

      <div className={styles.links}>
        <HeaderLink to="/account">
          <FaUser />
          <span>Account</span>
        </HeaderLink>

        <HeaderLink to="/cart">
          <FaShoppingCart />
          <span>Cart</span>
        </HeaderLink>
      </div>
    </div>
  );
};

export default Header;
