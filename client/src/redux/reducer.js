import * as actions from "./actions/actionsTypes";

const initialState = {
  categories: [],
  products: [],
  product: [],
  cart: [],
  productsCart: [],
  user: [],
  newestProducts: [],
  subcategories: [],
  subcategoriesproducts: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case actions.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: payload,
      };
    case actions.GET_PRODUCT_DETAIL:
      return {
        ...state,
        product: payload,
      };
    case actions.GET_PRODUCTS_CART:
      return {
        ...state,
        productsCart: payload,
      };
    case actions.GET_NEWEST_PRODUCTS:
      return {
        ...state,
        newestProducts: payload,
      };
    case actions.GET_PRODUCTS_FILTERED:
      return {
        ...state,
        products: payload,
        subcategoriesproducts: payload,
      };
    case actions.GET_SUB_CATEGORIES_PRODUCTS:
      return {
        ...state,
        subcategoriesproducts: payload,
      };
    case actions.GET_SUB_CATEGORIES:
      return {
        ...state,
        subcategories: payload,
      };
    case actions.SEND_MAIL:
      return {
        ...state,
      };
    case actions.GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        products: payload,
      };
    case actions.ADD_CART_PRODUCT:
      return {
        ...state,
      };
    case actions.GET_CART_PRODUCTS:
      return {
        ...state,
        cart: payload,
      };
    case actions.USER_LOGIN:
      return {
        ...state,
      };
    case actions.USER_REGISTER:
      return {
        ...state,
      };
    case actions.GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
}
