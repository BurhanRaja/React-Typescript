import ProductSection from "../ProductSection"
import FilterBoard from "../FilterBoard"

const FashionHome = () => {
  return (
    <>
    <div className="flex">
        <FilterBoard />
        <ProductSection title="Women Collection" />
    </div>
    </>
  )
}

export default FashionHome;