import { configureStore } from "@reduxjs/toolkit";

// Thunk Manage
import authSliceReducer from "../features/seller/auth";
import addProductReducer from "../features/product/seller/crudProduct";
import parentCategoryReducer from "../features/categories/parentCategory";
import categoryReducer from "../features/categories/category";
import subCategoryReducer from "../features/categories/subcategory";
import allSellerProductsReducer from "../features/product/seller/allProducts";
import sellerInfoReducer from "../features/seller/sellerInfo";

// state Manage
import imagesInfoReducer from "../features/product/seller/productImagesInfo";

const store = configureStore({
  reducer: {
    // Thunk Manage
    sellerAuth: authSliceReducer,
    addProduct: addProductReducer,
    pCategoriesAction: parentCategoryReducer,
    categoriesAction: categoryReducer,
    subCategoryAction: subCategoryReducer,
    sellerProducts: allSellerProductsReducer,
    getSellerinfoAction: sellerInfoReducer,

    // state Manage
    imagesInfo: imagesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
