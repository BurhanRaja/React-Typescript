import "./App.css";
import ProductPage from "./components/users/Product/ProductPage";
import CollectionHome from "./components/users/CollectionHome";
import Home from "./components/users/Home/Home";
import Login from "./components/users/Login";
import Cart from "./components/users/cart/Cart";
import Layout from "./components/users/Home/Layout";

function App() {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export default App;
