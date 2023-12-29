import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getAllProducts = async (id: number) => {
  try {
    const response = await axios.get(`/products/main-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
