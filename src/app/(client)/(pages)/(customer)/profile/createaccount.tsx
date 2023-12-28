"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/common/ui/input";

import { Checkbox } from "@/components/common/ui/checkbox";
import { Button, Container } from "@/components/common";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/common/ui/form";
import { FormControl } from "./form";

type Props = {};

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  confirmpassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
  newpassword: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  inputFields:
    "border rounded-md border-gray-200/40  text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const CreateAccount = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmpassword: "",
      newpassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = values;
    console.log(data);
  }

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
   
      <div className="">
        <div className="font-medium pb-4">Change Password</div>
        <div className="bg-gray-200/40 w-full h-[0.25px]"></div>
        <div className="pt-5">
          
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full "
            >
              <div className="space-y-3 gap-3">
                {/* password */}
                <div>Current Password</div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`${formBaseStyles.inputFields}`}
                            {...field}
                          />
                        </FormControl>
                        <button
                          className="absolute right-2 top-[0.65rem] text-xl"
                          type="button"
                          onClick={handleEyeClick}
                        >
                          {showPassword ? (
                            <EyeOff
                              size={22}
                              strokeWidth={2}
                              className="text-gray-200"
                            />
                          ) : (
                            <Eye
                              size={22}
                              strokeWidth={2}
                              className="text-gray-200"
                            />
                          )}
                        </button>
                      </div>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2 lg:flex-row flex-col">
                  {/* confirm */}

                  <div className="flex-1 flex flex-col gap-2">
                    <div>New Password</div>
                    <div>
                    <FormField
                      control={form.control}
                      name="newpassword"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <FormControl>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className={`${formBaseStyles.inputFields}`}
                                {...field}
                              />
                            </FormControl>
                            <button
                              className="absolute right-2 top-[0.65rem] text-xl"
                              type="button"
                              onClick={handleEyeClick}
                            >
                              {showPassword ? (
                                <EyeOff
                                  size={22}
                                  strokeWidth={2}
                                  className="text-gray-200"
                                />
                              ) : (
                                <Eye
                                  size={22}
                                  strokeWidth={2}
                                  className="text-gray-200"
                                />
                              )}
                            </button>
                          </div>
                          <FormMessage
                            className={`${formBaseStyles.errorMessages}`}
                          />
                        </FormItem>
                      )}
                    /></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div>Confirm Password</div>
                    <div>
                    <FormField
                      control={form.control}
                      name="confirmpassword"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <FormControl>
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className={`${formBaseStyles.inputFields}`}
                                {...field}
                              />
                            </FormControl>
                            <button
                              className="absolute right-2 top-[0.65rem] text-xl"
                              type="button"
                              onClick={handleEyeClick}
                            >
                              {showPassword ? (
                                <EyeOff
                                  size={22}
                                  strokeWidth={2}
                                  className="text-gray-200"
                                />
                              ) : (
                                <Eye
                                  size={22}
                                  strokeWidth={2}
                                  className="text-gray-200"
                                />
                              )}
                            </button>
                          </div>
                          <FormMessage
                            className={`${formBaseStyles.errorMessages}`}
                          />
                        </FormItem>
                      )}
                    /></div>
                  </div>
                </div>
                <div>
                  <Button type="submit" className="">
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
  
  );
};

export default CreateAccount;
