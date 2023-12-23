export interface IProductDetails {
  id: number;
  discount?: string;
  isStock: string;
  code: string;
  name: string;
  quantity: number;
  price: number;
  per: string;
  strikedPrice?: number;
  imageSrc: string;
  link: string;
  variant?: "default" | "cart";
}
