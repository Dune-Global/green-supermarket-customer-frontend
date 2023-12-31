import type { Metadata } from "next";
import { poppins } from "@/styles/fonts";
import { MainData } from "@/data";
import "@/styles/globals.css";
import { cn } from "@/utils/shad-utils";
import {
  Navigation,
  Footer,
  UpperFooter,
  TopMenu,
} from "@/components/common/layout";
import { Toaster } from "@/components/common/ui/toast/toaster";

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
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4GFZCSLYWR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4GFZCSLYWR');
              `,
          }}
        ></script>
      </head>
      <body  className={cn("relative h-full antialiased", poppins.className)}>
        <main vaul-drawer-wrapper="" className="z-20 relative flex flex-col min-h-screen bg-gray-0">
          <Toaster />
          <div className="sticky top-0 z-50">
            <TopMenu />
            <Navigation />
          </div>
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
