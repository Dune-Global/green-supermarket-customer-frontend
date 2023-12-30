import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const createOrder = async (
  customerId: number,
  shippingFee: number,
  discount: number,
  paymentMode: string,
  billingAddressId: number,
  shippingAddressId: number
) => {
  try {
    const response = await axios.post("/order/create", {
      customerId: customerId,
      shippingFee: shippingFee,
      discount: discount,
      paymentMode: paymentMode,
      billingAddressId: billingAddressId,
      shippingAddressId: shippingAddressId,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
