// Import axios
import axios from "axios";

// Define BASE_URL
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

// Helper function to get customer by ID
export const getCustomerById = async (customerId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/customers/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error getting customer: ", error);
    throw error;
  }
};
