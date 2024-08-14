import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";
import Footer from "./commons/Footer";
import Header from "./commons/Header";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Auto Audit Pro",
  description: "Find any car details by VIN number",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>
          <Header />
            {children}
          <Footer/>
        </Providers>  
        </body>
    </html>
  );
}
