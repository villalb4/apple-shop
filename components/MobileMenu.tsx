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
            className="flex gap-4 items-center text-xs font-medium tracking-widest uppercase hover:text-[#0071e3] transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" color="black" />
            {selectedCategory?.name}
          </button>
        ) : (
          <span className="text-xs font-medium tracking-widest uppercase">
            Menú
          </span>
        )}

        <DrawerClose asChild>
          <button className="text-[#1d1d1f] hover:text-gray-600 transition-colors p-1">
            <X size={24} />
          </button>
        </DrawerClose>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!activeCategory ? (
          // Main Menu List
          <div className="flex flex-col min-h-full">
            <div className="flex-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveCategory(item.name)}
                  className="w-full flex items-center justify-between px-6 py-6 border-b hover:bg-gray-50 transition-colors group text-left"
                >
                  <span className="text-base font-medium uppercase tracking-wide">
                    {item.name}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Social Footer - Only visible in main menu */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 mt-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
                Síguenos
              </p>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d1d1f] hover:text-[#E1306C] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d1d1f] hover:text-[#000000] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d1d1f] hover:text-[#FF0000] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1d1d1f] hover:text-[#25D366] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>
              </div>
            </div>
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
                    className="flex items-center justify-between text-base font-medium uppercase tracking-wide border-b"
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
