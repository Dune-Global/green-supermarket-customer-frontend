'use client';

import React, { useEffect, useState } from "react";
import { Button, Container } from "@/components/common";
import { PhoneCallIcon, MapPinnedIcon, Mail } from "lucide-react";
import { address, phone } from "@/constants";
import Link from "next/link";

import { Input } from "../ui/input";
import { ToastAction } from "../ui/toast/toast";
import { useToast } from "../ui/toast/use-toast";
import { newsletter, sendMail } from "@/helpers";

type Props = {};

const UpperFooter = (props: Props) => {
  const style = {
    icon: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-400/10 text-green-400  bg-opacity-20 ",
    border:
      "border-green-400/20 px-5 py-5 flex flex-col rounded-lg border-[1.5px]",
  };

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const {toast} = useToast();
  
  const handleSubscribe = async(e: React.FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      setLoading(true);
      const res = await newsletter(email);
      await sendMail(email, email, "Thank you for subscribing to our newsletter", "Thank you for subscribing to our newsletter");
      toast({
        variant: "default",
        title: "Subscribed!",
        description: "You have successfully subscribed to our newsletter.",
      });
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Your email is already subscribed.",
      });
      setLoading(false);
    }
  };
  

  return (
    <footer>
      <Container>
        {/* Address */}
        <div className=" flex flex-col md:flex-row gap-8 text-center md:text-left ">
          <div
            className={`${style.border} md:w-80  gap-y-2 items-center md:items-start `}
          >
            <div className={style.icon}>
              <MapPinnedIcon size={17} />
            </div>
            <div className="uppercase text-sm font-medium ">our location</div>
            <div className="text-sm">{address}</div>
          </div>

          {/* PhoneNumber */}
          <div
            className={`${style.border} md:w-80  gap-y-2 text-center md:text-left items-center md:items-start `}
          >
            <div className={style.icon}>
              <PhoneCallIcon size={17} />
            </div>
            <div className="uppercase text-sm font-medium ">call us 24/7</div>
            <Link href={`tel:${phone}`}>
              <div className="text-lg text-green-400 font-normal">{phone}</div>
            </Link>
          </div>

          {/* Email */}
          <div
            className={`${style.border} flex-grow gap-2 text-center md:text-left `}
          >
            <div className="items-center md:items-start">
              <div className={style.icon}>
                <Mail size={17} />
              </div> 
            </div>
            <div className="uppercase text-sm font-medium gap-10 ">
              subscribe our newsletter
            </div>
            <form onSubmit={handleSubscribe}>
            <div className="flex-col flex gap-2 md:gap-0 md:flex-row md:relative mt-5 md:mt-0">
              <Input
                type="email"
                className="md:pr-32 font-light"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Button type="submit" className="md:absolute right-0" loading={loading}>
                Subscribe
              </Button>
            </div>
          </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default UpperFooter;
