import instance from "../../instance";

export const addOrder = async (data: any) => {
  let token = localStorage.getItem("userToken");
  const response = await instance({
    url: "/api/payments/create/order",
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const verifyOrder = async (data: any) => {
  let token = localStorage.getItem("userToken");
  const response = await instance({
    url: "/api/payments/verify/order",
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
