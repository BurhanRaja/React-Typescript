type ElectronicProps = {
    openCheck: boolean
}

const Electronics = ({openCheck}: ElectronicProps): JSX.Element => {
  return (
<div className={`absolute w-[60rem] z-50 h-auto bg-gray-100 border-[0.15rem] rounded-md top-[3.2rem] left-[-120px] flex justify-between items-center py-5 px-10 ${openCheck ? "block" : "hidden"}`}>
      <div className="px-4 w-[60%]">
        <div className="flex justify-between text-sm w-[100%] mr-3 mb-4 text-gray-600">
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Mobile & Accessories</li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Mobiles</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Screen Guards</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Chargers</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Power Banks</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Smart Watches</a>
            </li>
          </ul>
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Laptops</li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Thin and light Laptops</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">2-in-1 Laptops</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Gaming Laptops</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Business Laptops</a>
            </li>
          </ul>
          <ul className="mr-5 text-start">
            <li className="text-sm text-gray-800 font-bold">Audio</li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Earphones</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">On & Over ears Headphones</a>
            </li>
            <li className="mt-[0.4rem] hover:text-gray-800">
              <a href="#">Speakers</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 row-span-3 gap-3 w-96">
          <a href="#" className="col-span-2 row-span-2 ">
            <img
              src="https://www.jabra.in/-/media/Global/Spots/Product-Recommend/Wireless-Calls---Music/on-ear.jpg?la=en-IN&hash=E389C3238C0119BDF50118B1BB7E498C401D4E1F"
              alt="tshirt"
              className=" rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Headphones</p>
          </a>
          <a href="#" className="">
            <img
              src="https://i0.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Starlight_PDP_Image_Position-1B_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1"
              alt="tshirt"
              className=" rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Mobiles</p>
          </a>
          <a href="#" className="">
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
              alt="tshirt"
              className="rounded-md opacity-100 hover:opacity-80"
            />
            <p className="mt-2 font-semibold text-xs">Laptops</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Electronics