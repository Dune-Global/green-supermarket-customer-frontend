import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../common/ui/dialog'
import { Button } from "@/components/common";

import { Star } from "lucide-react";
import OrderRatingStars from './OrderRatingStars';

interface StarRatingProps {
    rating?: number;
    fillColor?: string;
    bgColor?: string;
    roundOff?: boolean;
    noOfStars?: number;
    size?: number;
}

type Props = {
    itemId: number
}

function OrderRatings({ itemId }: Props) {

    const handleRatingClick = (orderItemId: number) => {
        console.log(`Rating button pressed for orderItemId: ${orderItemId}`);
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button onClick={() => handleRatingClick(itemId)} className='pl-0' variant={"link"}>Rate</Button>
            </DialogTrigger>
            <DialogContent className='bg-gray-0'>
                <DialogHeader>
                    <DialogTitle className='font-medium'>Ratings</DialogTitle>
                </DialogHeader>
                <OrderRatingStars orderItemId={itemId} />
            </DialogContent>
        </Dialog>
    )
}

export default OrderRatings