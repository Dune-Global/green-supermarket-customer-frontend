import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getCartItems = async (cartId: number) => {
  try {
    const response = await axios.get(`/cart/total/${cartId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteCartItem = async (cartItemId: number) => {
  try {
    const response = await axios.delete(`/cart/remove-from-cart/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addToCart = async (
  cartId: number,
  productId: number,
  quantity: number
) => {
  try {
    const response = await axios.post(`/cart/add-to-cart`, {
      cartId: cartId,
      productId: productId,
      quantity: quantity,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
