
const DiscountSaleHero = () => {
  return (
    <div className="text-start bg-purple-400 flex items-center mt-1 p-5 lg:md:h-[30rem] sm:h-96 min-[370px]:h-48">
        <div className="w-[58%] p-12 text-center mr-16 font-roboto">
            <p className="text-2xl pb-3 mb-2 border-b-[0.1rem] border-slate-600 font-semibold">End of Season</p>
            <p className="text-9xl text-white bg-red-600">Sale</p>
            <p className="text-xl pt-3 mt-2 border-t-[0.1rem] border-slate-600 font-bold">Enjoy An Extra 15% Off</p>
        </div>
        
        <div className="w-[29%] grayscale-10">
            <img src="/images/discount.png" alt="dicount" className="" />    
        </div>  
    </div>
  )
}

export default DiscountSaleHero