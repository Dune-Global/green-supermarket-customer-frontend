import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getAllProductsWithSub = async () => {
  try {
    const response = await axios.get("/products/all-products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
