"use client";
import { AuthLoader, Button, ClientOnly, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";

import React, { useEffect, useState } from "react";
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

import { decodeToken, getAllAddresses, deleteAddress } from "@/helpers";
import { ICustomerAddressData } from "@/types";
import { set } from "react-hook-form";

export default function AddressBookPage() {
  const router = useRouter();
  //

  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState<any>(null);
  const [tokenValid, setTokenValid] = useState(false);
  const [addressId, setAddressId] = useState<any>(null);
  const [addId, setAddId] = useState<any>(null);

  useEffect(() => {
    const fetchAddressData = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        router.push("/");
        return;
      }

      try {
        const { status, data } = await decodeToken(jwtToken);
        if (status === 200) {
          setTokenValid(true);

          console.log("Token Decoded:", data.id);

          // Fetch customer details using getAllAddresses
          const customerId = data.id;
          setAddId(customerId);
          try {
            const fetchedAddresses = await getAllAddresses(customerId);
            setAddresses(fetchedAddresses);

            setLoading(false);
            console.log(fetchedAddresses);
          } catch (error) {
            console.error("Failed to fetch address data", error);
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/");
      }
    };

    fetchAddressData();
  }, [router, setAddresses]);

  const handleDeleteClick = async (addressId: any) => {
    const jwtToken = localStorage.getItem("jwtToken");

    console.log("JWT Token:", jwtToken);

    if (!jwtToken) {
      console.log("Token is missing. Redirecting to login page.");
      router.push("/");
      return;
    }
    try {
      const { status, data } = await decodeToken(jwtToken);
      console.log("Token Decoded:", data);

      if (status === 200) {
        setTokenValid(true);

        console.log("Deleting address with id:", addressId);

        const res = await deleteAddress(addressId, jwtToken);
        console.log("Delete request response:", res);

        console.log("Delete request successful");

        setAddresses(
          addresses.filter((address: any) => address.id !== addressId)
        );
      } else {
        console.log("Token is invalid. Redirecting to login page.");
        router.push("/");
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const checkCustomer = async () => {
    console.log("Checking customer", addId);
  };

  if (!tokenValid) {
    return <AuthLoader />;
  }

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
                      <Button onClick={checkCustomer}>Check customer</Button>
                      Address Details
                    </DialogHeader>
                    <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
                    <div>
                      <AddAddress customerId={addId} />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses &&
                addresses.map((address: any) => (
                  <div
                    key={address.id}
                    className="border border-gray-50 rounded-lg p-4"
                  >
                    <div className="flex gap-4 justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="uppercase text-sm font-medium text-gray-200 pb-2">
                          {address.locationName} address
                        </div>
                        <div className="font-medium text-base">
                          {address.firstName} {address.lastName}
                        </div>
                        <div className="text-sm text-gray-200">
                          {address.address}, {address.city}, {address.province}{" "}
                          {address.postalCode}
                        </div>
                        <div className="font-medium text-sm">
                          {address.email}
                        </div>
                        <div className="font-medium text-sm">
                          {address.phoneNumber}
                        </div>
                        <div className="pt-4">
                          <div></div>
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
                                onClick={async () =>
                                  await handleDeleteClick(address.id)
                                }
                                data-address-id={address.id}
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
