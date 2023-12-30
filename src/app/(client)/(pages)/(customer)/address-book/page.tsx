"use client";
import { Button, ClientOnly, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";

import React, { useState } from "react";
import { Trash2, PlusIcon } from "lucide-react";
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
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/common/layout/alert-dialog";

export default function AddressBookPage() {
  const router = useRouter();
  const removeAddress = () => {
    router.push("/address-book");
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
                    <div className="flex items-start justify-end pt-1 pr-1">
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <Trash2
                            size={20}
                            strokeWidth={2}
                            className="text-gray-200 hover:text-red-400/80"
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you sure you want to delete?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This address will be removed from your saved
                              addresses. application.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="border-red-400 text-red-400 hover:border-red-400/80 hover:text-red-400/80">
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={removeAddress}
                              className="bg-red-400 hover:bg-red-400/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
}
