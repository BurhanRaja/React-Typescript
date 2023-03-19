import { Outlet } from "react-router";
import Header from "./defualt/Header";
import Sidebar from "./defualt/Sidebar";

const Layout = (): JSX.Element => {
  return (
    <>
      <div className="flex">
        <Header />
        <Sidebar />
      </div>
      <div className="ml-[16rem]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
