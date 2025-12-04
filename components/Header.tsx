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

import { NAV_ITEMS } from "@/lib/categories";

interface NavItem {
  name: string;
  columns: {
    title: string;
    href?: string; // URL for the title link
    items: string[];
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
                  <DrawerHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <DrawerTitle className="text-xl font-bold">
                        Menú
                      </DrawerTitle>
                      <DrawerClose asChild>
                        <button className="text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-smooth">
                          <X size={24} />
                        </button>
                      </DrawerClose>
                    </div>
                  </DrawerHeader>

                  {/* Mobile Navigation Content */}
                  <div className="overflow-y-auto p-6 space-y-6">
                    {navItems.map((item) => (
                      <div key={item.name} className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#1d1d1f]">
                          {item.name}
                        </h3>
                        <div className="space-y-4 pl-2">
                          {item.columns.map((column, idx) => (
                            <div key={idx} className="space-y-2">
                              {/* Column Title */}
                              {column.href ? (
                                <DrawerClose asChild>
                                  <Link
                                    href={column.href}
                                    className="text-sm font-semibold text-gray-900 hover:text-[#0071e3] uppercase tracking-wide transition-colors block"
                                  >
                                    {column.title}
                                  </Link>
                                </DrawerClose>
                              ) : (
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                  {column.title}
                                </h4>
                              )}

                              {/* Column Items */}
                              <ul className="space-y-2 pl-2">
                                {column.items.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <span className="text-[#1d1d1f]/70 text-sm block">
                                      {link}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
                className={`grid grid-cols-4 gap-12 transition-opacity duration-200 ease-out ${
                  activeDropdown === item.name
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                {item.columns.map((column, idx) => (
                  <div key={idx} className="space-y-4">
                    {/* Title - Clickable if href exists */}
                    {column.href ? (
                      <Link
                        href={column.href}
                        className="text-xs font-semibold text-gray-900 hover:text-[#0071e3] uppercase tracking-wide transition-colors block"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {column.title}
                      </Link>
                    ) : (
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {column.title}
                      </h3>
                    )}

                    {/* Items - Non-clickable */}
                    <ul className="space-y-3">
                      {column.items.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <span className="text-[#1d1d1f]/70 text-sm block">
                            {link}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
