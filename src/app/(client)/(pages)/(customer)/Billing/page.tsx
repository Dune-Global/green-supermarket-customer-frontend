"use client";
import React from "react";
import { CitySelect, ProvinceSelect } from "./selectcomponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./form/accordion";
import { Button, ClientOnly, Container } from "@/components/common";
import { Checkbox } from "./form/checkbox";
import { Input } from "@/components/common/ui/input";
import shippinginfo from "./shippinginfo";
import { Textarea } from "./form/textarea";
import { RadioGroup, RadioGroupItem } from "./form/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "./form/select";
import Image from "next/image";
import { ProductCard } from "@/components/common/products";
import { ProductList } from "@/data";
import { Summary } from "./summary";
import { formatPrice } from "@/utils/shad-utils";
import productList from "@/data/products/product-details";

type Props = {};
const Billing = (props: Props) => {
  return (
    <ClientOnly>
      <Container>
        <div className="flex md:flex-row flex-col gap-8 lg:my-5 my-3  ">
          <div className="w-full flex flex-col ">
            <div className=" flex flex-col  gap-4">
              <div className="font-medium text-lg text-center lg:text-left">
                Billing Information{" "}
              </div>
              <div>
                <div>Select from saved addresses</div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a address" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-gray-0 z-50">
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* divider */}
              <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
              {/* inputs */}
              <div className="flex flex-col  gap-4">
                <div className="flex flex-row gap-4">
                  {" "}
                  {/* input name */}
                  <div className="flex-1  ">
                    <div>First name</div>
                    <div className="pt-2">
                    <Input
                      className=" rounded-md border-gray-200/40"
                      placeholder="Your first name"
                    />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div>Last name</div>
                    <div className="pt-2">
                    <Input
                      className="rounded-md border-gray-200/40"
                      placeholder="Your last name"
                    />
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  {/* input street */}
                  <div>Street Address</div>
                  <div className="pt-2">
                  <Input
                    className="rounded-md border-gray-200/40"
                    placeholder="Your address"
                  /></div>
                </div>
                <div className="flex flex-row lg:gap-5 gap-2">
                  <div className="flex-1">
                    <div>Province/state</div>
                    <div className=" pt-2"><ProvinceSelect /></div>
                  </div>
                  <div className="flex-1">
                    <div>City</div>
                    <div className="pt-2"><CitySelect /></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex">Zip Code</div>
                    <div className="pt-2">
                    <Input
                      className="rounded-md border-gray-200/40"
                      placeholder="Zip Code"
                    /></div>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  {" "}
                  {/* input name */}
                  <div className="flex-1 ">
                    <div>Email</div>
                    <div className="pt-2">
                    <Input
                      className=" rounded-md border-gray-200/40"
                      placeholder="Email address"
                    /></div>
                  </div>
                  <div className="flex-1">
                    <div>Phone</div>
                    <div className="pt-2">
                    <Input
                      className="rounded-md border-gray-200/40"
                      placeholder="Phone number"
                    /></div>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Click part */}
                  <Accordion
                    type="single"
                    collapsible
                    className=" items-center w-full bg-gray-0 "
                  >
                    <AccordionItem value="item-1">
                      <div className="flex items-center gap-1 ">
                        <AccordionTrigger>
                          <Checkbox  />
                        </AccordionTrigger>
                        <label
                          htmlFor="terms"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Ship to a different address.
                        </label>
                      </div>
                      <AccordionContent>{shippinginfo()}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                {/* divider */}
                <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <div className="font-medium text-lg">Additional Info</div>
                  <div className="text-sm">Order Notes (Optional)</div>
                </div>
                <div className="pt-2">
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    className="resize-none focus-visible:outline-green-400/40 focus-visible:border-none"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Checkbox />
                <label
                  htmlFor="terms"
                  className=" text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save details for next time.
                </label>
              </div>
            </div>
          </div>
          {/* order summury */}
          <div className="flex flex-col w-ful gap-3 border rounded-lg p-5 border-gray-200/40 ">
            <div className="font-medium">Order Summary</div>
            <div className="flex flex-col gap-3">
              <div className="flex w-full flex-col  overflow-y-auto max-h-[calc(100vh-230px)] md:max-h-[calc(100vh-250px)]">
                {/* TODO: Cart logic */}
                {productList.map((product, index) => (
                  <div key={index}>
                    <Summary
                      imageSrc={product.productImage}
                      name={product.productName}
                      price={product.currentPrice}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex text-sm">
                  <span className=" flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex text-sm">
                  <span className="flex-1">Total</span>
                  {/* <span>{formatPrice(total)}</span> */}
                </div>
              </div>
              {/* Radio Group */}
              <div className="flex flex-col gap-3">
                <div>Payment Method</div>
                <div>
                  <RadioGroup defaultValue="comfortable" className="text-sm">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <label htmlFor="r1">Cash on Delivery</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <label htmlFor="r2">Credit / Debit Card</label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="">
                <Button className="w-full">Place Order</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Billing;
