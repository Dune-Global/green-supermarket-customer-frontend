"use client";

import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { decodeToken, signInCustomer } from "@/helpers";

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
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/common/ui/toast/toast";
import { useToast } from "@/components/common/ui/toast/use-toast";

type Props = {};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "invalid email" })
    .min(1, { message: "should have at least one character" })
    .max(50, { message: "can't contain more than 50 characters" }),
  password: z
    .string()
    .min(8, { message: "password must contain at least 8 characters" })
    .max(50, { message: "password can't contain more than 50 characters" }),
});

const formBaseStyles = {
  inputFields: "border-2 border-gray-50 text-gray-900 placeholder-gray-200",
  errorMessages: "text-red-400 font-medium text-sm",
};

const Signin = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const backToHome = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const { email, password } = values;
      const res = await signInCustomer(email, password);
      localStorage.setItem("jwtToken", res.token);
      toast({
        variant: "default",
        title: "Welcome back!",
        description: "You have successfully logged in.",
        action: (
          <ToastAction onClick={backToHome} altText="Try again">
            Go to home
          </ToastAction>
        ),
      });
      backToHome();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Email or Password is incorrect.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
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
        setTokenValid(false);
        return;
      }

      try {
        const { status } = await decodeToken(jwtToken);
        if (status !== 200) {
          setTokenValid(false);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    checkTokenValidity();
  }, [router]);

  if (tokenValid) {
    return <AuthLoader />;
  }

  return (
    <Container>
      <div className="flex flex-col gap-4 items-center justify-center pt-[60px]">
        <div className="flex flex-col gap-2 p-6 items-center justify-center shadow-xl rounded-lg lg:w-[30rem]">
          <h2 className="font-medium text-xl mb-2 lg:text-2xl">Sign In</h2>

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
                          placeholder="Email"
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

              <div className="flex items-center justify-between w-full text-sm text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Checkbox id="terms" />
                  <p>Remember me</p>
                </div>
                <div>
                  <a href="#" className="underline">
                    Forgot password
                  </a>
                </div>
              </div>

              <Button type="submit" className="w-full" loading={loading}>
                Login
              </Button>

              <div className="text-sm text-center pt-3">
                <p className="text-gray-200">
                  Don&apos;t have an account?{" "}
                  <a href="/create-account" className="text-gray-900 underline">
                    Sign up
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

export default Signin;
