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

export const getAllProductsWitoutSub = async () => {
  try {
    const response = await axios.get("/products/all-products-without-subs");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const topSelling = async () => {
  try {
    const response = await axios.get("/products/top-selling");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const topDeals = async () => {
  try {
    const response = await axios.get("/products/top-deals");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
