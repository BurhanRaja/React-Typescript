import instance from "../../instance";

export const userRegister = async (data: any) => {
  let response = await instance({
    url: "/api/client/register",
    method: "POST",
    data,
  });

  return response.data;
};

export const userLogin = async (data: any) => {
  let response = await instance({
    url: "/api/client/login",
    method: "POST",
    data,
  });

  return response.data;
};
