import { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./defualt/Header";
import Sidebar from "./defualt/Sidebar";

const Layout = (): JSX.Element => {
  // Clear Localstorage when close window
  function clearStorage() {
    let session = sessionStorage.getItem("loggedin");
    if (session == null || !session) {
      localStorage.clear();
    }
  }

  useEffect(() => {
    window.addEventListener("load", clearStorage);
  }, []);

  return (
    <>
      <div className="flex">
        <Header />
        <Sidebar />
      </div>
      <div className="ml-[18rem]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
