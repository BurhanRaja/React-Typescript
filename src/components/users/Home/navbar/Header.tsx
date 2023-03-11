import Navbar from "./Navbar";
import SecondNav from "./SecondNav";

const Header = (): JSX.Element => {
  return (
    <div className=" w-[100%]">
        <Navbar />
        <SecondNav />
    </div>
  )
}

export default Header