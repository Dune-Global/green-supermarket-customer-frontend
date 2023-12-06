import type { Metadata } from "next";
import { MainData } from "@/data";
import "@/styles/globals.css";

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
      <section>
        {children}
      </section>
    )
}
