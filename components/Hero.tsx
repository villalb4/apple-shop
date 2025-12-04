"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-start pt-20 overflow-hidden bg-[#fafafa]">
      {/* Text Content */}
      <div className="text-center space-y-4 z-10 animate-slideUp">
        <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1f] tracking-tight">
          iPhone
        </h1>
        <h2 className="text-base md:text-base text-[#1d1d1f] font-normal">
          La nueva generación ya disponible
        </h2>
        <Button>Comprar</Button>
      </div>

      {/* Product Image */}
      <div
        className="relative w-full max-w-5xl h-full mt-5 animate-slideUp opacity-0"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div>
            <Image
              src="/images/home-hero.png"
              alt="iPhone 17 Pro"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
