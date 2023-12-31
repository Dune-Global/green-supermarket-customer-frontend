import { INavigationText } from "@/types";

const account: INavigationText[] = [
  {
    title: "Profile & Password",
    href: "/profile",
    description: "Manage your personal details and enhance account security.",
  },
  {
    title: "Addresses",
    href: "/address-book",
    description:
      "Update, add, or remove addresses to streamline your grocery shopping experience.",
  },
  {
    title: "Payment Methods",
    href: "/payment-methods",
    description:
      "Store and manage your preferred payment options for quick and hassle-free transactions.",
  },
  {
    title: "Order History",
    href: "/order-history",
    description:
      "Track and review your past orders, ensuring an organized shopping history.",
  },
];

export default account;
