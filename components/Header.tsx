"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import AnnouncementBar from "./AnnouncementBar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "@/lib/categories";

import NavCard from "./NavCard";

interface NavItem {
  name: string;
  mainLink: {
    title: string;
    href: string;
    items: string[];
  };
  cards: {
    title: string;
    description: string;
    href: string;
    iconName: string;
  }[];
}

const navItems: NavItem[] = NAV_ITEMS;

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 bg-white"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <AnnouncementBar />
        <nav className="border-b">
          {/* Logo */}
          <div className="container mx-auto py-3 h-14 flex items-center justify-between relative z-50">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <span
                className={`text-xl font-bold transition-colors ${
                  activeDropdown ? "text-[#1d1d1f]" : "text-[#1d1d1f]"
                }`}
                onMouseEnter={() => setActiveDropdown(null)}
              >
                NOMBRE
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8 h-full">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                >
                  <button
                    className={`text-sm font-normal transition-colors ${
                      activeDropdown === item.name
                        ? "text-[#000000]"
                        : "text-[#1d1d1f]/80 hover:text-[#1d1d1f]"
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 md:gap-3 z-50">
              <a
                href="https://wa.me/5491234567890?text=Hola,%20me%20interesa%20consultar%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition-all duration-200 font-medium text-sm"
              >
                WhatsApp
              </a>

              {/* Mobile Menu Drawer */}
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <button className="md:hidden text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-smooth">
                    <Menu size={20} />
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <MobileMenu />
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>

        {/* Dropdown Menu - Faster animation with ease-out */}
        <div
          className={`absolute top-full left-0 right-0 bg-white border-b overflow-hidden ${
            activeDropdown
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-6 py-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`grid grid-cols-12 gap-8 transition-opacity duration-200 ease-out ${
                  activeDropdown === item.name
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                {/* Main Link Column (Left) */}
                <div className="col-span-3 space-y-4 border-r border-gray-100 pr-8">
                  <Link
                    href={item.mainLink.href}
                    className="text-xs font-semibold text-gray-900 hover:text-[#0071e3] uppercase tracking-wide transition-colors block mb-4"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.mainLink.title}
                  </Link>
                  <ul className="space-y-3">
                    {item.mainLink.items.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <span className="text-[#1d1d1f]/70 text-sm block hover:text-[#1d1d1f] transition-colors cursor-default">
                          {link}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cards Columns (Right) */}
                <div className="col-span-9 grid grid-cols-2 gap-6">
                  {item.cards.map((card, idx) => (
                    <div key={idx} onClick={() => setActiveDropdown(null)}>
                      <NavCard
                        title={card.title}
                        description={card.description}
                        href={card.href}
                        iconName={card.iconName}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
