import Fashion from "./largeMenus/Fashion";
import {useState} from "react";
import Electronics from "./largeMenus/Electronics";


const LeftHalf = (): JSX.Element => {

  const [fashionOpen, setFashionOpen] = useState(false);
  const [electronicsOpen, setElectronicsOpen] = useState(false);

  return (
    <ul className="ml-8 justify-between w-[10rem] md:flex max-md:hidden">
      <li className={`relative ${!fashionOpen && "before:content-[''] before:absolute before:mt-[0.1rem] before:p-[0.1rem] before:bottom-0 before:h-0 before:w-0 before:rounded-lg before:transition-all before:duration-500 hover:before:h-[0.1rem] hover:before:w-8 hover:before:bg-black"}`}>
        <a href="#" onClick={() => {setFashionOpen(!fashionOpen); setElectronicsOpen(false)}}>Fashion</a>
        {fashionOpen && <Fashion openCheck={fashionOpen} />}
      </li>
      <li className={`relative ${!electronicsOpen && "before:content-[''] before:absolute before:mt-[0.1rem] before:p-[0.1rem] before:bottom-0 before:h-0 before:w-0 before:rounded-lg before:transition-all before:duration-500 hover:before:h-[0.1rem] hover:before:w-8 hover:before:bg-black"}`}>
        <a href="#" onClick={() => {setElectronicsOpen(!electronicsOpen); setFashionOpen(false)}}>Electronics</a>
        <Electronics openCheck={electronicsOpen} />
      </li>
    </ul>
  );
};

export default LeftHalf;
