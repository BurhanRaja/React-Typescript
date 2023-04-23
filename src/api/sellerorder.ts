import instance from "../instance";

export const getAllSellerOrder = async () => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: "/api/sellerorder/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getSingleSellerOrder = async (id: string | undefined) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/sellerorder/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getSellerOrderCount = async () => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: "/api/sellerorder/order/count",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
