import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Navigation from "../../navigation/Navigation";
import StoreFinder from "../../storeFinder/StoreFinder";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <Header />
        <Navigation />
        <StoreFinder />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
