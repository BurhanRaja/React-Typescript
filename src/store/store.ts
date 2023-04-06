import { configureStore } from "@reduxjs/toolkit";

// Thunk Manage
import authSliceReducer from "../features/seller/auth";
import addProductReducer from "../features/product/seller/crudProduct";
import parentCategoryReducer from "../features/categories/parentCategory";
import categoryReducer from "../features/categories/category";
import subCategoryReducer from "../features/categories/subcategory";
import allSellerProductsReducer from "../features/product/seller/allProducts";
import sellerInfoReducer from "../features/seller/sellerInfo";
import getSingleProductReducer from "../features/product/singleProduct";

// state Manage
import imagesInfoReducer from "../features/product/seller/productImagesInfo";

const store = configureStore({
  reducer: {
    // Thunk Manage

    // authentication
    sellerAuth: authSliceReducer,

    // Seller Info
    getSellerinfoAction: sellerInfoReducer,

    // Product
    addProduct: addProductReducer,
    sellerProducts: allSellerProductsReducer,
    singleProductAction: getSingleProductReducer,

    // Category
    pCategoriesAction: parentCategoryReducer,
    categoriesAction: categoryReducer,
    subCategoryAction: subCategoryReducer,

    // state Manage
    imagesInfo: imagesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
