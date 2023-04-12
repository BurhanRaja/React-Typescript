import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

const RightHalf = (): JSX.Element => {

  let token = localStorage.getItem("userToken");
  
  const [name, setName] = useState("");

  

  useEffect(() => {

  }, [])

  return !token ? (
    <ul className="flex justify-center w-[16rem] items-center">
      <li>
        <Link to="/register">
          <button className="bg-black w- px-2 py-1 rounded-sm border-[0.1rem] border-black hover:bg-transparent hover:text-black transition duration-150 text-white max-sm:text-sm mr-6">
            Register
          </button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <button className="bg-white border-[0.1rem] border-black px-2 py-1 rounded-sm hover:bg-black hover:text-white transition duration-150 max-sm:text-sm">
            Login
          </button>
        </Link>
      </li>
    </ul>
  ) : (
    <>
      <div className="flex items-center gap-x-2">
        <CgProfile className="object-cover w-8 h-8 rounded-full" />
        <div>
          <h1 className="text-lg font-semibold text-gray-700 capitalize ">
            Mia John
          </h1>
        </div>
      </div>
    </>
  );
};

export default RightHalf;
