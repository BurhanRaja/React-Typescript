import instance from "../instance";

export const getSingleProduct = async (id: string | undefined) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/product/${id}`,
  });
  return response.data;
};

export const getAllHomeProducts = async () => {
  let response = await instance({
    url: "/api/product/all/products",
  });

  return response.data;
};

export const getfilteredImages = async (color: any, id: string) => {
  let response = await instance({
    url: `/api/product/filter/images/${id}?color=${color}`,
    method: "GET",
  });

  return response.data;
};
