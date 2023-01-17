


const LeftHalf = (): JSX.Element => {
  return (
    <ul className="ml-8 justify-between w-[16rem] md:flex max-md:hidden">
      <li className="relative before:content-[''] before:absolute before:mt-[0.1rem] before:p-[0.1rem] before:bottom-0 before:h-0 before:w-0 before:rounded-lg before:transition-all before:duration-500 hover:before:h-[0.1rem] hover:before:w-8 hover:before:bg-black">
        <a href="#">Fashion</a>
      </li>
      <li className="relative before:content-[''] before:absolute before:mt-[0.1rem] before:p-[0.1rem] before:bottom-0 before:h-0 before:w-0 before:rounded-lg before:transition-all before:duration-500 hover:before:h-[0.1rem] hover:before:w-8 hover:before:bg-black">
        <a href="#">Electronics</a>
      </li>
      <li className="relative before:content-[''] before:absolute before:mt-[0.1rem] before:p-[0.1rem] before:bottom-0 before:h-0 before:w-0 before:rounded-lg before:transition-all before:duration-500 hover:before:h-[0.1rem] hover:before:w-8 hover:before:bg-black">
        <a href="#">Groceries</a>
      </li>
    </ul>
  );
};

export default LeftHalf;
