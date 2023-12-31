import {
  ChevronDown,
  CircleUserRound,
  CreditCard,
  LogOut,
  User,
} from "lucide-react";

import { useBreakpoint } from "@/hooks";

import { Button } from "@/components/common/buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/navigation-menu/avatar-menu";

import { AvatarNavDetails } from "@/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { decodeToken } from "@/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/common/ui/skeleton";
import { ToastAction } from "@/components/common/ui/toast/toast";
import { useToast } from "@/components/common/ui/toast/use-toast";
import ClientOnly from "../client-only";

export default function NavigationMenuAvatar() {
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://greensupermarketstoreacc.blob.core.windows.net/greensupermarketblogcontainer/8ef1ae8e-2dd5-46b6-beda-7c9c32ac1aae.jpg"
  );

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const { toast } = useToast();

  useEffect(() => {
    const decode = async () => {
      const jwtToken = localStorage.getItem("jwtToken");
      if (!jwtToken) {
        setUser(false);
        setLoading(false);
        return;
      }
      try {
        const res = await decodeToken(jwtToken!);
        const { data } = res;
        const { firstname, imageUrl } = data;
        setUser(true);
        setName(firstname);
        setImage(imageUrl);
        setLoading(false);
      } catch (error) {
        setUser(false);
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Session Expired!",
          description: "Please login again.",
          action: <ToastAction altText="Sign In">Try again</ToastAction>,
        });
      }
    };
    decode();
  }, [toast]);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(false);
    window.location.reload();
    router.push("/");
  };

  return (
    <>
      {user ? (
        <DropdownMenu>
          {loading ? (
            <div className="flex flex-row justify-center items-center gap-2">
              <Skeleton className="w-[34px] h-[34px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </div>
          ) : (
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center cursor-pointer space-x-3">
                <Image
                  src={image}
                  alt="profile picture"
                  width={34}
                  height={34}
                  className="rounded-full border border-gray-200/40 w-[34px] h-[34px]"
                />
                <div className="hidden lg:flex justify-end items-center group gap-x-3">
                  <Button
                    variant="nav"
                    size="nav"
                    className="group-hover:text-green-400"
                  >
                    {name}
                  </Button>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="transition-colors group-hover:text-green-400"
                  />
                </div>
              </div>
            </DropdownMenuTrigger>
          )}
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="font-medium">
              {AvatarNavDetails[1].name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <Link href="/profile">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                  <span>{AvatarNavDetails[2].name}</span>
              </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span onClick={logout}>{AvatarNavDetails[3].name}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          {loading ? (
            <div className="flex flex-row justify-center items-center gap-2">
              <Skeleton className="w-[34px] h-[34px] rounded-full" />
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            </div>
          ) : (
            <DropdownMenuTrigger asChild>
              <div className="flex justify-end items-center cursor-pointer gap-x-3">
                <CircleUserRound
                  className="w-6 h-6"
                  size={34}
                  strokeWidth={1}
                />
                <div className="hidden lg:flex justify-center items-center group space-x-3">
                  <Button
                    variant="nav"
                    size="nav"
                    className="group-hover:text-green-400"
                  >
                    {AvatarNavDetails[5].name}
                  </Button>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="transition-colors group-hover:text-green-400"
                  />
                </div>
              </div>
            </DropdownMenuTrigger>
          )}
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{AvatarNavDetails[4].name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/sign-in">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{AvatarNavDetails[5].name}</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/create-account" className="!cursor-pointer">
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>{AvatarNavDetails[6].name}</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
