"use client";

import React, { useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components/common/ui/form";

import { Button } from "@/components/common";

type Props = {};

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(5, { message: "can't contain more than 4 characters" })
    .trim(),
});

const formBaseStyles = {
  inputFields: "border-2 border-gray-50 text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const ForgotPassword = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = values;
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-[60px]">
      <div className="flex flex-col gap-2 p-6 items-center justify-center shadow-xl rounded-lg lg:w-[30rem]">
        <h2 className="font-medium text-xl mb-2 lg:text-2xl">
          Forgot Password
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-2 mb-2"
          >
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className={`${formBaseStyles.inputFields}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage
                      className={`${formBaseStyles.errorMessages}`}
                    />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Send OTP
            </Button>

            <div className="text-sm text-center pt-3">
              <p className="text-gray-200">
                Didn&apos;t recieve OTP?{" "}
                <a href="#" className="text-gray-900 underline">
                  Resend
                </a>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
