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
import {
  clearSubCategoriesState,
  getAllSubCatThunk,
} from "../../features/categories/subcategory";

const CollectionHome = () => {
  const { parentcategory } = useParams();

  const { pCat } = useAppSelector((state) => state.singleParentCatAction);
  const { products } = useAppSelector((state) => state.filteredProductsAction);
  const { categories } = useAppSelector((state) => state.categoriesAction);
  const { subCategories } = useAppSelector((state) => state.subCategoryAction);

  const dispatch = useAppDispatch();

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
          cat: "",
          subcat: "",
          price: "",
          ratings: "",
        })
      );
    }
  }, [pCat]);

  useEffect(() => {
    if (pCat?._id) {
      dispatch(clearCategoryState());
      dispatch(getCategoryThunk(pCat?._id));
    }
  }, [pCat]);

  useEffect(() => {
    if (pCat?._id) {
      dispatch(clearSubCategoriesState());
      dispatch(
        getAllSubCatThunk({
          id: pCat?._id,
          cat: "",
        })
      );
    }
  }, [pCat]);

  console.log(subCategories);

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

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <FilterBoard
              categories={categories}
              subcategories={subCategories}
            />
            <ProductSection products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHome;
