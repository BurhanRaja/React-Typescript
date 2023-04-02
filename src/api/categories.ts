import instance from "../instance";

export const getPCategories = async () => {
    let response = await instance({
        url: "/api/parentcategory",
    });

    return response.data;
}

export const getCategories = async (parentId: string) => {
    let response = await instance({
        url: `/api/category/parentcategory/${parentId}`,
    });

    return response.data;
}

export const getSubCategories = async (id: string) => {
    let response = await instance({
        url: `/api/subcategory/category/${id}`,
    });

    return response.data;
}