import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const registerCustomer = async (
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  phoneNumber: String
) => {
  try {
    const response = await axios.post("/customers/register", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const decodeToken = async (token: string) => {
  try {
    const response = await axios.get("/customers/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
