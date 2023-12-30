"use client";

import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { ProductList } from "@/data"; // Import your product data file
import { IProductDetailsData } from "@/types";
import { getAllProducts } from "@/helpers";
import { getAllProductsWithSub } from "@/helpers/getAllProductsWithSub";

interface RangeType {
  min: number;
  max: number;
}

interface PriceRangeSliderProps {
  onPriceRangeChange: (range: RangeType) => void;
  selectedCategoryId: number; // Pass the selected category ID
  selectedSubCategory: string | null; // Pass the selected subcategory
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  onPriceRangeChange,
  selectedCategoryId,
  selectedSubCategory,
}) => {
  const [allProducts, setAllProducts] = useState<IProductDetailsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: IProductDetailsData[] =
          await getAllProductsWithSub();
        setAllProducts(fetchedCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(allProducts);
    }
  }, [allProducts, loading]);

  const [maxCurrentPrice, setMaxCurrentPrice] = useState<number>(50000);
  const [range, setRange] = useState<RangeType>({
    min: 0,
    max: maxCurrentPrice,
  });

  useEffect(() => {
    const updateMaxCurrentPrice = () => {
      const filteredProducts = allProducts.filter(
        (product) =>
          (!selectedSubCategory ||
            product.l1Category.subCatOneName === selectedSubCategory) &&
          product.mainCategory.mainCategoryId === selectedCategoryId
      );

      const newMaxCurrentPrice = Math.max(
        ...filteredProducts.map((product) => product.currentPrice),
        0
      );

      setMaxCurrentPrice(newMaxCurrentPrice);
    };

    // Update maxCurrentPrice after the initial render
    updateMaxCurrentPrice();
  }, [allProducts, selectedCategoryId, selectedSubCategory]);

  const handlePriceRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setRange({ min: value[0], max: value[1] });
      onPriceRangeChange({ min: value[0], max: value[1] });
    } else {
      setRange({ min: 0, max: value });
      onPriceRangeChange({ min: 0, max: value });
    }
  };

  console.log(selectedCategoryId, selectedSubCategory);

  return (
    <div className="flex flex-col gap-2 px-3 mt-6">
      <span className="font-medium text-lg">Price</span>
      <Slider
        range
        min={0}
        max={maxCurrentPrice} // Use the dynamic maxCurrentPrice
        defaultValue={[0, maxCurrentPrice]}
        handleStyle={[
          { borderColor: "#00B207", borderWidth: 3 },
          { borderColor: "#00B207", borderWidth: 3 },
        ]}
        trackStyle={[{ backgroundColor: "#00B207" }]}
        onChange={handlePriceRangeChange}
      />
      <div>
        <span className="text-sm">
          Price:{" "}
          <span className="font-medium">
            Rs. {range.min} - {range.max}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Slider from "rc-slider";
// // import "rc-slider/assets/index.css";
// // import { ProductList } from "@/data"; // Import your product data file

// // interface RangeType {
// //   min: number;
// //   max: number;
// // }

// // interface PriceRangeSliderProps {
// //   onPriceRangeChange: (range: RangeType) => void;
// //   selectedCategoryId: number; // Pass the selected category ID
// //   selectedSubCategory: string | null; // Pass the selected subcategory
// // }

// // const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
// //   onPriceRangeChange,
// //   selectedCategoryId,
// //   selectedSubCategory,
// // }) => {
// //   const [range, setRange] = useState<RangeType>({ min: 0, max: 50000 });
// //   const [maxCurrentPrice, setMaxCurrentPrice] = useState<number>(50000);

// //   useEffect(() => {
// //     // Update maxCurrentPrice whenever the category or subcategory is changed
// //     const filteredProducts = ProductList.filter(
// //       (product) =>
// //         (!selectedSubCategory ||
// //           product.l1Category.subCatOneName === selectedSubCategory) &&
// //         product.mainCategory.mainCategoryId === selectedCategoryId
// //     );

// //     const newMaxCurrentPrice = Math.max(
// //       ...filteredProducts.map((product) => product.currentPrice),
// //       0
// //     );

// //     setMaxCurrentPrice(newMaxCurrentPrice);
// //   }, [selectedCategoryId, selectedSubCategory]);

// //   const handlePriceRangeChange = (value: number | number[]) => {
// //     if (Array.isArray(value)) {
// //       setRange({ min: value[0], max: value[1] });
// //       onPriceRangeChange({ min: value[0], max: value[1] });
// //     } else {
// //       setRange({ min: 0, max: value });
// //       onPriceRangeChange({ min: 0, max: value });
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col gap-2 px-3 mt-6">
// //       <span className="font-medium text-lg">Price</span>
// //       <Slider
// //         range
// //         min={0}
// //         max={maxCurrentPrice} // Use the dynamic maxCurrentPrice
// //         defaultValue={[0, maxCurrentPrice]}
// //         handleStyle={[
// //           { borderColor: "#00B207", borderWidth: 3 },
// //           { borderColor: "#00B207", borderWidth: 3 },
// //         ]}
// //         trackStyle={[{ backgroundColor: "#00B207" }]}
// //         onChange={handlePriceRangeChange}
// //       />
// //       <div>
// //         <span className="text-sm">
// //           Price:{" "}
// //           <span className="font-medium">
// //             Rs. {range.min} - {range.max}
// //           </span>
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// export default PriceRangeSlider;

// "use client";

// import React, { useState } from "react";
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";

// interface RangeType {
//   min: number;
//   max: number;
// }

// interface PriceRangeSliderProps {
//   onPriceRangeChange: (range: RangeType) => void;
// }

// const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
//   onPriceRangeChange,
// }) => {
//   const [range, setRange] = useState<RangeType>({ min: 0, max: 50000 });

//   const handlePriceRangeChange = (value: number | number[]) => {
//     if (Array.isArray(value)) {
//       setRange({ min: value[0], max: value[1] });
//       onPriceRangeChange({ min: value[0], max: value[1] });
//     } else {
//       setRange({ min: 0, max: value });
//       onPriceRangeChange({ min: 0, max: value });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-2 px-3 mt-6">
//       <span className="font-medium text-lg">Price</span>
//       <Slider
//         range
//         min={0}
//         max={50000}
//         defaultValue={[0, 50000]}
//         handleStyle={[
//           { borderColor: "#00B207", borderWidth: 3 },
//           { borderColor: "#00B207", borderWidth: 3 },
//         ]}
//         trackStyle={[{ backgroundColor: "#00B207" }]}
//         onChange={handlePriceRangeChange}
//       />
//       <div>
//         <span className="text-sm">
//           Price:{" "}
//           <span className="font-medium">
//             Rs. {range.min} - {range.max}
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default PriceRangeSlider;
