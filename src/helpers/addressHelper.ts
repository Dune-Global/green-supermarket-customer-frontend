import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const viewAllAddresses = async (addressId: number) => {
  try {
    const response = await axios.get(`/customers/addresses/customer/${addressId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
