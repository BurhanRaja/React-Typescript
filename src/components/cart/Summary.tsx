const Summary = () => {
  return (
    <div className="w-1/2">
      <div className="w-[80%] mx-auto bg-gray-200 p-10 text-start rounded-sm">
        <div className="text-xl">
            <p className="text-4xl font-bold">Summary</p>
          <p className="my-4 flex justify-between items-center">
            <span className="">Total Products</span>
            <span className="">2</span>
          </p>
          <p className="my-4 flex justify-between items-center">
            <span className="">Shipping</span>
            <span className="">$30</span>
          </p>
          <p className="my-4 flex justify-between items-center">
            <span className="">Tax</span>
            <span className="">$28</span>
          </p>
          <p className="my-4 flex justify-between items-center text-3xl">
            <span className="font-semibold">Total Price</span>
            <span className="font-bold">$800</span>
          </p>
        </div>
        <div>
          <button className="w-[100%] bg-zinc-800 hover:bg-black text-white rounded-sm py-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
