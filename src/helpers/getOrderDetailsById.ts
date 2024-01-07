import { ApiResponse } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

export async function processOrder(orderId: string): Promise<any> {
  try {
    const response = await axios.get(`/order/order-with-items/${orderId}`);
    const apiResponse: ApiResponse = response.data;

    const reqData = {
      firstName: apiResponse.billingAddress.firstName,
      lastName: apiResponse.billingAddress.lastName,
      billingAddress: {
        firstName: apiResponse.billingAddress.firstName,
        lastName: apiResponse.billingAddress.lastName,
        address: apiResponse.billingAddress.address,
        province: apiResponse.billingAddress.province,
        city: apiResponse.billingAddress.city,
        postalCode: apiResponse.billingAddress.postalCode,
        email: apiResponse.billingAddress.email,
        phoneNumber: apiResponse.billingAddress.phoneNumber,
      },
      shippingAddress: {
        firstName: apiResponse.shippingAddress.firstName,
        lastName: apiResponse.shippingAddress.lastName,
        address: apiResponse.shippingAddress.address,
        province: apiResponse.shippingAddress.province,
        city: apiResponse.shippingAddress.city,
        postalCode: apiResponse.shippingAddress.postalCode,
        email: apiResponse.shippingAddress.email,
        phoneNumber: apiResponse.shippingAddress.phoneNumber,
      },
      productDetails: apiResponse.orderItems.map((item) => ({
        orderItemId: item.orderItemId,
        productName: item.productName,
        productImage: item.productImage,
        originalPrice: item.price,
        quantity: item.quantity,
        discount: item.discount,
        subtotal: item.totalAmount,
      })),
      orderStatus: apiResponse.orderStatus,
      note: apiResponse.note,
    };

    return reqData;
  } catch (error) {
    console.error("Error fetching order data:", error);
    throw error;
  }
}
