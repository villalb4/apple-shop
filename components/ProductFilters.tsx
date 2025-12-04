"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function ProductFilters() {
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    price: true,
    status: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="space-y-8 border-1 p-5">
      {/* Category Section */}
      <div className="border-b border-gray-100 dark:border-gray-800 pb-6">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full group"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Categoría
          </h3>
          {openSections.category ? (
            <ChevronUp
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          )}
        </button>

        {openSections.category && (
          <div className="mt-4 space-y-2">
            {[
              "Smartphones",
              "Laptops",
              "Tablets",
              "Audio",
              "Accesorios",
              "Gaming",
            ].map((category) => (
              <label
                key={category}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="border-b border-gray-100 dark:border-gray-800 pb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full group"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Precio
          </h3>
          {openSections.price ? (
            <ChevronUp
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          )}
        </button>

        {openSections.price && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full pl-7 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="text-gray-400">-</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full pl-7 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Status Section */}
      <div className="pb-6">
        <button
          onClick={() => toggleSection("status")}
          className="flex items-center justify-between w-full group"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Estado
          </h3>
          {openSections.status ? (
            <ChevronUp
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          ) : (
            <ChevronDown
              size={16}
              className="text-gray-400 group-hover:text-gray-600"
            />
          )}
        </button>

        {openSections.status && (
          <div className="mt-4 space-y-2">
            {["En oferta", "Nuevo", "Destacado"].map((status) => (
              <label
                key={status}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                  {status}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
