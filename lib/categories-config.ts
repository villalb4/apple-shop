/**
 * Centralized configuration for categories and subcategories
 * This file contains all category-related constants, types, and helper functions
 */

export type CategorySlug = "iphone" | "mac" | "ipad" | "watch" | "airpods";
export type SubcategorySlug = "nuevo" | "semi-nuevo" | "accesorios";

export interface CategoryConfig {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface SubcategoryConfig {
  slug: SubcategorySlug;
  name: string;
  description: string;
}

// Category configurations
export const CATEGORIES: Record<CategorySlug, CategoryConfig> = {
  iphone: {
    slug: "iphone",
    name: "iPhone",
    description: "Descubre la última generación de iPhone con tecnología avanzada",
  },
  mac: {
    slug: "mac",
    name: "Mac",
    description: "MacBooks, iMac y Mac mini con los chips más potentes de Apple",
  },
  ipad: {
    slug: "ipad",
    name: "iPad",
    description: "iPad Pro, Air y mini para creatividad y productividad",
  },
  watch: {
    slug: "watch",
    name: "Apple Watch",
    description: "El reloj inteligente más avanzado para tu salud y fitness",
  },
  airpods: {
    slug: "airpods",
    name: "AirPods",
    description: "Audio espacial y cancelación de ruido de última generación",
  },
};

// Subcategory configurations
export const SUBCATEGORIES: Record<SubcategorySlug, SubcategoryConfig> = {
  "nuevo": {
    slug: "nuevo",
    name: "Nuevo",
    description: "Productos nuevos en caja sellada con garantía oficial",
  },
  "semi-nuevo": {
    slug: "semi-nuevo",
    name: "Semi Nuevo",
    description: "Equipos reacondicionados certificados con garantía",
  },
  accesorios: {
    slug: "accesorios",
    name: "Accesorios",
    description: "Accesorios originales y compatibles",
  },
};

// Helper functions
export function getCategoryName(slug: string): string {
  const category = CATEGORIES[slug as CategorySlug];
  return category ? category.name : slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function getSubcategoryName(slug: string): string {
  const subcategory = SUBCATEGORIES[slug as SubcategorySlug];
  if (subcategory) return subcategory.name;
  
  // Fallback: capitalize each word
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getCategoryDescription(slug: string): string {
  const category = CATEGORIES[slug as CategorySlug];
  return category ? category.description : "";
}

export function getSubcategoryDescription(slug: string): string {
  const subcategory = SUBCATEGORIES[slug as SubcategorySlug];
  return subcategory ? subcategory.description : "";
}

export function isValidCategory(slug: string): slug is CategorySlug {
  return slug in CATEGORIES;
}

export function isValidSubcategory(slug: string): slug is SubcategorySlug {
  return slug in SUBCATEGORIES;
}
