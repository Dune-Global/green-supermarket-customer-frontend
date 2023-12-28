import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const newsletter = async (email: String) => {
  try {
    const response = await axios.post("/news-letter/add-email", {
      email: email,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
