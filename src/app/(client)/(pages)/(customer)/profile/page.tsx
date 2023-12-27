import { Button, Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";
import React, {useState } from "react";
import { Input } from "@/components/common/ui/input";
import { Eye, EyeOff } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/common/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CreateAccount from "./createaccount";


export default function Profile() {
  return (
    <Container>
      <div className="pt-9 flex lg:gap-5">
        <div>
          <SideMenu />
        </div>
        <div> </div>

        <div className="flex flex-col gap-8  w-full">
          <div className="border border-gray-50 rounded-lg p-4">
            <div className="font-medium py-4">Account Settings</div>
            <div className="bg-gray-200/40 w-full h-[0.25px]"></div>

            <div className="flex py-4 w-full flex-col lg:flex-row">
              <div className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="  ">
                      <div>First name</div>
                      <div className="pt-2">
                        <Input
                          className=" rounded-md border-gray-200/40"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>Last name</div>
                    <div className="pt-2">
                      <Input
                        className="rounded-md border-gray-200/40"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className=" ">
                    <div>Email</div>
                    <div className="pt-2">
                      <Input
                        className=" rounded-md border-gray-200/40"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>Phone</div>
                    <div className="pt-2">
                      <Input
                        className="rounded-md border-gray-200/40"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <Button>Save Changes</Button>
                </div>
              </div>

              {/* profile image */}
              <div className="flex-1 w-full">
                profile image
                <div> </div>
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
