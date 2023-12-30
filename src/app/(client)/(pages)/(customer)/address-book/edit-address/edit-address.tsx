"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import axios from "axios";

import * as z from "zod";

import { Button } from "@/components/common";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/common/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/common/ui/form";
import { Input } from "@/components/common/ui/input";
import { ToastAction } from "@/components/common/ui/toast/toast";
import { useToast } from "@/components/common/ui/toast/use-toast";
import { AddressDetails } from "@/data/address-book";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Billing/form/select";
import { CityNames } from "@/data/address-book/cities";
import { ProvinceNames } from "@/data/address-book/provinces";
import { Pencil } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL!;
axios.defaults.baseURL = BASE_URL;

type Props = {
  param: string;
};

const formSchema = z.object({
  addressName: z
    .string()
    .min(1, { message: "Username must be at least 1 character." })
    .max(20, { message: "Username must be at most 20 characters." })
    .trim(),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(20, { message: "First name must be at most 20 characters." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(20, { message: "Last name must be at most 20 characters." })
    .trim(),
  streetAddress: z
    .string()
    .min(1, { message: "Street address must be at least 1 character." })
    .max(100, { message: "Street address must be at most 100 characters." })
    .trim(),
  province: z.string(),
  city: z.string(),
  zipcode: z
    .string()
    .min(5, { message: "Zip code must have 5 numbers." })
    .max(5, { message: "Zip code should only have 5 numbers." })
    .trim(),
  email: z.string().email({ message: "invalid email" }).trim(),
  contactNumber: z
    .string()
    .min(1, { message: "Should have at least 1 character" })
    .max(10, { message: "Cannot contain more than 10 characters" })
    .trim(),
});

const formStyles = {
    errorMessage: "text-red-400 font-medium text-sm",
};

function EditAddress({ param }: Props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });


  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const {
        addressName,
        firstName,
        lastName,
        streetAddress,
        province,
        city,
        zipcode,
        email,
        contactNumber,
      } = values;
      const reqdata = {
        addressName,
        firstName,
        lastName,
        streetAddress,
        province,
        city,
        zipcode,
        email,
        contactNumber,
      };

      const res = await axios.put(`/customer/${addressName}`, reqdata);
      console.log(res);

      form.reset();

      console.log(reqdata);
      console.log(res);
      setIsLoading(false);

      router.push("/adress-book");
      toast({
        variant: "default",
        title: "Success!",
        description: "You have successfully saved the changes.",
      });

      form.reset();
      router.refresh();
      window.location.reload();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Please enter valid details and try again. (ps: you cannot change the employee ID)",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log("Error: " + error);
      setIsLoading(false);
    }
  }

  const { toast } = useToast();

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button size="sm" variant="ghost">
            Edit Address
            <Pencil className="w-[12px] ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-0 border-2 border-gray-50">
          <DialogHeader className="text-lg font-medium">
            Address Details
          </DialogHeader>
          <div className="border-t-2 border-gray-50 py-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                {AddressDetails.map((card) => (
                  <div key={card.id} className="">
                    <div>
                      <FormField
                        control={form.control}
                        name="addressName"
                        render={({ field }) => (
                          <FormItem className="pt-2">
                            <FormLabel className="font-normal">
                              Address name
                            </FormLabel>
                            <FormControl>
                              <Input
                                defaultValue={card.addressName}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage
                              className={`${formStyles.errorMessage}`}
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                First name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  defaultValue={card.firstName}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage
                                className={`${formStyles.errorMessage}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                Last name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  defaultValue={card.lastName}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage
                                className={`${formStyles.errorMessage}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="streetAddress"
                        render={({ field }) => (
                          <FormItem className="pt-2">
                            <FormLabel className="font-normal">
                              Street Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                defaultValue={card.streetAddress}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage
                              className={`${formStyles.errorMessage}`}
                            />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="province"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                Province
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="text-gray-200 border-gray-50">
                                    <SelectValue>{card.province}</SelectValue>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-0 py-2">
                                  {ProvinceNames.map((province) => (
                                    <SelectItem
                                      key={province.id}
                                      value={province.name}
                                    >
                                      {province.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                                <FormMessage
                                  className={`${formStyles.errorMessage}`}
                                />
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                City
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="text-gray-200 border-gray-50">
                                    <SelectValue>{card.city}</SelectValue>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-0 py-2">
                                {CityNames.map((city) => (
                                    <SelectItem
                                      key={city.id}
                                      value={city.name}
                                    >
                                      {city.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                                <FormMessage
                                  className={`${formStyles.errorMessage}`}
                                />
                              </Select>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="zipcode"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                Zip code
                              </FormLabel>
                              <FormControl>
                                <Input defaultValue={card.zipcode} {...field} />
                              </FormControl>
                              <FormMessage
                                className={`${formStyles.errorMessage}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input defaultValue={card.email} {...field} />
                              </FormControl>
                              <FormMessage
                                className={`${formStyles.errorMessage}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <FormField
                          control={form.control}
                          name="contactNumber"
                          render={({ field }) => (
                            <FormItem className="pt-2">
                              <FormLabel className="font-normal">
                                Contact number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  defaultValue={card.contactNumber}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage
                                className={`${formStyles.errorMessage}`}
                              />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col md:flex-row gap-2 pt-3">
                  <Button type="submit" loading={isLoading}>
                    Save Changes
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditAddress;
