import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/common";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

interface StarRatingProps {
    fillColor?: string;
    bgColor?: string;
    roundOff?: boolean;
    noOfStars?: number;
    size?: number;
    orderItemId: number;
}

const OrderRatingStars: React.FC<StarRatingProps> = ({
    fillColor = "#FF8A00",
    bgColor = "#e3e3e3",
    roundOff = false,
    noOfStars = 5,
    size = 24,
    orderItemId
}) => {
    const [selectedStars, setSelectedStars] = useState<number>(0);

    const handleStarClick = (index: number) => {
        setSelectedStars(index + 2);
    };

    const handleButtonClick = async () => {
        try {

            const numberOfStars = selectedStars - 1;
            const review = ""
            const reqData = { orderItemId, review, rating: numberOfStars }

            const res = await axios.post("/rating/new", reqData)
            console.log(res)

        } catch (error) {
            console.log("Error: ", error)
        }


    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex w-1/4 justify-between">
                {Array.from({ length: noOfStars }, (_, index) => {
                    let fillPercentage = 0;

                    if (roundOff) {
                        if (index < selectedStars) {
                            fillPercentage = 100;
                        }
                    } else {
                        if (index < selectedStars - 1) {
                            fillPercentage = 100;
                        }
                    }

                    return (
                        <div className="flex" key={index}>
                            <div
                                key={index}
                                className="relative"
                                onClick={() => handleStarClick(index)}
                                style={{ cursor: "pointer" }}
                            >
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
                        </div>
                    );
                })}
            </div>
            <Button variant={"outline"} onClick={handleButtonClick}>Submit</Button>
        </div>
    );
};

export default OrderRatingStars;
