import { ADD_TO_CART } from "./Type";

export const AddToCart = (item) => {
  return { type: ADD_TO_CART, item };
}