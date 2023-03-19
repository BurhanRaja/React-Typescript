import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./navbar/Header";

// type LayoutProps = {
//   children: JSX.Element | JSX.Element[];
// };

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
