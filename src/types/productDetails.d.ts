export interface IProductDetails {
  id: number;
  discount?: string;
  isStock: string;
  code: string;
  category: string;
  subCategory1: string;
  subCategory2: string;
  name: string;
  quantity: number;
  price: number;
  per: string;
  strikedPrice?: number;
  rate: number;
  imageSrc: string;
  link: string;
  variant?: "default" | "cart";
}
