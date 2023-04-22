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
