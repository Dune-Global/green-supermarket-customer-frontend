"use client";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "./form/select";

export const ProvinceSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full z-20">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-gray-0 z-50">
          <SelectLabel>Province</SelectLabel>
          <SelectItem value="west">Western Province </SelectItem>
          <SelectItem value="east">Eastern Province</SelectItem>
          <SelectItem value="north">Central Province </SelectItem>
          <SelectItem value="south">Northern Province </SelectItem>
          <SelectItem value="central">Southern Province </SelectItem>
          <SelectItem value="south">North Western Province </SelectItem>
          <SelectItem value="south">North Central Province </SelectItem>
          <SelectItem value="south">Uva Province </SelectItem>
          <SelectItem value="south">Sabaragamuwa Province </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const CitySelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full ">
        <SelectValue placeholder="Select " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="bg-gray-0 z-50">
          <SelectLabel>City</SelectLabel>
          <SelectItem value="apple">Colombo</SelectItem>
          <SelectItem value="banana">Gampaha</SelectItem>
          <SelectItem value="blueberry">Sri Jayewardenepura Kotte</SelectItem>
          <SelectItem value="grapes">Trincomalee</SelectItem>
          <SelectItem value="pineapple">Galle </SelectItem>
          <SelectItem value="grapes">Matara</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
