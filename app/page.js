import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";
import HomePage from "@/pages/HomePage"
import 'react-bootstrap-accordion/dist/index.css';


export default function Home() {
  return (
    <main className=" min-h-screen">
      <Header/>
      <HomePage/>
    </main>
  );
}
