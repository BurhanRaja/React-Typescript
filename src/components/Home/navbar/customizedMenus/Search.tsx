import {IoMdClose} from "react-icons/io";

type SearchProps = {
    setOpen: (val: boolean) => void
} 

const Search = ({setOpen}: SearchProps): JSX.Element => {
  return (
    <form className="absolute top-7 right-0 flex justify-center items-center w-[25rem] max-md:right-[-2rem] max-md:top-9 max-md:w-[15rem] max-[470px]:w-[11rem] max-[470px]:right-[-4rem]">
      <input
        type="text"
        className="w-[100%] border-[0.1rem] rounded-l-md p-1 focus:outline-none focus:border-[0.1rem] focus:border-black border-gray-400"
      />
      <button className="text-lg flex bg-black text-white py-[0.55rem] px-2 rounded-r-md" onClick={() => setOpen(false)}>
        <IoMdClose />
      </button>
    </form>
  );
};

export default Search;
