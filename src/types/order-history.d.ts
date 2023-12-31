export interface IOrderHistoryData {
  orderId: number;
  customerId: number;
  orderDate: string;
  shippingFee: number;
  numberOfItems: number;
  totalAmount: number;
  orderStatus: string;
  paymentMode: string;
  paymentStatus: string;
  billingAddressId: number;
  shippingAddressId: number;
}

export type OrderHistoryTable = {
  orderId: string;
  date: string;
  total: string;
  status: string;
};
