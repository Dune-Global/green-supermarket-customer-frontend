import { IProductDetailsData } from "@/types";

const productList: IProductDetailsData[] = [
  {
    productId: 1,
    productName: "Sera Festiva Noodles 325G",
    productDescription: "Sera Festiva Noodles 325G",
    productImage: "/assets/images/products/sera-festiva-noodles-325g.png",
    measuringUnit: "Unit",
    originalPrice: 252,
    currentPrice: 176.4,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 1,
      brandName: "Sera",
    },
    mainCategory: {
      mainCategoryId: 4,
      mainCategoryName: "Grocery",
      mainCategoryDesc: "Grocery",
      imgUrl: "/assets/images/products/sera-festiva-noodles-325g.png",
    },
    l1Category: {
      subCatOneId: 4,
      subCatOneName: "Pasta and Noodles",
      subCatOneDescription: "Noodles",
      mainCategoryId: 4,
    },
    l2Category: null,
    brandName: "Sera",
    mainCategoryName: "Grocery",
    l1CategoryName: "Pasta and Noodles",
    l2CategoryName: null,
    discount: {
      id: 1,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 1,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 2,
    productName: "Dilmah Tea Bags 100nos",
    productDescription: "Dilmah Tea Bags 100nos",
    productImage: "/assets/images/products/dilmah-tea-bags-100nos.png",
    measuringUnit: "1KG",
    originalPrice: 1425,
    currentPrice: 997.5,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 1,
      brandName: "Dilmah",
    },
    mainCategory: {
      mainCategoryId: 7,
      mainCategoryName: "Beverages",
      mainCategoryDesc: "Beverages",
      imgUrl: "/assets/images/products/dilmah-tea-bags-100nos.png",
    },
    l1Category: {
      subCatOneId: 7,
      subCatOneName: "Tea",
      subCatOneDescription: "Tea",
      mainCategoryId: 7,
    },
    l2Category: null,
    brandName: "Dilmah",
    mainCategoryName: "Beverages",
    l1CategoryName: "Tea",
    l2CategoryName: null,
    discount: {
      id: 2,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 2,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 3,
    productName: "Kotmale Fresh Milk 1L",
    productDescription: "Kotmale Fresh Milk 1L",
    productImage: "/assets/images/products/kotmale-fresh-milk-1l.png",
    measuringUnit: "/Unit",
    originalPrice: 392,
    currentPrice: 274.4,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 3,
      brandName: "Kotmale",
    },
    mainCategory: {
      mainCategoryId: 5,
      mainCategoryName: "Chilled",
      mainCategoryDesc: "Chilled",
      imgUrl: "/assets/images/products/kotmale-fresh-milk-1l.png",
    },
    l1Category: {
      subCatOneId: 4,
      subCatOneName: "Milk",
      subCatOneDescription: "Milk",
      mainCategoryId: 5,
    },
    l2Category: null,
    brandName: "Kotmale",
    mainCategoryName: "Chilled",
    l1CategoryName: "Milk",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 3,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 2,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 4,
    productName: "Laojee Tea Pouch 200G",
    productDescription: "Laojee Tea Pouch 200G",
    productImage: "/assets/images/products/laojee-tea-pouch-200g.png",
    measuringUnit: "/Unit",
    originalPrice: 496,
    currentPrice: 347.2,
    stockKeepingUnits: 10,
    stockAvailableUnits: 0,
    brand: {
      brandId: 4,
      brandName: "Laojee",
    },
    mainCategory: {
      mainCategoryId: 7,
      mainCategoryName: "Beverages",
      mainCategoryDesc: "Beverages",
      imgUrl: "/assets/images/products/laojee-tea-pouch-200g.png",
    },
    l1Category: {
      subCatOneId: 7,
      subCatOneName: "Tea",
      subCatOneDescription: "Tea",
      mainCategoryId: 7,
    },
    l2Category: null,
    brandName: "Laojee",
    mainCategoryName: "Beverages",
    l1CategoryName: "Tea",
    l2CategoryName: null,
    discount: {
      id: 4,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 4,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 5,
    productName: "Surf Excel Washing Powder 1KG",
    productDescription: "Surf Excel Washing Powder 1KG",
    productImage: "/assets/images/products/surf-excel-washing-powder-1kg.png",
    measuringUnit: "/Unit",
    originalPrice: 792,
    currentPrice: 554.4,
    stockKeepingUnits: 10,
    stockAvailableUnits: 0, // Out of stock
    brand: {
      brandId: 5,
      brandName: "Surf Excel",
    },
    mainCategory: {
      mainCategoryId: 4,
      mainCategoryName: "Grocery",
      mainCategoryDesc: "Confectionery",
      imgUrl: "/assets/images/products/surf-excel-washing-powder-1kg.png",
    },
    l1Category: {
      subCatOneId: 20,
      subCatOneName: "Confectionery",
      subCatOneDescription: "Confectionery",
      mainCategoryId: 4,
    },
    l2Category: null,
    brandName: "Surf Excel",
    mainCategoryName: "Grocery",
    l1CategoryName: "Confectionery",
    l2CategoryName: null,
    discount: {
      id: 5,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 5,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 6,
    productName: "Tomatoes",
    productDescription: "Tomatoes",
    productImage: "/assets/images/products/tomatoes.png",
    measuringUnit: "/Unit",
    originalPrice: 320,
    currentPrice: 224,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 6,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 1,
      mainCategoryName: "Fresh Vegetables",
      mainCategoryDesc: "Organic",
      imgUrl: "/assets/images/products/tomatoes.png",
    },
    l1Category: {
      subCatOneId: 1,
      subCatOneName: "Organic",
      subCatOneDescription: "Organic",
      mainCategoryId: 1,
    },
    l2Category: null,
    brandName: "brand", // No brand for this product
    mainCategoryName: "Fresh Vegetables",
    l1CategoryName: "Organic",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 6,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 6,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 7,
    productName: "Chicken Salami",
    productDescription: "Chicken Salami",
    productImage: "/assets/images/products/chicken-salami.png",
    measuringUnit: "/1KG",
    originalPrice: 1465,
    currentPrice: 1025.5,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 7,
      brandName: "Casa",
    },
    mainCategory: {
      mainCategoryId: 3,
      mainCategoryName: "Meat and Seafood",
      mainCategoryDesc: "Processed",
      imgUrl: "/assets/images/products/chicken-salami.png",
    },
    l1Category: {
      subCatOneId: 3,
      subCatOneName: "Processed",
      subCatOneDescription: "Processed",
      mainCategoryId: 3,
    },
    l2Category: {
      subCatTwoId: 1,
      subCatTwoName: "Chicken",
      subCatTwoDescription: "Chicken",
      mainCategoryId: 3,
    },
    brandName: "Casa",
    mainCategoryName: "Meat and Seafood",
    l1CategoryName: "Processed",
    l2CategoryName: "Chicken",
    discount: {
      id: 7,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 7,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 8,
    productName: "Pork Mortadella",
    productDescription: "Pork Mortadella",
    productImage: "/assets/images/products/pork-mortadella.png",
    measuringUnit: "/1KG",
    originalPrice: 3480,
    currentPrice: 2436,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 8,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 3,
      mainCategoryName: "Meat and Seafood",
      mainCategoryDesc: "Processed",
      imgUrl: "/assets/images/products/pork-mortadella.png",
    },
    l1Category: {
      subCatOneId: 3,
      subCatOneName: "Processed",
      subCatOneDescription: "Processed",
      mainCategoryId: 3,
    },
    l2Category: {
      subCatTwoId: 2,
      subCatTwoName: "Pork",
      subCatTwoDescription: "Pork",
      mainCategoryId: 3,
    },
    brandName: "brand", // No brand for this product
    mainCategoryName: "Meat and Seafood",
    l1CategoryName: "Processed",
    l2CategoryName: "Pork",
    discount: {
      id: 8,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 8,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 9,
    productName: "Chicken Whole Leg",
    productDescription: "Chicken Whole Leg",
    productImage: "/assets/images/products/chicken-whole-leg.png",
    measuringUnit: "/1KG",
    originalPrice: 2310,
    currentPrice: 1617,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 9,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 3,
      mainCategoryName: "Meat and Seafood",
      mainCategoryDesc: "Fresh",
      imgUrl: "/assets/images/products/chicken-whole-leg.png",
    },
    l1Category: {
      subCatOneId: 1,
      subCatOneName: "Fresh",
      subCatOneDescription: "Fresh",
      mainCategoryId: 3,
    },
    l2Category: {
      subCatTwoId: 1,
      subCatTwoName: "Chicken",
      subCatTwoDescription: "Chicken",
      mainCategoryId: 3,
    },
    brandName: "brand", // No brand for this product
    mainCategoryName: "Meat and Seafood",
    l1CategoryName: "Fresh",
    l2CategoryName: "Chicken",
    discount: {
      id: 9,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 9,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 10,
    productName: "Beef Cubes",
    productDescription: "Beef Cubes",
    productImage: "/assets/images/products/beef-cubes.png",
    measuringUnit: "/1KG",
    originalPrice: 2500,
    currentPrice: 1750,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 10,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 3,
      mainCategoryName: "Meat and Seafood",
      mainCategoryDesc: "Fresh",
      imgUrl: "/assets/images/products/beef-cubes.png",
    },
    l1Category: {
      subCatOneId: 1,
      subCatOneName: "Fresh",
      subCatOneDescription: "Fresh",
      mainCategoryId: 3,
    },
    l2Category: {
      subCatTwoId: 3,
      subCatTwoName: "Beef",
      subCatTwoDescription: "Beef",
      mainCategoryId: 3,
    },
    brandName: "brand", // No brand for this product
    mainCategoryName: "Meat and Seafood",
    l1CategoryName: "Fresh",
    l2CategoryName: "Beef",
    discount: {
      id: 10,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 10,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 11,
    productName: "Chinese Cabbage",
    productDescription: "Chinese Cabbage",
    productImage: "/assets/images/products/chinese-cabbage.png",
    measuringUnit: "/1KG",
    originalPrice: 2710,
    currentPrice: 1897,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 11,
      brandName: "brand",
    },
    mainCategory: {
      mainCategoryId: 1,
      mainCategoryName: "Fresh Vegetables",
      mainCategoryDesc: "Fresh Vegetables",
      imgUrl: "/assets/images/products/chinese-cabbage.png",
    },
    l1Category: {
      subCatOneId: 4,
      subCatOneName: "Up Country",
      subCatOneDescription: "Up Country",
      mainCategoryId: 11,
    },
    l2Category: null,
    brandName: "brand", // No brand for this product
    mainCategoryName: "Fresh Vegetables",
    l1CategoryName: "Up Country",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 11,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 11,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 12,
    productName: "Cauliflower",
    productDescription: "Cauliflower",
    productImage: "/assets/images/products/cauliflower.png",
    measuringUnit: "/1KG",
    originalPrice: 1640,
    currentPrice: 1148,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 12,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 1,
      mainCategoryName: "Fresh Vegetables",
      mainCategoryDesc: "Fresh Vegetables",
      imgUrl: "/assets/images/products/cauliflower.png",
    },
    l1Category: {
      subCatOneId: 2,
      subCatOneName: "Low Country",
      subCatOneDescription: "Low Country",
      mainCategoryId: 1,
    },
    l2Category: null,
    brandName: "brand", // No brand for this product
    mainCategoryName: "Fresh Vegetables",
    l1CategoryName: "Low Country",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 12,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 12,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 13,
    productName: "Organic Green Beans",
    productDescription: "Organic Green Beans",
    productImage: "/assets/images/products/organic-green-beans.png",
    measuringUnit: "/1KG",
    originalPrice: 1020,
    currentPrice: 714,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 13,
      brandName: "brand",
    },
    mainCategory: {
      mainCategoryId: 1,
      mainCategoryName: "Fresh Vegetables",
      mainCategoryDesc: "Fresh Vegetables",
      imgUrl: "/assets/images/products/organic-green-beans.png",
    },
    l1Category: {
      subCatOneId: 1,
      subCatOneName: "Organic",
      subCatOneDescription: "Organic",
      mainCategoryId: 1,
    },
    l2Category: null,
    brandName: "brand", // No brand for this product
    mainCategoryName: "Fresh Vegetables",
    l1CategoryName: "Organic",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 13,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 13,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
  {
    productId: 14,
    productName: "Oganic Carrots",
    productDescription: "Oganic Carrots",
    productImage: "/assets/images/products/organic-carrot.png",
    measuringUnit: "/1KG",
    originalPrice: 1260,
    currentPrice: 882,
    stockKeepingUnits: 10,
    stockAvailableUnits: 10,
    brand: {
      brandId: 14,
      brandName: "brand", // No brand for this product
    },
    mainCategory: {
      mainCategoryId: 1,
      mainCategoryName: "Fresh Vegetables",
      mainCategoryDesc: "Organic",
      imgUrl: "/assets/images/products/organic-carrot.png",
    },
    l1Category: {
      subCatOneId: 1,
      subCatOneName: "Organic",
      subCatOneDescription: "Organic",
      mainCategoryId: 1,
    },
    l2Category: null,
    brandName: "brand", // No brand for this product
    mainCategoryName: "Fresh Vegetables",
    l1CategoryName: "Organic",
    l2CategoryName: null, // No sub-category two for this product
    discount: {
      id: 14,
      discountDescription: "30% off",
      discountRate: 30,
      discountStartDate: "2021-01-01",
      discountEndDate: "2021-01-31",
      productId: 14,
    },
    rating: {
      avgRating: 4.0,
      noOfRatings: 1,
    },
  },
];

export default productList;
