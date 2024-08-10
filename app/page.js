import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";
import HomePage from "@/pages/HomePage"
import { NextUIProvider } from "@nextui-org/react";



export default function Home() {
  return (

    <main className="min-h-screen">
      <NextUIProvider>
        <Header />
        <HomePage />
      </NextUIProvider>
    </main>

  );
}
