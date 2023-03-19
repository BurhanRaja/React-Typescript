import { useLocation } from "react-router";
import FilterBoard from "./FilterBoard";
import ProductSection from "./ProductsCollection";
import { useEffect, useState } from "react";

const CollectionHome = () => {

  const {pathname} = useLocation();

  const [title, setTitle] = useState("");

  function handleTitle(): void {
      let allPath = pathname.split("/");
      let t = allPath[allPath.length-1];
      t = t.substring(0, 1).toUpperCase() + t.substring(1,t.length);
      setTitle(t);
  }

  useEffect(() => {
    handleTitle();
  }, [pathname]);


  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {title}
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
            <FilterBoard />

            <ProductSection title="Women Collection" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHome;
