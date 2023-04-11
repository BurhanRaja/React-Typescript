import instance from "../instance";

export const getOneOrder = async (id: any) => {
  let response = await instance({
    url: `/api/order/${id}`,
    method: "GET",
  });

  return response.data;
};

export const getAllOrders = async () => {
  let response = await instance({
    url: "/api/orders/all",
    method: "GET",
  });
  return response.data;
};

export const placeOrder = async (data: any) => {
  let response = await instance({
    url: "/api/order/create",
    method: "POST",
    data,
  });

  return response.data;
};

export const sellerOrders = async () => {
  let response = await instance({
    url: "/api/orders/seller/order",
    method: "GET",
  });

  return response.data;
};
