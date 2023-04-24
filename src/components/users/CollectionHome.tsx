import { useParams } from "react-router";
import FilterBoard from "./FilterBoard";
import ProductSection from "./ProductsCollection";
import { useEffect, useState } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import {
  clearSingleParentCatState,
  getSingleParentCatThunk,
} from "../../features/categories/singleparentcat";
import {
  clearFilteredProductState,
  getFilteredProductsThunk,
} from "../../features/product/filterproducts";
import {
  clearCategoryState,
  getCategoryThunk,
} from "../../features/categories/category";
import { getAllSellerInfo } from "../../api/seller/sellerinfo";

const CollectionHome = () => {
  const { parentcategory } = useParams();

  const { pCat } = useAppSelector((state) => state.singleParentCatAction);
  const { products } = useAppSelector((state) => state.filteredProductsAction);
  const { categories } = useAppSelector((state) => state.categoriesAction);

  const [allCompanies, setAllCompanies] = useState([]);
  const [filteredCat, setFilteredCat] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [filteredCompany, setFilteredComapny] = useState([]);
  const [filteredRating, setFilteredRating] = useState("");

  const dispatch = useAppDispatch();

  async function getAllSeller(parentId: string) {
    let response = await getAllSellerInfo(parentId);
    setAllCompanies(response.companies);
  }

  useEffect(() => {
    dispatch(clearSingleParentCatState());
    dispatch(getSingleParentCatThunk(parentcategory));
  }, []);

  useEffect(() => {
    if (pCat?._id) {
      dispatch(clearFilteredProductState());
      dispatch(
        getFilteredProductsThunk({
          pCat: pCat?._id,
          cat: filteredCat.join(","),
          subcat: "",
          price: priceFrom + "," + priceTo,
          ratings: filteredRating.toString(),
          company: filteredCompany.join(","),
        })
      );
    }
  }, [pCat, priceFrom, priceTo, filteredCat, filteredCompany, filteredRating]);

  useEffect(() => {
    if (pCat?._id) {
      dispatch(clearCategoryState());
      dispatch(getCategoryThunk(pCat?._id));
    }
  }, [pCat]);

  useEffect(() => {
    if (pCat?._id) {
      getAllSeller(pCat?._id);
    }
  }, [pCat]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {pCat?.name}
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <FilterBoard
              categories={categories}
              companies={allCompanies}
              priceFrom={priceFrom}
              priceTo={priceTo}
              filteredCat={filteredCat}
              filteredCompany={filteredCompany}
              filteredRating={filteredRating}
              setFilteredCat={(val) => setFilteredCat(val)}
              setFilteredCompany={(val) => setFilteredComapny(val)}
              setPriceFrom={(val) => setPriceFrom(val)}
              setPriceTo={(val) => setPriceTo(val)}
              setFilteredRating={(val) => setFilteredRating(val)}
            />
            <ProductSection products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHome;
