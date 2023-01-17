const Cart = () => {
  return (
    <>
      <p className="text-start p-4 border-b-2 border-gray-700 font-semibold text-lg">
        Cart
      </p>
      <a href="#">
        <div className="text-start p-3 border-y-[0.1rem] flex justify-start items-center">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="t-shirt"
            className="w-10 mr-2"
          />
          <div className="w-[100%]">
            <p className="text-sm font-bold flex justify-between items-center">
              <span>{"Allen Solly T-Shirt".substring(0, 18)}...</span>
              <span className="font-normal text-xs">3:04:01pm</span>
            </p>
            <p className="text-xs">
              <span>Qty: 2</span>
            </p>
          </div>
        </div>
      </a>
      <div className="bg-gray-700 text-white rounded-sm my-3 mx-4">
        <button className="w-[100%] py-1">More</button>
      </div>
    </>
  );
};

export default Cart;
