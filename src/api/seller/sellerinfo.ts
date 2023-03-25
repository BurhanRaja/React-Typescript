import instance from "../../instance";

export const getSellerInfo = async () => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller/info",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const addSellerInfo = async (data: Object) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller/info/create",
        method: "POST",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const updateSeller = async (data: Object) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/seller/info/update",
        method: "PUT",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}