import { ISubCategoryBrandResponse } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

export const getAllBrands = async (categoryId: number): Promise<any> => {
  try {
    const res = await axios.get(`/products/brands/main/${categoryId}`);

    const apiResponse: ISubCategoryBrandResponse[] = res.data;

    return apiResponse;
  } catch (error) {
    console.log("Error fetching Category brands:", error);
  }
};
