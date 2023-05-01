import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import Home from "../pages/Home";
import CollectionHome from "./users/CollectionHome";
import Layout from "./users/Home/Layout";
import Login from "./users/Login";
import Register from "./users/Register";

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
import SellerInfo from "../pages/seller/AddSellerInfo";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import AddAddress from "../pages/AddAddress";
import EditAddress from "../pages/EditAddress";
import SingleOrder from "../pages/SingleOrder";
import AllOrders from "../pages/AllOrders";
import NotFound from "../pages/NotFound";
import OrderDetails from "../pages/seller/order/OrderDetails";
import Dashboard from "../pages/seller/Dashboard";
import SellerInfoProfile from "../pages/seller/SellerInfoProfile";
import Profile from "../pages/Profile";

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
            <Route path="/add/address" element={<AddAddress />} />
            <Route path="/edit/address/:id" element={<EditAddress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/all/orders" element={<AllOrders />} />
            <Route path="/order/:id" element={<SingleOrder />} />
          </Route>
          <Route path="/seller">
            <Route path="login" element={<SellerLogin />} />
            <Route path="register" element={<SellerRegister />} />
            <Route path="add/sellerinfo" element={<SellerInfo />} />
            <Route element={<RequireSellerAuth />}>
              <Route element={<SellerLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
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
                <Route path="order/:id" element={<OrderDetails />} />
                <Route path="completed/orders" element={<DeliveredOrder />} />
                {/* SellerInfo */}
                <Route path="profile" element={<SellerInfoProfile />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
