import { OrderHistoryTable } from "@/types";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

export const getCustomerOrderHistory = async (
  param: string
): Promise<OrderHistoryTable[]> => {
  try {
    const response = await axios.get(`/order/customer/${param}`);
    const apiResponse = response.data;

    const reqData: OrderHistoryTable[] = apiResponse.map((order: any) => {
      return {
        orderId: order.orderId.toString(),
        date: new Date(order.orderDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        total: `${order.totalAmount.toFixed(2)} LKR`,
        status: order.orderStatus,
      };
    });

    return reqData;
  } catch (error) {
    console.error("Error fetching order history:", error);
    throw error;
  }
};
