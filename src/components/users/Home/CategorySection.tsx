
const CategorySection = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto flex flex-wrap">
    <div className="text-center w-full mb-8 flex-wrap">
      <h1 className="lg:text-4xl min-[380px]:text-3xl font-bold text-gray-800 title-font lg:mb-0 mb-4">Product Categories</h1>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CategorySection