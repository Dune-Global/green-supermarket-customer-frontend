"use client";
import React from "react";
import { CitySelect, ProvinceSelect } from "./selectcomponent";
import {
  Accordion,
} from "./form/accordion";
import { Input } from "@/components/common/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "./form/select";

export default function shippinginfo() {
  return (
        <div>
          <div className=" flex flex-col gap-4">
            <div className="font-medium text-xl text-center lg:text-left pt-[24px] pb-3">
              Shipping Information{" "}
            </div>
            <div className="flex flex-col gap-2">
              <div>Select from saved addresses</div>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select address" />
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
            <div className="bg-gray-200/40 w-full h-[0.25px] my-4"></div>
            {/* inputs */}
            <div className="flex flex-col gap-6">
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
                  />
                </div>
              </div>
              <div className="flex flex-row lg:gap-5 gap-2">
                <div className="flex-1">
                  <div>Province / State</div>
                  <div className=" pt-2">
                    <ProvinceSelect />
                  </div>
                </div>
                <div className="flex-1">
                  <div>City</div>
                  <div className="pt-2">
                    <CitySelect />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex">Zip Code</div>
                  <div className="pt-2">
                    <Input
                      className="rounded-md border-gray-200/40"
                      placeholder="Zip Code"
                    />
                  </div>
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
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div>Phone</div>
                  <div className="pt-2">
                    <Input
                      className="rounded-md border-gray-200/40"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                {/* Click part */}
                <Accordion
                  type="single"
                  collapsible
                  className=" items-center w-full bg-gray-0 "
                >
                </Accordion>
              </div>
            </div>
          </div>
        </div>
  );
}
