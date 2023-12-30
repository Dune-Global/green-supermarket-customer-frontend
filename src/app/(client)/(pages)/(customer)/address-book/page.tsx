"use client";
import { Button, ClientOnly, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";

import React, { useState } from "react";
import { Trash2, Pencil, PlusIcon } from "lucide-react";
import { AddressDetails } from "@/data/address-book";
import SideMenuMobile from "@/components/common/layout/side-menu-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/common/ui/dialog";
import { AddAddress } from "./add-address/add-address";
import EditAddress from "./edit-address/edit-address";

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
            <div className="w-full border border-gray-50 rounded-lg px-4">
              <div className="flex items-center justify-between py-2">
                <div className="font-medium py-4 text-lg">Address Settings</div>
                <Dialog>
                  <DialogTrigger>
                    <Button size="sm" variant="outline">
                      Add address
                      <PlusIcon className="w-[12px] ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-0">
                    <DialogHeader className="text-lg font-medium">
                      Address Details
                    </DialogHeader>
                    <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
                    <div>
                      <AddAddress />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AddressDetails.map((card) => (
                <div
                  key={card.id}
                  className="border border-gray-50 rounded-lg p-4"
                >
                  <div className="flex gap-4 justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="uppercase text-sm font-medium text-gray-200 pb-2">
                        {card.addressName} address
                      </div>
                      <div className="font-medium text-base">
                        {card.firstName} {card.lastName}
                      </div>
                      <div className="text-sm text-gray-200">
                        {card.streetAddress}, {card.city}, {card.province}{" "}
                        {card.zipcode}
                      </div>
                      <div className="font-medium text-sm">{card.email}</div>
                      <div className="font-medium text-sm">
                        {card.contactNumber}
                      </div>
                      <div className="pt-4">
                        <div>
                          <EditAddress param={"params"} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button onClick={handleDeleteAddress}>
                        <Trash2 className="w-[20px] text-gray-400 hover:text-red-400/80 fill-gray-" />
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
