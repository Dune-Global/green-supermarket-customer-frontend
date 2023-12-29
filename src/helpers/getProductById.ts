import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getProductById = async (item: number) => {
  try {
    const response = await axios.get(`/products/product/${item}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
