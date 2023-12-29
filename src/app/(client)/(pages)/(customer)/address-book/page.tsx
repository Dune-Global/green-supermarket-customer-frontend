"use client";
import { Button, ClientOnly, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";
import { Input } from "@/components/common/ui/input";

import React, { useState } from "react";
import { CitySelect, ProvinceSelect } from "../Billing/selectcomponent";
import { Trash2, Pencil } from "lucide-react";
import { AddressDetails } from "@/data/address-book";
import SideMenuMobile from "@/components/common/layout/side-menu-mobile";

export default function AddressBookPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteAddress = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <ClientOnly>
      <Container>
        <div className="flex pt-9 gap-5">
          <div className="hidden lg:block">
            <SideMenu />
          </div>
          <div className="flex flex-col gap-4 w-full">
          <div className="block lg:hidden">
            <SideMenuMobile />
          </div>
            <div className="gap-8 w-full border border-gray-50 rounded-lg pt-4 px-4">
              <div className="font-medium py-4 text-lg">Address Settings</div>
              <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
              <div className="flex flex-col gap-4 py-6">
                <div>
                  <div className="">Address name</div>
                  <div className="pt-2">
                    <Input
                      className=" rounded-md border-gray-200/40"
                      placeholder="Your first name"
                      defaultValue="Home address"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  {" "}
                  {/* input name */}
                  <div className="flex-1 ">
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
                <div className="flex flex-col md:flex-row lg:gap-5 gap-2">
                  <div className="flex-1">
                    <div>Province/state</div>
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
                <div className="flex flex-col md:flex-row gap-4">
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
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AddressDetails.map((card) => (
                <div key={card.id} className="border border-gray-50 rounded-lg p-4">
                  <div className="flex gap-4 justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="uppercase text-sm font-medium text-gray-200 pb-2">{card.addressName} address</div>
                      <div className="font-medium text-base">{card.firstName} {card.lastName}</div>
                      <div className="text-sm text-gray-200">
                        {card.streetAddress}, {card.city}, {card.province} {card.zipcode}
                      </div>
                      <div className="font-medium text-sm">{card.email}</div>
                      <div className="font-medium text-sm">
                        {card.contactNumber}
                      </div>
                      <div className="pt-4">
                        <Button variant="ghost" size="sm">
                          Edit Address
                          <Pencil className="w-[12px] ml-2" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <button onClick={handleDeleteAddress}>
                        <Trash2
                          className="w-[20px] text-gray-400 hover:text-red-400/80 fill-gray-"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showConfirmation && (
          <div className=" fixed inset-0 flex items-center justify-center bg-gray-0 z-40">
            <div className="bg-white p-4 border border-gray-50 rounded-lg ">
              <div className="text-center ">
                <div className="text-lg pb-5">Delete Address</div>
                <p>Are you sure you want to delete this address?</p>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={handleConfirmDelete}
                  className="bg-red-400 hover:bg-red-600"
                >
                  Delete
                </Button>
                <Button
                  onClick={handleCancelDelete}
                  className="ml-2 bg-gray-0 border-2 border-red-400 text-gray-200 hover:border-red-600 hover:bg-gray-0"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </ClientOnly>
  );
}
