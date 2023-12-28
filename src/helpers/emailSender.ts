import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const sendMail = async (
  to: string,
  cc: string,
  subject: string,
  body: string
) => {
  try {
    const response = await axios.post("/mail/send", {
      to: to,
      cc: cc,
      subject: subject,
      body: body,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
