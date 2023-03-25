import instance from "../../instance";

export const getSeller = async (id: String) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const registerSeller = async (data: Object) => {
    let response = await instance({
        url: "/api/seller/register",
        method: "POST",
        data
    });
    return response.data;
}

export const loginSeller = async (data: Object) => {
    let response = await instance({
        url: "/api/seller/login",
        method: "POST",
        data
    });
    return response.data;
}

export const updateSeller = async (data: Object) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller/update",
        method: "PUT",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const deleteSeller = async () => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller/delete",
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}