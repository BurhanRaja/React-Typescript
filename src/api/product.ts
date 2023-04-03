import instance from "../instance";

export const getSingleProduct = async (id: string) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/product/${id}`,
  });
  return response.data;
};
