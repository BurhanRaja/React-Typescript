import instance from "../instance";

export const addDiscount = async (data: any) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: "/api/discount/create",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return response.data;
};

export const getDiscount = async (id: any) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/discount/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateDiscount = async (id: any) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/discount/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteDiscount = async (id: any) => {
  let token = localStorage.getItem("sellerToken");
  let response = await instance({
    url: `/api/discount/delete/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
