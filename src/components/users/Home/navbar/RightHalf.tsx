

const RightHalf = (): JSX.Element => {

  return (
    <ul className="flex justify-center w-[16rem] items-center">
      <li>
        <button className="bg-black w- px-2 py-1 rounded-sm border-[0.1rem] border-black hover:bg-transparent hover:text-black transition duration-150 text-white max-sm:text-sm mr-6">
          Sign in
        </button>
      </li>
      <li>
        <button className="bg-white border-[0.1rem] border-black px-2 py-1 rounded-sm hover:bg-black hover:text-white transition duration-150 max-sm:text-sm">
          Login
        </button>
      </li>
    </ul>
  );
};

export default RightHalf;
