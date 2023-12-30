type FormFieldName =
  | "addressName"
  | "firstName"
  | "lastName"
  | "streetAddress"
  | "province"
  | "city"
  | "zipcode"
  | "email"
  | "contactNumber";

  export type Address = {
    addressName: string;
    firstName: string;
    lastName: string;
    streetAddress: string;
    province: string;
    city: string;
    zipcode: string;
    email: string;
    contactNumber: string;
  };
  
  export type AddressResponse = {
    addressName: string;
    firstName: string;
    lastName: string;
    streetAddress: string;
    province: string;
    city: string;
    zipcode: string;
    email: string;
    contactNumber: string;
  };
