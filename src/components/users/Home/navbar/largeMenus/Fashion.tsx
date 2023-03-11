import { fashionData } from "../../../../../utils/menuData";

type FashionProps = {
    openCheck: boolean
}

const Fashion = ({openCheck}: FashionProps): JSX.Element => {
  return (
    <div className={`absolute z-50 w-[60rem] h-auto bg-gray-100 border-[0.15rem] rounded-md top-[3.2rem] left-[-30px] flex justify-between items-center py-5 px-10 ${openCheck ? "block" : "hidden"}`}>
      <div className="px-4 w-[35%] pl-8">
        <p className="text-xl text-start mb-3 font-bold text-gray-900">Mens</p>
        <div className="flex justify-between text-sm w-[100%] mr-3 mb-4 text-gray-600">
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Clothing</li>
            {fashionData?.men?.clothing?.map((el) => {
              return (
                <li key={el} className="mt-[0.4rem] hover:text-gray-800">
                  <a href="#">{el}</a>
                </li>
              );
            })}
          </ul>
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Accessories</li>
            {fashionData?.men?.asccessories?.map((el) => {
              return (
                <li key={el} className="mt-[0.4rem] hover:text-gray-800">
                  <a href="#">{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-xl text-start mb-3 font-bold text-gray-900">
          Womens
        </p>
        <div className="flex justify-between text-sm w-[100%] mr-3 text-gray-600">
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Clothing</li>
            {fashionData?.women?.clothing?.map((el) => {
              return (
                <li key={el} className="mt-[0.4rem] hover:text-gray-800">
                  <a href="#">{el}</a>
                </li>
              );
            })}
          </ul>
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Accessories</li>
            {fashionData?.women?.asccessories?.map((el) => {
              return (
                <li key={el} className="mt-[0.4rem] hover:text-gray-800">
                  <a href="#">{el}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 row-span-3 gap-3 w-96">
          <a href="#" className="col-span-2 row-span-3 ">
            <img
              src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
              alt="tshirt"
              className="rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Clothing</p>
          </a>
          <a href="#">
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images-2_600x.png?v=1655198531"
              alt="tshirt"
              className=" rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Wacthes</p>
          </a>
          <a href="#">
            <img
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg"
              alt="tshirt"
              className=" rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Bags</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
