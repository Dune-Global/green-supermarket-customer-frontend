import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;

axios.defaults.baseURL = BASE_URL;

//get all addresses
export const getAllAddresses = async (customerId: number) => {
  try {
    const response = await axios.get(
      `/customers/addresses/customer/${customerId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//get address by id
export const getAddress = async (addressId: number) => {
  try {
    const response = await axios.get(`/customers/addresses/${addressId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//delete address
export const deleteAddress = async (addressId: number, jwtToken: string) => {
  try {
    const response = await axios.delete(
      `/customers/addresses/delete-address/${addressId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in deleteAddress:", error);
    throw error;
  }
};

//add address
export const addAddress = async (
  locationName: string,
  firstName: string,
  lastName: string,
  address: string,
  postalCode: string,
  city: string,
  province: string,
  email: string,
  phoneNumber: string,
  customerId: number
) => {
  try {
    const response = await axios.post(`/customers/addresses`, {
      locationName: locationName,
      firstName: firstName,
      lastName: lastName,
      address: address,
      postalCode: postalCode,
      city: city,
      province: province,
      email: email,
      phoneNumber: phoneNumber,
      customerId: customerId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//update address
export const updateAddress = async (
  addressId: number,
  locationName: string,
  firstName: string,
  lastName: string,
  address: string,
  postalCode: string,
  city: string,
  province: string,
  email: string,
  phoneNumber: string
) => {
  try {
    const response = await axios.put(`/customers/addresses/${addressId}`, {
      addressId: addressId,
      locationName: locationName,
      firstName: firstName,
      lastName: lastName,
      address: address,
      postalCode: postalCode,
      city: city,
      province: province,
      email: email,
      phoneNumber: phoneNumber,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
