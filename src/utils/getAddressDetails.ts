
import { Address, AddressResponse } from "@/types/add-address-form";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

export async function getAddressDetails(): Promise<Address[]> {
  const { data } = await axios.get("/address-book");

  const newData = data.map((item: AddressResponse) => ({
    addressName: item.addressName,
    name: `${item.firstName} ${item.lastName}`,
    address: `${item.streetAddress}, ${item.city}, ${item.province}, ${item.zipcode}`,
    email: item.email,
    contactNumber: item.contactNumber,
  }));

  console.log(newData);

  return newData;
}
