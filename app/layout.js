import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import { Chatbox } from "@talkjs/react";
import Script from 'next/script';


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Auto Audit Pro",
  description: "Find any car details by VIN number",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../images/logo.png" sizes="any" />
      <body className={outfit.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/66f190fae5982d6c7bb339e5/1i8fpsktc"
      />
    </html>
  );
}
