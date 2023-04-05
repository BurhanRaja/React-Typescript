import { Navigate, Outlet } from "react-router";

const RequireSellerAuth = () => {
  let token = localStorage.getItem("sellerToken");
  console.log(token)
  return token ? <Outlet /> : <Navigate to="/seller/login" />;
};

export default RequireSellerAuth;
