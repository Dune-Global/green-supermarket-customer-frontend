import React from "react";
import { Button, Container } from "@/components/common";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
        <div>
          <div>
            <Image
              src={
                "https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/ca01157c-1d68-4c89-88dd-32b4961d2527.png"
              }
              alt={"404"}
              width={300}
              height={10}
              quality={100}
              priority
            />
          </div>
          <div className="pt-12">
            <Link href="/">
              <Button size="lg" className="w-full">
                <ArrowLeftIcon className="pr-2 h-4" />
                Back to home
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={
              "https://greensupermarket-egadf4bnddgcene0.z02.azurefd.net/greensupermarketblogcontainer/4364fe53-5951-4937-9d36-a97db3086dff.png"
            }
            alt={"404"}
            width={1000}
            height={10}
            quality={100}
            priority
          />
        </div>
      </div>
    </Container>
  );
}
