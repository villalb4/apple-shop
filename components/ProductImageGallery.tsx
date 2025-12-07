"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const width = slider.clientWidth;
      const scrollPosition = slider.scrollLeft;
      const index = Math.round(scrollPosition / width);
      setActiveImage(index);
    }
  };

  // If no images provided, fallback to a placeholder or empty state
  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-xl">
        <div className="flex items-center justify-center h-full text-gray-400">
          No image available
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile Slider (Hidden on md+) */}
      <div className="md:hidden relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="relative aspect-square w-full overflow-x-auto snap-x snap-mandatory flex no-scrollbar bg-gray-50"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative snap-center snap-always"
            >
              <Image
                src={img}
                alt={`${productName} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Dots Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeImage === index
                    ? "bg-black dark:bg-white w-4"
                    : "bg-black/20 dark:bg-white/20"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop Grid (Hidden on mobile) */}
      <div className="hidden md:grid grid-cols-2 gap-2">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square bg-gray-50 overflow-hidden"
          >
            <Image
              src={img}
              alt={`${productName} - Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
