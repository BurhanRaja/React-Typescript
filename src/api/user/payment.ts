import instance from "../../instance";

export const addPayment = async (data: any) => {
  let token = localStorage.getItem("userToken");
  const response = await instance({
    url: "/api/payments/charge",
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
