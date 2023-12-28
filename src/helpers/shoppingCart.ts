import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getCartItems = async (cartId: number) => {
  try {
    const response = await axios.get(`/cart/${cartId}`);
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
