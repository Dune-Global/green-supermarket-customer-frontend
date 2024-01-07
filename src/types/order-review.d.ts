interface OrderItem {
  orderItemId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  discount: number;
  totalAmount: number;
}

export type ProductDetail = {
  orderItemId: number;
  productName: string;
  productImage: string;
  originalPrice: string;
  quantity: number;
  discount: number;
  subtotal: string;
};

interface Address {
  firstName: string;
  lastName: string;
  address: string;
  province: string;
  city: string;
  postalCode: string;
  email: string;
  phoneNumber: string;
}

export interface ApiResponse {
  billingAddress: Address;
  shippingAddress: Address;
  orderItems: OrderItem[];
  note: null | string;
  orderStatus: string;
}
