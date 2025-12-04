"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  textColor: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Premium Accessories",
    subtitle: "Hasta 30% Off",
    description:
      "Descubre nuestra colección exclusiva de accesorios para tu iPhone",
    buttonText: "Comprar Ahora",
    textColor: "text-white",
    image: "/images/airpods.png",
  },
  {
    id: 2,
    title: "AirPods Pro",
    subtitle: "Nueva Generación",
    description:
      "Audio espacial personalizado con seguimiento dinámico de la cabeza",
    buttonText: "Conocer Más",
    textColor: "text-white",
    image: "/images/watch.png",
  },
  {
    id: 3,
    title: "AirPods Max",
    subtitle: "Titanio Natural",
    description:
      "Audio inalámbrico con cancelación de ruido activa. 20 horas de autonomía",
    buttonText: "Ver Detalles",
    textColor: "text-white",
    image: "/images/airpods.png",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="flex flex-col w-full overflow-hidden bg-black pb-20 pt-20 mt-20">
      <div className=" w-full flex flex-col relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-1000 ease-in-out
                ${
                  index === currentSlide
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none h-0 overflow-hidden"
                }
            `}
          >
            <div className="container  mx-auto h-full w-full flex items-center justify-between">
              <div className="max-w-2xl space-y-6 animate-slideUp z-10">
                <h2
                  className={`text-4xl md:text-5xl font-bold ${slide.textColor} tracking-tight`}
                >
                  {slide.title}
                </h2>
                <p
                  className={`text-2xl md:text-3xl font-semibold ${slide.textColor}`}
                >
                  {slide.subtitle}
                </p>
                <p className={`${slide.textColor} opacity-90 max-w-xl`}>
                  {slide.description}
                </p>
                <Button variant="outline" size="lg">
                  {slide.buttonText}
                </Button>
              </div>

              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation and Indicators */}
      <div className="container mx-auto flex items-center gap-6 z-10 justify-between">
        {/* Dot Indicators */}
        <div className="flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-9 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className="flex gap-3 z-10">
          <Button
            variant="default"
            size="icon"
            className="rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
