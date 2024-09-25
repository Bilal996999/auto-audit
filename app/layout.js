import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import { Chatbox } from "@talkjs/react";
import Script from 'next/script';
import { headers } from 'next/headers';


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Auto Audit Pro",
  description: "Find any car details by VIN number",

};

export default function RootLayout({ children }) {
  // Get headers to infer URL data
  const headersList = headers();
  const host = headersList.get('host');
  const url = headersList.get('x-forwarded-host') || host;
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const fullUrl = `${protocol}://${url}${headersList.get('x-incoming-url') || ''}`;

  const pathname = new URL(fullUrl).pathname;
  console.log(pathname)
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>

      {pathname != "/dashboard" && (
      <Script
        strategy="afterInteractive"
        src="https://embed.tawk.to/66f190fae5982d6c7bb339e5/1i8fpsktc"
      />)}
      {/* {excludedPages.includes(router.pathname) != "dashboard" && (
      )} */}

    </html>
  );
}
