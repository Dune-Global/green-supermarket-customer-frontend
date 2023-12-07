import type { Metadata } from "next";
import { poppins } from "@/styles/fonts";
import { MainData } from "@/data";
import "@/styles/globals.css";
import { cn } from "@/utils/shad-utils";
import {
  Navigation,
  Footer,
} from "@/components/green-supermarket-common-ui/layout";

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
          <Footer />
        </main>
      </body>
    </html>
  );
}
