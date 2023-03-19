import { Link } from "react-router-dom";

const RightHalf = (): JSX.Element => {
  return (
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
  );
};

export default RightHalf;
