import { IL1SubCategoryResponse } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

export const getL1SubCategories = async (categoryId: number): Promise<any> => {
  try {
    const res = await axios.get(`/l1-category/main-category/${categoryId}`);

    const apiResponse: IL1SubCategoryResponse[] = res.data;

    return apiResponse;
  } catch (error) {
    console.log("Error fetching L1 subcategories:", error);
  }
};
