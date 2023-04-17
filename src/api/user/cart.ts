import instance from "../../instance";

export const addToCart = async (data: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/cart/addtocart",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return response.data;
};

export const removeFromCart = async (id: any, itemId: any) => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: `/api/cart/remove/${id}/${itemId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getCart = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/cart",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


export const getCartTotal = async () => {
  let token = localStorage.getItem("userToken");
  let response = await instance({
    url: "/api/cart/add/total",
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}