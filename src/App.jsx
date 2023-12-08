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
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shipping" element={<ProductsPage />} />
        <Route path="/photo-services" element={<ProductsPage />} />
        <Route path="/uhaul-rental" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
