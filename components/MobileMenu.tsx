"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/categories";
import { DrawerClose } from "@/components/ui/drawer";

interface MobileMenuProps {
  onClose?: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedCategory = NAV_ITEMS.find(
    (item) => item.name === activeCategory
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">
        {activeCategory ? (
          <button
            onClick={() => setActiveCategory(null)}
            className="flex gap-4 items-center text-xs font-normal text-gray-600 tracking-widest uppercase hover:text-[#0071e3] transition-colors"
          >
            <ChevronLeft
              className="w-5 h-5 mr-1"
              strokeWidth={0.7}
              color="black"
            />
            {selectedCategory?.name}
          </button>
        ) : (
          <span className="text-sm font-bold tracking-widest uppercase text-[#1d1d1f]">
            Menú
          </span>
        )}

        <DrawerClose asChild>
          <button className="text-[#1d1d1f] hover:text-gray-600 transition-colors p-1">
            <X size={24} strokeWidth={0.5} />
          </button>
        </DrawerClose>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!activeCategory ? (
          // Main Menu List
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveCategory(item.name)}
                className="w-full flex items-center justify-between px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors group text-left"
              >
                <span className="text-lg font-bold uppercase tracking-wide text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {item.name}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0071e3] transition-colors" />
              </button>
            ))}
          </div>
        ) : (
          // Category Details
          <div className="flex flex-col animate-in slide-in-from-right-10 duration-300">
            <div className="p-0">
              {/* Main Link Section */}
              <div className="">
                <DrawerClose asChild className="p-6">
                  <Link
                    href={selectedCategory?.mainLink.href || "#"}
                    className="flex items-center justify-between text-base font-bold uppercase tracking-wide text-[#1d1d1f] hover:text-[#0071e3] transition-colors border-b"
                    onClick={onClose}
                  >
                    <span>{selectedCategory?.mainLink.title}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </DrawerClose>
                <ul className="px-6 space-y-4 py-6">
                  {selectedCategory?.mainLink.items.map((link, idx) => (
                    <li key={idx}>
                      <span className="font-light text-lg block py-1">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cards Section */}
              <div className="grid gap-4 p-4 border-t">
                {selectedCategory?.cards.map((card, idx) => (
                  <DrawerClose key={idx} asChild>
                    <Link
                      href={card.href}
                      className="flex items-center p-4 rounded-xl bg-gray-50 active:bg-gray-100 border border-transparent active:border-gray-200 transition-all group"
                      onClick={onClose}
                    >
                      <div className="flex-1">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 font-medium">
                          {card.description}
                        </p>
                      </div>
                      <div className="text-gray-400 group-hover:text-[#0071e3] transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
