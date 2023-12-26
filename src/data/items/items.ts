import { IFooterLogos } from "@/types";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const ItemLogos: IFooterLogos[] = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: FacebookIcon,
  },
  {
    id: 2,
    link: "https://twitter.com/",
    icon: TwitterIcon,
  },
  {
    id: 3,
    link: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
];

export default ItemLogos;
