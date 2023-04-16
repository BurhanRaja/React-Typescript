import instance from "../../instance";

export const getAllDiscount = async () => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: "/api/discount/all/discounts",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const getSingleDiscount = async (id: String) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/discount/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const addDiscount = async (data: any) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/discount/create`,
        method: "POST",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const updateDiscount = async (id:String, data: any) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/discount/update/${id}`,
        method: "PUT",
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export const deleteDiscount = async (id:String) => {
    let token = localStorage.getItem("sellerToken");
    let response = await instance({
        url: `/api/discount/update/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}