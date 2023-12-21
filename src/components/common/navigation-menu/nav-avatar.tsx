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

export default function NavigationMenuAvatar() {
  const user = true;

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center items-center cursor-pointer space-x-3">
              <Image
                src={AvatarNavDetails[0].imageSrc}
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
                  {AvatarNavDetails[0].name}
                </Button>
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className="transition-colors group-hover:text-green-400"
                />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="font-medium">
              {AvatarNavDetails[1].name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>{AvatarNavDetails[2].name}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>{AvatarNavDetails[3].name}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-end items-center cursor-pointer gap-x-3">
              <CircleUserRound className="w-6 h-6" size={34} strokeWidth={1} />
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
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{AvatarNavDetails[4].name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>{AvatarNavDetails[5].name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>{AvatarNavDetails[6].name}</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
