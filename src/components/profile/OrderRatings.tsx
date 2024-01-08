import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../common/ui/dialog'
import { Button } from "@/components/common";

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

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='pl-0' variant={"link"}>Rate</Button>
            </DialogTrigger>
            <DialogContent className='bg-gray-0'>
                <DialogHeader>
                    <DialogTitle className='font-medium'>Add Ratings</DialogTitle>
                </DialogHeader>
                <OrderRatingStars orderItemId={itemId} />
            </DialogContent>
        </Dialog>
    )
}

export default OrderRatings