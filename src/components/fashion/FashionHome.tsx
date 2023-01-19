import Layout from "../Home/Layout"
import ProductSection from "../ProductSection"
import FilterBoard from "../FilterBoard"

const FashionHome = () => {
  return (
    <Layout>
    <div className="flex">
        <FilterBoard />
        <ProductSection title="Women Collection" />
    </div>
    </Layout>
  )
}

export default FashionHome