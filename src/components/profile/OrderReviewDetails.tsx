import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../common/ui/dialog'
import { Button } from "@/components/common";
import { processOrder } from '@/helpers';
import { ProductDetail } from '@/types';
import OrderRatings from './OrderRatings';

type Props = {
    param: string
}

function OrderReviewDetails({ param }: Props) {
    const [productsArray, setProductsArray] = useState<Array<ProductDetail>>([]);

    const handleDetails = async () => {
        try {
            const res = await processOrder(param)
            const { productDetails } = res

            const arrayOfProductDetails = productDetails.map((item: any) => ({
                orderItemId: item.orderItemId,
                productName: item.productName,
                productImage: item.productImage,
                originalPrice: parseFloat(item.originalPrice),
                quantity: item.quantity,
                discount: item.discount,
                subtotal: parseFloat(item.subtotal),
            }));

            setProductsArray(arrayOfProductDetails)

        } catch (error) {
            console.log("Error: ", error)
        }
    }


    return (
        <Dialog>
            <DialogTrigger>
                <Button onClick={handleDetails} variant={"link"}>View Details</Button>
            </DialogTrigger>
            <DialogContent className='bg-gray-0'>
                <DialogHeader className='text-left'>
                    <DialogTitle className='font-medium'>Order Details</DialogTitle>
                </DialogHeader>
                <div className='border-t w-full p-4'>
                    <table className='w-full text-xs md:text-sm'>
                        <tr className='px-4'>
                            <th className='text-left font-medium max-w-44'>Product</th>
                            <th className='text-left font-medium'>Original Price</th>
                            <th className='text-left font-medium'>Quantity</th>
                            <th className='text-left font-medium'>Discount</th>
                            <th className='text-left font-medium'>Subtotal</th>
                            {/*<th className='text-left font-medium'>Ratings</th>*/}
                        </tr>
                        <tbody>
                            {productsArray.map((product, index) => (
                                <tr key={index} className='px-4'>
                                    <td className='text-left max-w-44'>
                                        <div className='flex items-center gap-2'>
                                            <img src={product.productImage} alt={product.productName} className='max-w-[5rem] h-[5rem]' />
                                            <div>{product.productName}</div>
                                        </div>
                                    </td>
                                    <td className='text-left'>{product.originalPrice} LKR</td>
                                    <td className='text-left'>{product.quantity}</td>
                                    <td className='text-left'>{Math.abs(product.discount)} LKR</td>
                                    <td className='text-left'>{product.subtotal} LKR</td>
                                    <td className='text-left'>
                                        <OrderRatings itemId={product.orderItemId} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default OrderReviewDetails