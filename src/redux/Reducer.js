import { ADD_TO_CART } from "./Type";

export const CartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.warn("reducer called", action);
      return [action.data, ...data];
    }
    default:
      return data;
  }
};
