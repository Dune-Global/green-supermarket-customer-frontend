import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating?: number;
  fillColor?: string;
  bgColor?: string;
  roundOff?: boolean;
  noOfStars?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  fillColor = "#FF8A00",
  bgColor = "#e3e3e3",
  roundOff = false,
  noOfStars = 5,
  size = 24,
}) => {
  return (
    <>
      {Array.from({ length: noOfStars }, (_, index) => {
        let fillPercentage = 0;
        const decimalPart = rating % 1;
        const integerPart = Math.floor(rating);

        if (roundOff) {
          if (index < integerPart) {
            fillPercentage = 100;
          } else if (index === integerPart) {
            if (decimalPart >= 0.8) {
              fillPercentage = 100;
            } else if (decimalPart >= 0.3 && decimalPart < 0.8) {
              fillPercentage = 50;
            }
          }
        } else {
          if (index < Math.floor(rating)) {
            fillPercentage = 100;
          } else if (index === Math.floor(rating)) {
            fillPercentage = (rating % 1) * 100;
          }
        }

        return (
          <div key={index} className="relative">
            <Star size={size} stroke="1" fill={bgColor} />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width: `${fillPercentage}%`,
              }}
            >
              <Star size={size} stroke="1" fill={fillColor} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StarRating;
