"use client";

import React, { useEffect, useState } from "react";

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
  otp: z
    .number()
    .int()
    .min(1, { message: "Entered OTP is incorrect" })
    .max(6, { message: "Entered OTP is incorrect" })
    .transform((val) => String(val).trim()),
});

const formBaseStyles = {
  inputFields: "border-2 border-gray-50 text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const OTP = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const [endTime, setEndTime] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const now = new Date();
    const target = new Date(now.getTime() + 5 * 60000);

    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = target.getTime() - currentTime.getTime();

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (m <= 0 && s <= 0) {
        setEndTime(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = values;
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center pt-[60px]">
      <div className="flex flex-col gap-2 p-6 items-center justify-center shadow-xl rounded-lg lg:w-[30rem]">
        <h2 className="font-medium text-xl mb-2 lg:text-2xl">
          OTP Verification
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-2 mb-2"
          >
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="Enter the OTP"
                          className={`${formBaseStyles.inputFields}`}
                          {...field}
                        />
                      </FormControl>
                      <div className="absolute right-2 top-[0.65rem] text-sm px-1">
                        {endTime ? (
                          <div className="text-red-400">Time Expired!</div>
                        ) : (
                          <div>
                            <span>Time remaining : </span>
                            <span>
                              {minutes} : {seconds}
                            </span>
                          </div>
                        )}
                      </div>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
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

export default OTP;
