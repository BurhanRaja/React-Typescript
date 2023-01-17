
const Hero = () => {
  return (
    <div className="relative mt-5 p-3 h-[80vh]">
        <div className="absolute top-28 left-28 z-20">
          <img src="/images/one-image-1.jpg" alt="menfashion" className="w-64 rounded-md" />
        </div>
        <div className="text-7xl relative text-start flex flex-col items-center justify-center font-semibold w-[85%] h-[100%] font-roboto">
          <span className="h-96 w-[0.2rem] absolute bg-gray-300"></span>
          <p className="pl-4 pb-4 z-10">Exclusive</p>
          <p className="pl-52 border-b-2 border-black z-10">Collection</p>
          <p className="text-3xl pl-36 mt-4 font-extrabold">Sale On</p>
        </div>
        <div className="absolute top-10 right-32">
          <img src="/images/one-image-2.jpg" alt="womenfashion" className="w-80 rounded-md" />
        </div>
    </div>
  )
}

export default Hero