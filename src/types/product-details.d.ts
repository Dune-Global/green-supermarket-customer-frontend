export interface IProductDetailsData {
  productId: number;
  productName: string;
  productDescription: string;
  productImage: string;
  measuringUnit: string;
  originalPrice?: number;
  currentPrice: number;
  stockKeepingUnits: number;
  stockAvailableUnits: number;
  brand: {
    brandId: number;
    brandName: string;
  };
  mainCategory: {
    mainCategoryId: number;
    mainCategoryName: string;
    mainCategoryDesc: string;
    imgUrl: string;
  };
  l1Category: {
    subCatOneId: number;
    subCatOneName: string;
    subCatOneDescription: string;
    mainCategoryId: number;
  };
  l2Category?: {
    subCatTwoId: number;
    subCatTwoName: string;
    subCatTwoDescription: string;
    mainCategoryId: number;
  } | null;

  brandName: string;
  mainCategoryName: string;
  l1CategoryName: string;
  l2CategoryName?: string | null;
  discount?: {
    id: number;
    discountDescription: string;
    discountRate: number;
    discountStartDate: string;
    discountEndDate: string;
    productId: number;
  } | null;
  rating: {
    avgRating: float;
    noOfRatings: number;
  };
}
