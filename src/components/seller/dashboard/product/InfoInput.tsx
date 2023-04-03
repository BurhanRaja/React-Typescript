import { useState } from "react";
import { addImageInfo } from "../../../../features/product/seller/productImagesInfo";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { v4 as uuidv4 } from "uuid";

const InfoInput = () => {
  // Upload Files
  // const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  // function handleUploadFile(e: any): void {
  //   setUploadFiles([...uploadFiles, e.target.files[0]]);
  // }
  // function deleteFile(filesize: number) {
  //   let filteredFiles = uploadFiles.filter((el) => el.size !== filesize);
  //   setUploadFiles(filteredFiles);
  // }

  // UseState Init
  const [oneImage, setOneImage] = useState<string>("");
  const [oneSize, setOneSize] = useState("");
  const [oneInfo, setOneInfo] = useState("");

  const [images, setImages] = useState<Array<string>>();
  const [sizes, setSizes] = useState<Array<string | number>>([]);
  const [infoTypes, setInfoTypes] = useState<Array<string | number>>([]);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // Error Msg
  const [errorMsg, setErroMsg] = useState("");

  // Sizes
  function addSize(e: any) {
    e.preventDefault();
    if (oneSize.length === 0) {
      return;
    }
    setSizes((sizes) => [...(sizes ?? []), oneSize]);
    setOneSize("");
  }
  function deleteSize(size: string | number) {
    setSizes((sizes) => sizes?.filter((el) => el !== size));
  }

  // Info
  function addInfo(e: any) {
    e.preventDefault();
    if (oneInfo.length === 0) {
      return;
    }
    setInfoTypes((infoTypes) => [...(infoTypes ?? []), oneInfo]);
    setOneInfo("");
  }
  function deleteInfo(oneInfo: string | number) {
    setInfoTypes((infoTypes) => infoTypes?.filter((el) => el !== oneInfo));
  }

  // Images
  function addImages(e: any) {
    e.preventDefault();
    if (oneImage.length === 0) {
      return;
    }
    setImages((images) => [...(images ?? []), oneImage]);
    setOneImage("");
  }
  function deleteImage(image: string) {
    setImages((images) => images?.filter((el) => el !== image));
  }

  // Add Images Info
  const dispatch = useAppDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();

    if (
      color === "" ||
      images?.length === 0 ||
      quantity === "" ||
      price === ""
    ) {
      setErroMsg("Please fill the above field");
      return;
    }

    dispatch(
      addImageInfo({
        _id: uuidv4().split("-").join(""),
        images,
        color,
        sizes,
        info_types: infoTypes,
        price,
        quantity,
      })
    );

    setImages([]);
    setInfoTypes([]);
    setSizes([]);
    setQuantity("");
    setPrice("");
    setOneImage("");
    setOneInfo("");
    setOneSize("");
  }

  return (
    <div className="my-8 p-8 bg-gray-100">
      <h3 className="text-2xl font-bold">
        Different Available Product Information Based on Images
      </h3>
      <h5 className="mt-5 mb-2">
        Choose Any Two from Color, Size or Product Info
      </h5>
      <div className="grid grid-cols-3 gap-4">
        {/* Color */}
        <div className="relative">
          <label htmlFor="color" className="leading-7 text-sm text-gray-600">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <small
            className={
              errorMsg && color.length === 0 ? "text-red-500" : "hidden"
            }
          >
            {errorMsg}
          </small>
        </div>
        {/* Color */}

        {/* Size */}
        <div className="relative">
          <label htmlFor="size" className="leading-7 text-sm text-gray-600">
            <span className="font-semibold">Size</span> (could be multiple and
            based on colors)
          </label>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="size"
              name="size"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={oneSize}
              onChange={(e) => setOneSize(e.target.value)}
            />
            <button
              className="bg-black text-white p-2 px-4 rounded-r"
              onClick={addSize}
            >
              Add
            </button>
          </div>
          <small
            className={
              errorMsg && sizes.length === 0 ? "text-red-500" : "hidden"
            }
          >
            {errorMsg}
          </small>
          <div className="flex items-center mt-3 flex-wrap">
            {sizes?.map((el) => {
              return (
                <>
                  <div
                    className="flex bg-black text-white p-2 rounded mr-2 mb-2"
                    key={el}
                  >
                    <small>{el}</small>{" "}
                    <button
                      className="text-red-400 ml-2 text-xs"
                      onClick={() => deleteSize(el)}
                    >
                      X
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Size */}

        {/* Product Info */}
        <div className="relative">
          <label
            htmlFor="product_type"
            className="leading-7 text-sm text-gray-600"
          >
            <span className="font-semibold">Product Info</span> (could be
            multiple and based on colors)
          </label>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="product_type"
              name="product_type"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={oneInfo}
              onChange={(e) => setOneInfo(e.target.value)}
            />
            <button
              className="bg-black text-white p-2 px-4 rounded-r mr-2"
              onClick={addInfo}
            >
              Add
            </button>
          </div>
          <small
            className={
              errorMsg && infoTypes.length === 0 ? "text-red-500" : "hidden"
            }
          >
            {errorMsg}
          </small>
          <div className="flex items-center mt-3 flex-wrap">
            {infoTypes?.map((el) => {
              return (
                <>
                  <div
                    className="flex bg-black text-white p-2 rounded mr-2 mb-2"
                    key={el}
                  >
                    <small>{el}</small>{" "}
                    <button
                      className="text-red-400 ml-2 text-xs"
                      onClick={() => deleteInfo(el)}
                    >
                      X
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {infoTypes.length === 0 && (
            <small>For Example: In mobile - 16GB RAM</small>
          )}
        </div>
      </div>
      {/* Product Info */}

      <div className="grid grid-cols-2 gap-4 mb-3">
        {/* Quantity */}
        <div className="relative mb-2">
          <label htmlFor="quantity" className="leading-7 text-sm text-gray-600">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <small
            className={
              errorMsg && quantity.length === 0 ? "text-red-500" : "hidden"
            }
          >
            {errorMsg}
          </small>
        </div>
        {/* Quantity */}

        {/* Price */}
        <div className="relative mb-2">
          <label htmlFor="price" className="leading-7 text-sm text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <small
            className={
              errorMsg && price.length === 0 ? "text-red-500" : "hidden"
            }
          >
            {errorMsg}
          </small>
        </div>
        {/* Price */}
      </div>

      {/* Images */}
      <div className="mb-3">
        <label htmlFor="image" className="block text-sm text-black">
          Add Images
        </label>
        <div className="flex justify-center items-center">
          <input
            type="text"
            id="images"
            name="images"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={oneImage}
            onChange={(e) => setOneImage(e.target.value)}
          />
          <button
            className="bg-black text-white p-2 px-4 rounded-r"
            onClick={addImages}
          >
            Add
          </button>
        </div>
        <small
          className={
            errorMsg && images?.length === 0 ? "text-red-500" : "hidden"
          }
        >
          {errorMsg}
        </small>
        <div className="flex items-center mt-5">
          {images?.map((el, index) => {
            return (
              <div key={el}>
                <img
                  id={`image-${index}`}
                  className="mr-4"
                  src={el}
                  alt=""
                  width="100"
                  height="100"
                />
                <button
                  onClick={() => deleteImage(el)}
                  className="text-xs p-0 border-0 text-red-600 underline"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        {images?.length === 0 && (
          <small>Add Images Based on Information Given Above</small>
        )}
      </div>
      {/* Images */}
      <button
        type="submit"
        className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg w-[20%]"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default InfoInput;
