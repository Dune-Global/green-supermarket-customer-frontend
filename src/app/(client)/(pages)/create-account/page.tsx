"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerCustomer, decodeToken, sendMail } from "@/helpers";
import { useToast } from "@/components/common/ui/toast/use-toast";
import { ToastAction } from "@/components/common/ui/toast/toast";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@/components/common/ui/form";

import { Checkbox } from "@/components/common/ui/checkbox";
import { AuthLoader, Button, Container } from "@/components/common";

type Props = {};

const formSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(25, { message: "can't contain more than 25 characters" })
    .trim(),
  lastname: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(25, { message: "can't contain more than 25 characters" })
    .trim(),
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  phoneNumber: z
    .string()
    .min(1, { message: "should have at least one character" })
    .max(10, { message: "can't contain more than 10 characters" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  errorMessages: "text-red-400 font-medium text-sm",
};

const CreateAccount = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: undefined,
      password: "",
    },
  });

  const router = useRouter();
  const { toast } = useToast();

  const backToHome = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const { firstname, lastname, email, password, phoneNumber } = values;
      const res = await registerCustomer(
        firstname,
        lastname,
        email,
        password,
        phoneNumber
      );
      setLoading(false);
      localStorage.setItem("jwtToken", res.token);
      await sendMail(
        email,
        email,
        `Welcome to Green Supermarket!`,
        `Hi ${firstname} ${lastname}, Welcome to Green Supermarket! Stay in Green Supermarket and enjoy the best shopping experience.`
      );
      toast({
        variant: "default",
        title: "Welcome to the family!",
        description: "You have successfully logged in.",
      });
      backToHome();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error.response.data.message}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setLoading(false);
    }
  }

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const checkTokenValidity = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (!jwtToken) {
        setTokenValid(true);
        return;
      }

      try {
        const { status } = await decodeToken(jwtToken);
        if (status !== 200) {
          setTokenValid(true);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setTokenValid(true);
      }
    };

    checkTokenValidity();
  }, [router]);

  if (!tokenValid) {
    return <AuthLoader />;
  }

  return (
    <Container>
      <div className="flex flex-col gap-4 items-center justify-center pt-[60px]">
        <div className="flex flex-col gap-2 p-6 items-center justify-center shadow-xl rounded-lg lg:w-[30rem]">
          <h2 className="font-medium text-xl mb-2 lg:text-2xl">
            Create Account
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 w-full px-2 mb-2"
            >
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage
                        className={`${formBaseStyles.errorMessages}`}
                      />
                    </FormItem>
                  )}
                />
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

              <div className="flex items-center justify-between w-full text-sm text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Checkbox id="terms" />
                  <p>Accept all terms & Conditions</p>
                </div>
              </div>

              <Button type="submit" className="w-full" loading={loading}>
                Create Account
              </Button>

              <div className="text-sm text-center pt-3">
                <p className="text-gray-200">
                  Already have an account?{" "}
                  <a href="#" className="text-gray-900 underline">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default CreateAccount;
