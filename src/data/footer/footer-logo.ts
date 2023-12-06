import { IFooterLogos } from "@/types/footer-logo";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

const footerlogos: IFooterLogos[] = [
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
  {
    id: 4,
    link: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
];

export default footerlogos;
