import "./App.css";
import ProductPage from "./components/Product/ProductPage";
import FashionHome from "./components/fashion/FashionHome";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Cart from "./components/cart/Cart";
import Layout from "./components/Home/Layout";

function App() {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default App;
