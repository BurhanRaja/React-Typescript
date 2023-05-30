import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t">
      <div className="container px-5 pb-20 pt-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="/images/logo.png"
              className="w-20 h-16 text-white p-2 rounded-full"
            />
            <span className="ml-3 text-xl">Company</span>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Product Categories
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/shop/64291ad52ff8d574a51feb97"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/642f8b5ffbf8bd6f12752505"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/64302302b666d1135c49fba3"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Home Decor and Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/64451b23f9916a9ed221bdfe"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Beauty and Care
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Sell Product
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/seller/register"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Become a Seller
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Company —
            <span
              className="text-gray-600 ml-1"
            >
              Burhanuddin Raja
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
