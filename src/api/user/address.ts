import instance from "../../instance";

export const getAddresses = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/user/address/",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addAddress = async (data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/user/address/create",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return response.data;
};

export const updateAddress = async (id: string, data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/user/address/update/${id}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return response.data;
};

export const deleteAddress = async (id: string) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/user/address/delete/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
