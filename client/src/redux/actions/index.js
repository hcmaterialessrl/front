import axios from "axios";
import * as actions from "./actionsTypes";

export function getCategories() {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/categories");
      return dispatch({
        type: actions.GET_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsByCategory(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/categories/" + id.id);
      return dispatch({
        type: actions.GET_PRODUCTS_BY_CATEGORY,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "http://localhost:3001/product/detail/" + id.id
      );
      return dispatch({
        type: actions.GET_PRODUCT_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCar(payload) {
  return {
    type: actions.ADD_CAR,
    payload: payload,
  };
}

export function getProductsCart(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        "http://localhost:3001/products/cart/" + payload
      );
      return dispatch({
        type: actions.GET_PRODUCTS_CART,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function userLogin(payload) {
  return async function (dispatch) {
    try {
      await axios
        .post("http://localhost:3001/user/login/", {
          email: payload.email,
          password: payload.password,
        })
        .then((response) => {
          const token = response.data.token;
          const id = response.data.id
          localStorage.setItem("token", token);
          localStorage.setItem("id", id)
        });
      return dispatch({
        type: actions.USER_LOGIN,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function userRegister(payload) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/user/register/", {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        password: payload.password,
        city: payload.city,
        telephone: payload.telephone,
      });
      return dispatch({
        type: actions.USER_REGISTER,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUser(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/user/" + id);
      return dispatch({
        type: actions.GET_USER,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCartProduct(payload) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/cart/product/", {
        idUsuario: payload.idUsuario,
        idProducto: payload.idProducto,
        cantidad: payload.cantidad,
      });
      return dispatch({
        type: actions.ADD_CART_PRODUCT,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCartProducts (id) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/cart/products/" + id)
      return dispatch({
        type: actions.GET_CART_PRODUCTS,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getNewestProducts () {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/products/newest");
      return dispatch({
        type: actions.GET_NEWEST_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSubCategories () {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/subcategories");
      return dispatch({
        type: actions.GET_SUB_CATEGORIES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSubCategoriesProducts (id) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/products/subcategory/" + id.id);
      return dispatch({
        type: actions.GET_SUB_CATEGORIES_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsByName (name) {
  return async function (dispatch) {
    try {
      console.log(name)
      const json = await axios.get("http://localhost:3001/products/name/" + name);
      return dispatch({
        type: actions.GET_PRODUCTS_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsFiltered (payload) {
  return async function (dispatch) {
    try {
      console.log(payload, "PA")
      const json = await axios.get("http://localhost:3001/products/filtered/" + payload);
      return dispatch({
        type: actions.GET_PRODUCTS_FILTERED,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sendMail (payload) {
  return async function (dispatch) {
    try {
      console.log(payload, "PAy")
      const json = await axios.post("http://localhost:3001/product/sendmail", {
        email: payload.email,
        product: payload.product,
        productId: payload.productId
      })
      return dispatch({
        type: actions.SEND_MAIL,
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}