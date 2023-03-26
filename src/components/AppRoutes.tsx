import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import Home from "../pages/Home";
import CollectionHome from "./users/CollectionHome";
import Layout from "./users/Home/Layout";
import Login from "./users/Login";
import ProductCard from "./users/Product/ProductCard";
import Register from "./users/Register";
import Cart from "./users/cart/Cart";

// Seller
import AddDiscount from "../pages/seller/AddDiscount";
import CreateProduct from "../pages/seller/CreateProduct";
import DeliveredOrder from "../pages/seller/order/DeliveredOrder";
import PendingOrder from "../pages/seller/order/PendingOrder";
import SellerLayout from "./seller/Layout";
import SellerLogin from "./seller/Login";
import SellerRegister from "./seller/Register";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop/:parentcategory/:category?/:subcategory?"
              element={<CollectionHome />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" />
            <Route path="/add/address" />
            <Route path="/profile/:id" />
            <Route path="/product/:id" element={<ProductCard />} />
          </Route>
          <Route path="/seller">
            <Route path="login" element={<SellerLogin />} />
            <Route path="register" element={<SellerRegister />} />
            <Route path="add/sellerinfo" />
            <Route element={<SellerLayout />}>
              <Route path="dashboard" />
              {/* Products */}
              <Route path="add/product" element={<CreateProduct />} />
              <Route path="edit/product" />
              <Route path="product/list" />
              <Route path="product/:id" />
              {/* Discounts */}
              <Route path="discount/list" />
              <Route path="discount/:id" />
              <Route path="add/discount" element={<AddDiscount />} />
              <Route path="edit/discount" />
              {/* Orders */}
              <Route path="pending/orders" element={<PendingOrder />} />
              <Route path="completed/orders" element={<DeliveredOrder />} />
              {/* SellerInfo */}
              <Route path="info/profile" />
              {/* Seller */}
              <Route path="profile" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
