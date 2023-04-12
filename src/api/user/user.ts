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
