"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "@/components/common/ui/input";
import { Button } from "@/components/common";

type Props = {};

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  inputFields: "border-2 border-gray-50 text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const LoginModal = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
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
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-2 p-6 items-center justify-center shadow-xl rounded-lg lg:w-[30rem]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-2 mb-2"
          >
            <div className="space-y-4">
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
            </div>

            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginModal;
