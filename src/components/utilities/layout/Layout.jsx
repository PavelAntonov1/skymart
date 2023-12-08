import Header from "../../header/Header";
import Navigation from "../../navigation/Navigation";
import StoreFinder from "../../storeFinder/StoreFinder";

const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
        <Navigation />
        <StoreFinder />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
