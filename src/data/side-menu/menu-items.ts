import { ISideMenuItems } from "@/types";
import { LogOut, CreditCard, Home, User, ShoppingCart, RefreshCw } from "lucide-react";

export const sideMenuItems: ISideMenuItems[] = [
  {
    id: 1,
    path: "/profile",
    icon: User,
    description: "Profile & Password",
  },
  {
    id: 2,
    path: "/addresses",
    icon: Home,
    description: "Addresses",
  },
  {
    id: 3,
    path: "/order-history",
    icon: RefreshCw,
    description: "Order History",
  },
  {
    id: 4,
    path: "/shopping-cart",
    icon: ShoppingCart,
    description: "Shopping Cart",
  },
];