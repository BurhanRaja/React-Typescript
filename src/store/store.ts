import { configureStore } from "@reduxjs/toolkit";

// Thunk Manage
import authSliceReducer from "../features/seller/auth";
import userAuthReducer from "../features/user/auth";
import userCrudReducer from "../features/user/user";

// Category
import parentCategoryReducer from "../features/categories/parentCategory";
import categoryReducer from "../features/categories/category";
import subCategoryReducer from "../features/categories/subcategory";

// Products
import addProductReducer from "../features/product/seller/crudProduct";
import allSellerProductsReducer from "../features/product/seller/allProducts";
import sellerInfoReducer from "../features/seller/sellerInfo";

import getSingleProductReducer from "../features/product/singleProduct";
import getAllProductsReducer from "../features/product/user/allProducts";
import imagesInfoFilterReducer from "../features/product/imagesInfo";

// Cart
import userCartReducer from "../features/cart/userCart";
import cartTotalReducer from "../features/cart/getTotal";

// Orders
import allOrdersReducer from "../features/order/allOrders";
import crudOrdersReducer from "../features/order/crudOrder";
import singleOrderReducer from "../features/order/singleOrder";

// Address
import getAddressReducer from "../features/address/address";
import crudAddressReducer from "../features/address/crudaddress";
import singleAddressReducer from "../features/address/singleAddress";

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

    // Product Filters
    imagesFilterAction: imagesInfoFilterReducer,

    // Category
    pCategoriesAction: parentCategoryReducer,
    categoriesAction: categoryReducer,
    subCategoryAction: subCategoryReducer,

    // User Auth
    userAuthAction: userAuthReducer,
    userCrudAction: userCrudReducer,

    // User Products
    allProducts: getAllProductsReducer,

    // Address
    getAddressAction: getAddressReducer,
    crudAddressAction: crudAddressReducer,
    singleAddressAction: singleAddressReducer,

    // Cart
    singleUserCartAction: userCartReducer,

    // Orders
    allOrdersAction: allOrdersReducer,
    crudOrdersAction: crudOrdersReducer,
    singleorderAction: singleOrderReducer,

    // Total
    cartTotalAction: cartTotalReducer,

    // state Manage
    imagesInfo: imagesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
