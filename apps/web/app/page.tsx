import { Contributions } from "@/components/Contributions";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Reviews } from "@/components/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">

      <HeroSection />
      <Contributions/>
      <Reviews/>
      <Footer/>
      </div>
    </main>
  );
}
