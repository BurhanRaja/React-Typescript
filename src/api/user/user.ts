import instance from "../../instance";

export const updateUser = async (data: any) => {
  let response = await instance({
    url: "/api/client/update",
    method: "POST",
    data,
  });

  return response.data;
};

export const getUser = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/client/",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAllCards = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/payments/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addCards = async (data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/payments/create`,
    data,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateCards = async (id: string, data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/payments/update/${id}`,
    method: "PUT",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const deleteCard = async (id: string) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/payments/delete/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
