// Import axios
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

// Helper function to update customer
export const updateCustomer = async (customerId: string, data: any) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/customers/${customerId}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer: ", error);
    throw error;
  }
};
