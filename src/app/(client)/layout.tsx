import type { Metadata } from "next";
import { poppins } from "@/styles/fonts";
import { MainData } from "@/data";
import "@/styles/globals.css";
import { cn } from "@/utils/shad-utils";
import {
  Navigation,
  Footer,
  UpperFooter,
} from "@/components/common/layout";
import AboutUs from "./(pages)/about-us/page";
import { Contact } from "lucide-react";
import ContactUs from "./(pages)/contact-us/page";

export const metadata: Metadata = {
  title: MainData.title,
  description: MainData.description,
  keywords: MainData.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full antialiased", poppins.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navigation />
          <div>{children}</div>
          
          <AboutUs/>

          {/* <UpperFooter/> */}
          <Footer />
          
        </main>
      </body>
    </html>
  );
}
