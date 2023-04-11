import instance from "../../instance";

export const updateUser = async (data: any) => {
  let response = await instance({
    url: "/api/user/update",
    method: "POST",
    data,
  });

  return response.data;
};
