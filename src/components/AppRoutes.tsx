import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/users/Home/Layout";
import Home from "../pages/Home";
import CollectionHome from "./users/CollectionHome";
import ProductCard from "./users/Product/ProductCard";
import Cart from "./users/cart/Cart";
import CheckoutPage from "../pages/CheckoutPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/shop" element={<CollectionHome />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" />
            <Route path="/add/address" />
            <Route path="/profile/:id" />
            <Route path="/product/:id" element={<ProductCard />} />

            {/* Admin */}
            {/* <Route path="/seller">
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/add/sellerinfo" />
            <Route path="/dashboard" /> */}
            {/* Products */}
            {/* <Route path="/create/product" />
            <Route path="/edit/product" />
            <Route path="/product/list" />
            <Route path="/product/:id" /> */}
            {/* Discounts */}
            {/* <Route path="/discount/list" />
            <Route path="/discount/:id" />
            <Route path="/add/discount" />
            <Route path="/edit/discount" /> */}
            {/* Orders */}
            {/* <Route path="/pending/orders" />
            <Route path="/completed/orders" /> */}
            {/* </Route> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
