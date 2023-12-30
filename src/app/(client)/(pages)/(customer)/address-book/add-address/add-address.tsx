"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/common";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/common/ui/form";

import { DialogClose } from "@/components/common/ui/dialog";

import { toast } from "@/components/common/ui/toast/use-toast";
import { ProvinceNames } from "@/data/address-book/provinces";
import { CityNames } from "@/data/address-book/cities";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Billing/form/select";

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
  errorMessage: "text-red-400 font-light text-xs",
};

export function AddAddress() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addressName: "Home",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You have successfully added a new address!",
    });
    window.location.reload();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <FormField
            control={form.control}
            name="addressName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Address name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Address name"
                    defaultValue="Home"
                    {...field}
                  />
                </FormControl>
                <FormMessage className={`${formStyles.errorMessage}`} />
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
                <FormItem>
                  <FormLabel className="font-normal">First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage className={`${formStyles.errorMessage}`} />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage className={`${formStyles.errorMessage}`} />
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
              <FormItem>
                <FormLabel className="font-normal">Street Address</FormLabel>
                <FormControl>
                  <Input placeholder="Street address" {...field} />
                </FormControl>
                <FormMessage className={`${formStyles.errorMessage}`} />
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
                <FormItem>
                  <FormLabel className="font-normal">Province</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-gray-200 border-gray-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-0 py-2">
                      {ProvinceNames.map((province) => (
                        <SelectItem key={province.id} value={province.name}>
                          {province.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className={`${formStyles.errorMessage}`} />
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
                <FormItem>
                  <FormLabel className="font-normal">City</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="text-gray-200 border-gray-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-0 py-2">
                      {CityNames.map((city) => (
                        <SelectItem key={city.id} value={city.name}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    <FormMessage className={`${formStyles.errorMessage}`} />
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
                <FormItem>
                  <FormLabel className="font-normal">Zip code</FormLabel>
                  <FormControl>
                    <Input placeholder="Zip code" {...field} />
                  </FormControl>
                  <FormMessage className={`${formStyles.errorMessage}`} />
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
                <FormItem>
                  <FormLabel className="font-normal">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage className={`${formStyles.errorMessage}`} />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Contact number</FormLabel>
                  <FormControl>
                    <Input placeholder="Contact number" {...field} />
                  </FormControl>
                  <FormMessage className={`${formStyles.errorMessage}`} />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-2 py-4">
          <Button type="submit">Add address</Button>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
    
  );
}


