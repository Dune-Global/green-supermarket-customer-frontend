import React from "react";
import { Button, Container } from "@/components/common";
import { PhoneCallIcon, MapPinnedIcon, Mail } from "lucide-react";
import { address, phone } from "@/constants";
import Link from "next/link";

import { Input } from "../ui/input";

type Props = {};

const UpperFooter = (props: Props) => {
  const style = {
    icon: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-400/10 text-green-400  bg-opacity-20 ",
    border: "border-green-400/20 px-5 py-5 flex flex-col rounded-lg border-[1.5px]",
  };

  return (
    <footer className="pt-10 ">
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
              <div className="text-lg text-green-400 font-normal">
                {phone}
              </div>
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
            <div className=" flex-col flex gap-2 md:gap-0 md:flex-row md:relative mt-5 md:mt-0">
              <Input
                type="email"
                className="md:pr-32 font-light"
                placeholder="Enter Your Email Address"
              />
              <Button className="md:absolute right-0  ">Subscribe</Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default UpperFooter;
