import CartPage from "./pages/cartPage/CartPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ProductPage from "./pages/productPage/ProductPage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/products" />} />

        <Route path="/products">
          <Route index={true} element={<ProductsPage />} />
          <Route path=":category" element={<CategoryPage />} />
          <Route exact path=":category/:productId" element={<ProductPage />} />
        </Route>

        <Route path="/:userId/cart" element={<CartPage />} />

        <Route path="/shipping" element={<ProductsPage />} />
        <Route path="/photo-services" element={<ProductsPage />} />
        <Route path="/uhaul-rental" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
