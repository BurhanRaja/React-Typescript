import "./App.css";
import ProductPage from "./components/users/Product/ProductPage";
import FashionHome from "./components/users/fashion/FashionHome";
import Home from "./components/users/Home/Home";
import Login from "./components/users/Login";
import Cart from "./components/users/cart/Cart";
import Layout from "./components/users/Home/Layout";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
