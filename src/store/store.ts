import { configureStore } from "@reduxjs/toolkit";

// Thunk Manage
import authSliceReducer from "../features/seller/auth";
import userAuthReducer from "../features/user/auth";
import userCrudReducer from "../features/user/user";

// Category
import parentCategoryReducer from "../features/categories/parentCategory";
import categoryReducer from "../features/categories/category";
import subCategoryReducer from "../features/categories/subcategory";
import singleparentcatReducer from "../features/categories/singleparentcat";

// Products
import addProductReducer from "../features/product/seller/crudProduct";
import allSellerProductsReducer from "../features/product/seller/allProducts";
import filterproductsReducer from "../features/product/filterproducts";

// Discount
import crudDiscountReducer from "../features/discount/crudDiscount";
import allDiscountReducer from "../features/discount/allDiscount";
import singleDiscountReducer from "../features/discount/singleDiscount";

// Seller Info
import sellerInfoReducer from "../features/seller/sellerInfo";
import crudsellerinfoReducer from "../features/seller/crudsellerinfo";

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

// Seller Orders
import allSellerOrderReducer from "../features/sellerorder/allSellerOrder";
import singleSellerOrderReducer from "../features/sellerorder/singleSellerOrder";

// Seller
import sellerProfileReducer from "../features/seller/sellerprofile";
import crudsellerReducer from "../features/seller/crudseller";

// Address
import getAddressReducer from "../features/address/address";
import crudAddressReducer from "../features/address/crudaddress";
import singleAddressReducer from "../features/address/singleAddress";

// User
import userprofileReducer from "../features/user/userprofile";

// Payments
import crudcardsReducer from "../features/user/crudcards";
import allcardsReducer from "../features/user/allcards";
import paymentsReducer from "../features/user/payments";

// state Manage
import imagesInfoReducer from "../features/product/seller/productImagesInfo";

const store = configureStore({
  reducer: {
    // Thunk Manage

    // authentication
    sellerAuth: authSliceReducer,

    // Seller Info
    getSellerinfoAction: sellerInfoReducer,
    crudSellerInfoAction: crudsellerinfoReducer,

    // Seller
    sellerProfileAction: sellerProfileReducer,
    crudsellerAction: crudsellerReducer,

    // Product
    addProduct: addProductReducer,
    sellerProducts: allSellerProductsReducer,
    singleProductAction: getSingleProductReducer,

    // Discount
    allDiscountAction: allDiscountReducer,
    crudDiscountAction: crudDiscountReducer,
    singleDiscountAction: singleDiscountReducer,

    // Product Filters
    imagesFilterAction: imagesInfoFilterReducer,

    // Category
    pCategoriesAction: parentCategoryReducer,
    categoriesAction: categoryReducer,
    subCategoryAction: subCategoryReducer,
    singleParentCatAction: singleparentcatReducer,

    // User Auth
    userAuthAction: userAuthReducer,
    userCrudAction: userCrudReducer,

    // User
    userProfileAction: userprofileReducer,

    // User Products
    allProducts: getAllProductsReducer,
    filteredProductsAction: filterproductsReducer,

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

    // Seller Order
    allSellerOrdersAction: allSellerOrderReducer,
    singleSellerOrderAction: singleSellerOrderReducer,

    // Total
    cartTotalAction: cartTotalReducer,

    // Payment
    crudcardsAction: crudcardsReducer,
    allCardsAction: allcardsReducer,
    paymentsActon: paymentsReducer,

    // state Manage
    imagesInfo: imagesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
