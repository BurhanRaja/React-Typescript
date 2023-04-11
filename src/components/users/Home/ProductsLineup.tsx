import React from "react";

type ProductsProps = {
  title: string;
  mappedProducts: Array<any>
};

const ProductsLineup = ({ title, mappedProducts }: ProductsProps): JSX.Element => {
  return (
    <section>
      <div className="w-[90%] px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid gap-7 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {mappedProducts}
        </ul>
      </div>
    </section>
  );
};

export default ProductsLineup;
