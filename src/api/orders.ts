import instance from "../instance";

export const getOneOrder = async (id: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/order/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAllOrders = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/order/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const placeOrder = async (data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/order/create",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return response.data;
};

export const sellerOrders = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/order/seller/order",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
