"use client";

// Import necessary libraries and components
import { AuthLoader, Button, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/common/ui/input";
import { User } from "lucide-react";
import CreateAccount from "./createaccount";
import { useRouter } from "next/navigation";
import { decodeToken, imageUpload } from "@/helpers";
import SideMenuMobile from "@/components/common/layout/side-menu-mobile";
import { updateCustomer } from "@/helpers";
import { getCustomerById } from "@/helpers";
import ICustomerDetailsData from "@/types/customer-details";
import { useForm } from "react-hook-form";

export default function Profile() {
  const router = useRouter();

  // State to hold token validity, customer data, and image URL
  const [tokenValid, setTokenValid] = useState(false);
  const [customerData, setCustomerData] = useState<ICustomerDetailsData | any>(
    null
  );
  const [image, setImage] = useState<string | null>(null);

  // State to hold the preview URL of the new image
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Form handling with react-hook-form
  const { register, handleSubmit, setValue, getValues } = useForm();

  // Effect to fetch customer data when the component mounts
  useEffect(() => {
    const fetchCustomerData = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        router.push("/");
        return;
      }

      try {
        const { status, data } = await decodeToken(jwtToken);
        if (status === 200) {
          setTokenValid(true);

          // Fetch customer details using getCustomerById
          const customerId = data.id;
          try {
            const customerData = await getCustomerById(customerId);
            setCustomerData(customerData);

            // Set form field values using setValue
            for (const field in customerData) {
              setValue(field, customerData[field]);
            }
          } catch (error) {
            console.error("Failed to fetch customer data", error);
          }
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/");
      }
    };

    fetchCustomerData();
  }, [router, setValue, setCustomerData]);

  // Function to handle image upload
  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      // Upload the file
      try {
        const response = await imageUpload(file);

        // Assuming the server returns the URL of the uploaded image
        const imageUrl = response.imageUrl; // Adjust this based on your server response structure

        // Log the imageUrl
        console.log("Image URL:", imageUrl);

        // Update the state with the imageUrl
        setImage(imageUrl);

        // Update the state with the imageUrl and set the preview URL
        setImage(imageUrl);
        setImagePreview(reader.result as string);

        console.log("File uploaded successfully: ", response);
      } catch (error) {
        console.error("Error uploading file: ", error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  // Reference to file input element
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Function to trigger file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle form submission
  const onSubmit = async (data: any) => {
    const jwtToken = localStorage.getItem("jwtToken");

    if (!jwtToken) {
      router.push("/");
      return;
    }

    try {
      const { status, data: decodedData } = await decodeToken(jwtToken);
      if (status === 200) {
        const customerId = decodedData.id;

        // Get all form values, including edited and default values
        const formData: any = {};
        for (const field in customerData) {
          formData[field] = getValues(field);
        }

        // Include imageUrl in the data
        formData.imageUrl = image !== null ? image : customerData.imageUrl;

        // Log the data before making the request
        console.log("Data before making the request:", formData);

        // Update customer data using the updateCustomer function
        try {
          const response = await updateCustomer(customerId, formData);
          console.log("Customer data updated successfully", response);
          logout();
        } catch (error) {
          console.error("Error updating customer data", error);
        }
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      router.push("/");
    }
  };

  // If token is not valid, show AuthLoader
  if (!tokenValid) {
    return <AuthLoader />;
  }

  // Helper function to get form field value, including default value
  const getValue = (field: any) => {
    const editedValue = getValues(field);
    return editedValue !== undefined ? editedValue : customerData[field];
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    router.push("/sign-in");
  };

  // Return the UI components
  return (
    <Container>
      <div className="pt-9 flex lg:gap-5">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="flex flex-col gap-8  w-full">
          <div className="block lg:hidden">
            <SideMenuMobile />
          </div>
          <div className="border border-gray-50 rounded-lg p-4">
            <div className="font-medium py-4">Account Settings</div>
            <div className="bg-gray-200/40 w-full h-[0.25px]"></div>

            <div className="flex py-4 w-full flex-col-reverse lg:flex-row">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="  ">
                      <div>First name</div>
                      <div className="pt-2">
                        <Input
                          {...register("firstname")}
                          className=" rounded-md border-gray-200/40"
                          placeholder="Your first name"
                          defaultValue={customerData?.firstname || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>Last name</div>
                    <div className="pt-2">
                      <Input
                        {...register("lastname")}
                        className="rounded-md border-gray-200/40"
                        placeholder="Your last name"
                        defaultValue={customerData?.lastname || ""}
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <div>Email</div>
                    <div className="pt-2">
                      <Input
                        {...register("email")}
                        className=" rounded-md border-gray-200/40"
                        placeholder="Email address"
                        defaultValue={customerData?.email || ""}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>Phone</div>
                    <div className="pt-2">
                      <Input
                        {...register("phoneNumber")}
                        className="rounded-md border-gray-200/40"
                        placeholder="Phone number"
                        defaultValue={customerData?.phoneNumber || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <Button onClick={handleSubmit(onSubmit)}>Save Changes</Button>
                </div>
              </div>

              {/* profile image */}
              <div className="flex justify-center items-center mx-28 my-10 lg:my-0">
                <div className="flex flex-col justify-center items-center gap-6">
                  <div className="bg-green-0 border border-green-400 rounded-full inline-flex items-center justify-center w-48 h-48 overflow-hidden">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Profile"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : customerData?.imageUrl ? (
                      <img
                        src={customerData.imageUrl}
                        alt="Profile"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <User
                        size={100}
                        strokeWidth={0.8}
                        className="text-green-600"
                      />
                    )}
                  </div>

                  <div className="flex justify-center items-center">
                    <input
                      {...register("imageUrl")}
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                    <Button variant="outline" onClick={handleButtonClick}>
                      Upload Image
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-50 rounded-lg p- py-8 p-4">
            <CreateAccount />
          </div>
        </div>
      </div>
    </Container>
  );
}
