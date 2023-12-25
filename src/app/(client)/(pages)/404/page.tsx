import React from "react";
import { Button, Container } from "@/components/common";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";

export default function Error() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
      <div>
        <div>
          <Image
            src={"/assets/images/404/404-left.png"}
            alt={"404"}
            width={300}
            height={10}
          />
        </div>
        <div className="pt-12">
          <Button size="lg" className="w-full">
            <ArrowLeftIcon className="pr-2 h-4" />
            Back to home
          </Button>
        </div>
      </div>
      <div>
      <Image
            src={"/assets/images/404/404-right.png"}
            alt={"404"}
            width={1000}
            height={10}
          />
      </div>
      </div>
    </Container>
  );
}
