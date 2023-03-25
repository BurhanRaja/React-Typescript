import instance from "../../instance";

export const getAllProducts = async () => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/product",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const getSingleProduct = async () => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/product/:id",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const addProduct = async (data: Object) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/product/create",
        method: "POST",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const updateProduct = async (id: String, data: Object) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/product/update/${id}`,
        method: "PUT",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const deleteProduct = async (id: String) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/product/delete/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}