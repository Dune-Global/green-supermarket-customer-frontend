"use client";

import React, { useEffect, useState } from "react";
import { decodeToken, orderSuccess, sendMail } from "@/helpers";
import { useRouter } from "next/navigation";
import {
  AuthLoader,
  Button,
  ButtonVariants,
  Container,
} from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { ToastAction } from "@/components/common/ui/toast/toast";
import { useToast } from "@/components/common/ui/toast/use-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const OrderSuccess = ({ params }: { params: { id: any } }) => {
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const random = Math.floor(Math.random() * 1000000000);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        router.push("/");
        return;
      }

      try {
        const res = await decodeToken(jwtToken);
        // console.log(res);
        setLoading(false);
        setEmail(res.data.email);
        if (res.status === 200) {
          setTokenValid(true);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/");
      }
    };

    checkTokenValidity();
  }, [router]);

  const backToHome = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 800);
  };

  const { toast } = useToast();

  useEffect(() => {
    const sendOrderSuccessEmail = async () => {
      try {
        const res = await orderSuccess(49);
        console.warn(res);
        await sendMail(
          email,
          email,
          `Order #${params.id} Success!`,
          `Your order has been placed successfully! Please check your order history for more details. If you have any questions, please contact us. Thank you!. Order Reciept: ${BASE_URL}/order-history/${random}/${params.id}`
        );
      } catch (error) {
        console.error("Error processing order or sending mail:", error);
      }
    };

    if (email !== "") {
      sendOrderSuccessEmail();
      toast({
        variant: "default",
        title: "Email sent!",
        description: "We have sent you an email with your order details.",
        action: (
          <ToastAction onClick={backToHome} altText="Try again">
            Go to home
          </ToastAction>
        ),
      });
    }
  }, [email]);

  useEffect(() => {
    if (!loading) {
      //   console.log(email);
    }
  }, [email, loading]);

  if (!tokenValid) {
    return <AuthLoader />;
  }

  return (
    <Container>
      <div className="max-w[1000px] mx-auto flex flex-col justify-center items-center gap-5 mt-10">
        <div>
          <Image
            src="https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/6992bd9a-900f-4ccb-9e22-4007bbe5f4a0.jpg"
            width={400}
            quality={100}
            height={400}
            alt="empty shopping cart hippo"
          />
        </div>
        <div>
          <h1 className="text-xl text-gray-200">Order Number #{params.id}</h1>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-bold">Thank you for your order!</h1>
          <p className="text-xl">
            We will send you a confirmation email shortly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button variant={"default"} arrow onClick={() => router.replace("/")}>
            Continue Shopping
          </Button>
          <Link href={`/order-history/${random}/${params.id}`}>
            <Button variant={"ghost"}>View Order</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderSuccess;
