"use client";

import {
  Button,
  ClientOnly,
  Container,
  Count,
  ProductCard,
  StarRating,
} from "@/components/common";
import { Skeleton } from "@/components/common/ui/skeleton";
import { ItemLogos } from "@/data";
import { getProductById, getMainCategories, decodeToken, addToCart } from "@/helpers";
import { IProductDetailsData } from "@/types";
import { formatPrice } from "@/utils/shad-utils";
import { HomeIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "@/components/common/ui/toast/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { item: number } }) {
  const [product, setProduct] = useState<IProductDetailsData>({} as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products: IProductDetailsData = await getProductById(params.item);
        setProduct(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.item]);

  useEffect(() => {
    if (!loading) {
      console.log(product);
    }
  }, [product, loading]);

  const style = {
    path: "font-medium text-xs md:text-sm lg:text-lg text-gray-600",
  };

  const imageSkeleton = (): JSX.Element[] => {
    return Array.from({ length: 1 }).map((_, index) => (
      <div
        key={index}
        className="w-[280px] lg:w-auto border border-gray-50 rounded-lg flex flex-col items-center p-8 "
      >
        <Skeleton className="w-[200px] lg:w-full h-40 md:h-80" />
        <Skeleton
          className="text-center text-md px-40"
          style={{ width: "80%" }}
        />
      </div>
    ));
  };

  const textSkeleton = (): JSX.Element[] => {
    return Array.from({ length: 1 }).map((_, index) => (
      <div
        key={index}
        className="flex flex-col items-center space-x-1 lg:space-x-4 space-y-20 lg:space-y-10"
      >
        <div className="space-y-4">
          <Skeleton className="h-4 w-[300px] lg:w-[550px]" />
          <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          <Skeleton className=" h-4 w-[100px] lg:w-[200px]" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[300px] lg:w-[550px]" />
          <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          <Skeleton className=" h-4 w-[100px] lg:w-[200px]" />
        </div>
        <div className="space-y-4 hidden md:block">
          <Skeleton className="h-4 w-[300px] lg:w-[550px]" />
          <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          <Skeleton className=" h-4 w-[100px] lg:w-[200px]" />
        </div>
      </div>
    ));
  };

  const breadSkeleton = (): JSX.Element[] => {
    return Array.from({ length: 1 }).map((_, index) => (
      <div key={index} className="flex flex-row items-center justify-end">
        <div className="space-x-4 flex items-center">
          <Skeleton className="h-4 w-[80px] lg:w-[180px]" />
          <Skeleton className="h-4 w-[80px] lg:w-[180px]" />
        </div>
      </div>
    ));
  };

  const {toast} = useToast();
  const router = useRouter();

  const [authenticate, setAuthenticate] = useState(false);
  const [cartId, setCartId] = useState(0);
  

  
  const checkAuthentication = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (!jwtToken) {
      setAuthenticate(false);
      return;
    }
    try {
      const res: any = await decodeToken(jwtToken!);
      if (res.status === 200) {
        setAuthenticate(true);
        setCartId(res.data.cartId);
        console.log(res.data.cartId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const handleAddToCart = () => {
    if (authenticate) {
      try {
        addToCart(cartId, product.productId, count);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        console.error(error); 
      }
      toast({
      variant: "default",
      title: "Item added to cart",
      description: "Continue shopping or go to cart to complete your purchase",
    });
      return;
    }
    toast({
      variant: "destructive",
      title: "Sign in to continue!",
      description: "Sign in to add items to cart ",
      action: <ToastAction onClick={() => router.push("/sign-in")} altText="Try again">Sign In</ToastAction>,
    });
  };

  const initialCount = product.measuringUnit === "kg" ? 0.5 : 1;
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    const step = product.measuringUnit === "kg" ? 0.1 : 1;
    const newCount = count + step;
    if (product.measuringUnit === "kg" && newCount >= 0.5) {
      setCount(parseFloat(newCount.toFixed(1)));
    } else if (product.measuringUnit === "unit" && newCount >= 1) {
      setCount(Math.floor(newCount));
    }
  };

  const decrement = () => {
    const step = product.measuringUnit === "kg" ? 0.1 : 1;
    const newCount = count - step;
    if (product.measuringUnit === "kg" && newCount >= 0.5) {
      setCount(parseFloat(newCount.toFixed(1)));
    } else if (product.measuringUnit === "unit" && newCount >= 1) {
      setCount(Math.floor(newCount));
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Container>
      <div className="pt-[60px]">
        <div key={product.productId}>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-gray-600">
              <HomeIcon className="h-[14px] md:h-[20px]" />
            </div>
            <div className="text-md md:text-xl">&gt;</div>
            <div className={style.path}>Category</div>
            <div className="text-md md:text-xl">&gt;</div>
            {loading ? (
              breadSkeleton()
            ) : (
              <>
                <div className={style.path}>{product.mainCategoryName}</div>
                <div className="text-md md:text-xl">&gt;</div>
                <div className="font-medium text-xs md:text-sm lg:text-lg text-green-400">
                  {product.productName}
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col md:flex-row pt-[60px] items-center justify-center gap-16 md:gap-12 lg:gap-24">
            {loading ? (
              imageSkeleton()
            ) : (
              <div className="flex gap-4">
                <div>
                  <Image
                    src={product.productImage}
                    alt="hero1"
                    width={120}
                    height={40}
                    className="border-2 border-green-400 rounded-xl p-2"
                  />
                </div>
                <div>
                  <Image
                    src={product.productImage}
                    alt="hero1"
                    width={360}
                    height={40}
                    className="border-2 border-green-400 rounded-xl p-4"
                  />
                </div>
              </div>
            )}
            {loading ? (
              textSkeleton()
            ) : (
              <div>
                <div className="flex gap-2 flex-col md:flex-row md:gap-8 lg:gap-16">
                  <div className="text-3xl lg:text-5xl font-semibold">
                    {product.productName}
                  </div>
                  <div
                    className={`flex flex-row items-center md:min-w-[80px] justify-center text-sm md:text-sm lg:text-base rounded-lg py-2 md:py-1 lg:py-0 px-3 ${
                      product.stockAvailableUnits > 0
                        ? "text-green-600 bg-green-400/20"
                        : "text-gray-600 bg-gray-400/20"
                    }`}
                  >
                    {product.stockAvailableUnits > 0
                      ? "In Stock"
                      : "Out of Stock"}
                  </div>
                </div>
                <div className="pt-6 flex flex-row md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 text-gray-400 text-lg">
                  <div className="flex gap-2">
                    <div className="flex items-center">{product.rate}</div>
                    <div className="flex items-center">
                      <StarRating rating={product.rate} size={20} />
                    </div>
                  </div>
                </div>
                <div className="pt-10 text-2xl lg:text-4xl font-medium">
                  {formatPrice(product.currentPrice)} / {product.measuringUnit}
                </div>
                <div className="pt-10 flex items-center gap-4 w-full">
                  <div className="w-full">
                    <Button className="w-full" onClick={handleAddToCart}>
                      Add to cart
                      <ShoppingCartIcon className="pl-2 h-4" />
                    </Button>
                  </div>
                  <div className="border rounded-full py-1 px-4">
                    <div className="flex gap-2">
                      <div className="text-xl">
                        <button
                          onClick={decrement}
                          disabled={
                            (product.measuringUnit === "kg" && count === 0.5) ||
                            (product.measuringUnit === "unit" && count === 1)
                          }
                          className="hover:bg-gray-50 hover:rounded-full px-2"
                        >
                          -
                        </button>
                      </div>
                      <div className="text-lg">{count}</div>
                      <div className="text-xl">
                        <button
                          onClick={increment}
                          className="hover:bg-gray-50 hover:rounded-full px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center pt-8 gap-2">
                  <div className="text-lg">Share item :</div>
                  <div>
                    {ItemLogos.map((item) => (
                      <Link href={item.link} key={item.id}>
                        <Button
                          size="icon"
                          className="transition-all bg-gray-0 group hover:bg-green-400 mx-1"
                        >
                          <item.icon
                            strokeWidth={2}
                            className="transition-all fill-gray-600 group-hover:stroke-green-400 group-hover:fill-gray-0"
                          />
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
