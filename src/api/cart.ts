import instance from "../instance";

export const addToCart = async (data: any) => {
  let response = await instance({
    url: "/api/cart/addtocart",
    method: "POST",
    data,
  });

  return response.data;
};

export const removeFromCart = async (id: any, itemId: any) => {
  let response = await instance({
    url: `/api/cart/${id}/${itemId}`,
    method: "POST",
  });

  return response.data;
};

export const getCart = async () => {
  let response = await instance({
    url: "/api/cart",
  });

  return response.data;
};
