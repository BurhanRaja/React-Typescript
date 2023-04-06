import { Navigate, Outlet } from "react-router";

const RequireSellerAuth = () => {
  let token = localStorage.getItem("sellerToken");
  return token ? <Outlet /> : <Navigate to="/seller/login" />;
};

export default RequireSellerAuth;
