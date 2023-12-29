"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

import { sideMenuItems } from "@/data/side-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SideMenuMobile() {
  const pathName = usePathname();
  const router = useRouter();
  
  const signOut = () => {
    localStorage.removeItem("jwtToken");
    router.push("/");
  };

  return (
    <div className="w-full relative">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            Navigation
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 py-2">
            <div className="flex flex-col rounded-lg max-w-full">
              <div className="flex flex-col">
                {sideMenuItems.map((item) => (
                  <Link key={item.id} href={item.path} className="py-[1px]">
                    <div
                      className={`px-6 py-4 flex items-center gap-3 border-l-4 border-gray-0 hover:bg-gray-50 hover:border-gray-50 ${
                        pathName === item.path && "bg-gray-50 !border-green-400"
                      }`}
                    >
                      <item.icon
                        size={18}
                        strokeWidth={2}
                        className="text-gray-200 "
                      />
                      <h2 className="text-gray-600">{item.description}</h2>
                    </div>
                  </Link>
                ))}
                <AlertDialog>
                  <AlertDialogTrigger
                    className={`p-6 flex gap-3 border-l-4 border-gray-0 hover:bg-gray-50 hover:border-gray-50`}
                  >
                    <LogOut
                      size={22}
                      strokeWidth={2}
                      className="text-gray-200"
                    />
                    <h2 className="text-gray-600">Sign Out</h2>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        You will be signed out of the application. You will need
                        to sign in again to continue using the application.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={signOut}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
