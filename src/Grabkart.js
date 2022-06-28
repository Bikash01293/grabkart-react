import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const Grabkart = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" exact element={<ProductList />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" exact element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          exact
          element={user ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Routes>
        <Route
          path="/register"
          exact
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default Grabkart;
