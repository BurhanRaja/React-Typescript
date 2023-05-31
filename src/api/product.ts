import instance from "../instance";

export const getSingleProduct = async (id: string | undefined) => {
  let response = await instance({
    url: `/api/product/${id}`,
  });
  return response.data;
};

export const getSellerProductCount = async () => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/product/seller/count`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllHomeProducts = async () => {
  let response = await instance({
    url: "/api/product/all/products",
  });

  return response.data;
};

export const getfilteredImages = async (
  color: string,
  id: string,
  itemId: string
) => {
  let response = await instance({
    url: `/api/product/filter/images/${itemId}/${id}?color=${color}`,
    method: "GET",
  });

  return response.data;
};

export const getAllProducts = async (
  pCat: string | undefined,
  cat?: string,
  subcat?: string,
  price?: string,
  ratings?: string,
  company?: string
) => {
  let response = await instance({
    url: `/api/product/all/products?company=${company}&parentcategory=${pCat}&category=${cat}&subcategory=${subcat}&price=${price}&ratings=${ratings}`,
    method: "GET",
  });

  return response.data;
};

export const addReview = async (data: any, id: string | undefined) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/product/add/review/${id}`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
