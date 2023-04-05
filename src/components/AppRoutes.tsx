import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import CreateProduct from "../pages/seller/product/CreateProduct";
import DeliveredOrder from "../pages/seller/order/DeliveredOrder";
import PendingOrder from "../pages/seller/order/PendingOrder";
import SellerLayout from "./seller/Layout";
import SellerLogin from "./seller/Login";
import SellerRegister from "./seller/Register";
import RequireSellerAuth from "./RequireSellerAuth";
import ProductListing from "../pages/seller/product/ProductListing";
import EditProduct from "../pages/seller/product/EditProduct";
import ProductDetails from "../pages/seller/product/ProductDetails";
import SellerInfo from "../pages/seller/SellerInfo";

const AppRoutes = () => {
  let token = localStorage.getItem("sellerToken");
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
            <Route path="add/sellerinfo" element={<SellerInfo />} />
            <Route element={<RequireSellerAuth />}>
              <Route element={<SellerLayout />}>
                <Route path="dashboard" />
                {/* Products */}
                <Route path="add/product" element={<CreateProduct />} />
                <Route path="edit/product/:id" element={<EditProduct />} />
                <Route path="product/list" element={<ProductListing />} />
                <Route path="product/:id" element={<ProductDetails />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
