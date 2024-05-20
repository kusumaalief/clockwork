import Hero from "@/components/Hero";
import LandingTools from "@/components/LandingTools";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex space-y-14 min-h-screen mt-10 h-[1990px] flex-col items-center p-24">
      <Hero />
      <div>
        <LandingTools />
      </div>
    </main>
  );
}
