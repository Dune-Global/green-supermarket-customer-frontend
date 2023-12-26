"use client";
import { Input } from "@/components/common/ui/input";
import { CitySelect, ProvinceSelect } from "./selectcomponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "./form/select";

export default function shippinginfo() {
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-col gap-4 w-full">
        {/* Part 2222222 */}
        {/* divider */}
        <div className="border-b border-gray-200/40 w-full h-[0.25px] pt-4"></div>
        <div className="font-medium text-lg">Shipping Information </div>

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

        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-4">
            {" "}
            {/* input name */}
            <div className="flex-1 ">
              <div>First name</div>
              <div className="pt-2">
              <Input
                className=" rounded-md border-gray-200/40"
                placeholder="Your first name"
              /></div>
            </div>
            <div className="flex-1">
              <div>Last name</div>
              <div className="pt-2">
              <Input
                className="rounded-md border-gray-200/40"
                placeholder="Your last name"
              /></div>
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

          <div className="flex flex-row gap-5">
            <div className="flex-1">
              <div>Province/state</div>
              <div className="pt-2"><ProvinceSelect /></div>
            </div>
            <div className="flex-1">
              <div>City</div>
              <div className="pt-2"><CitySelect /></div>
            </div>
            <div className="flex-1">
              <div>Zip Code</div>
              <div className="pt-2">
              <Input
                className="rounded-md border-gray-200/40"
                placeholder="Zip Code"
              /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
