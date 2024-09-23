import Header from "@/app/commons/Header";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";
import HomePage from "@/pages/HomePage"
import Footer from "@/app/commons/Footer";



export default function Home() {
  return (
    <main className="min-h-screen">
        <HomePage />
    </main>

  );
}
