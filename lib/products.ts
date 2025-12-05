export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  color: string;
  isNew: boolean;
  description: string;
  features: string[];
  specs: {
    storage: string;
    screen: string;
    camera: string;
    battery: string;
    processor: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 17",
    slug: "iphone-17",
    category: "iphones-nuevos",
    price: 999,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 17 es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    category: "iphones-nuevos",
    price: 1199,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 17 Pro es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 3,
    name: "iPhone 17 Pro Max",
    slug: "iphone-17-pro-max",
    category: "iphones-nuevos",
    price: 1399,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 17 Pro Max es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 4,
    name: "iPhone Air",
    slug: "iphone-air",
    category: "iphones-nuevos",
    price: 1099,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone Air es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 5,
    name: "iPhone 16e",
    slug: "iphone-16e",
    category: "iphones-nuevos",
    price: 699,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 16e es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 6,
    name: "iPhone 16",
    slug: "iphone-16",
    category: "iphones-nuevos",
    price: 799,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 16 es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 7,
    name: "iPhone 16 Plus",
    slug: "iphone-16-plus",
    category: "iphones-nuevos",
    price: 999,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 16 Plus es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 8,
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    category: "iphones-nuevos",
    price: 1199,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 16 Pro es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 9,
    name: "iPhone 16 Pro Max",
    slug: "iphone-16-pro-max",
    category: "iphones-nuevos",
    price: 1399,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 16 Pro Max es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 10,
    name: "iPhone 15",
    slug: "iphone-15",
    category: "iphones-nuevos",
    price: 1399,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 15 es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 y una cámara profesional.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 6 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 26 horas de video",
      processor: "A18",
    },
  },
  {
    id: 11,
    name: "MacBook Air M3",
    slug: "macbook-air-m3",
    category: "mac",
    price: 1099,
    image: "/images/card.jpg",
    color: "Midnight",
    isNew: true,
    description: "La MacBook Air más popular, ahora con el chip M3.",
    features: ["Chip M3", "Pantalla Liquid Retina de 13.6 o 15.3 pulgadas", "Hasta 18 horas de batería"],
    specs: { storage: "256GB", screen: "13.6 pulgadas", camera: "1080p FaceTime HD", battery: "18 horas", processor: "M3" },
  },
  {
    id: 12,
    name: "iPad Pro M4",
    slug: "ipad-pro-m4",
    category: "ipad",
    price: 999,
    image: "/images/card.jpg",
    color: "Space Black",
    isNew: true,
    description: "El iPad definitivo con el alucinante chip M4.",
    features: ["Chip M4", "Pantalla Ultra Retina XDR", "Diseño imposiblemente fino"],
    specs: { storage: "256GB", screen: "11 pulgadas", camera: "12MP Wide", battery: "10 horas", processor: "M4" },
  },
  {
    id: 13,
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    category: "watch",
    price: 399,
    image: "/images/card.jpg",
    color: "Jet Black",
    isNew: true,
    description: "El Apple Watch más fino y con la pantalla más grande hasta ahora.",
    features: ["Pantalla OLED de gran ángulo", "Carga rápida", "Sensores de salud avanzados"],
    specs: { storage: "64GB", screen: "46mm", camera: "N/A", battery: "18 horas", processor: "S10" },
  },
  {
    id: 14,
    name: "AirPods Pro 2",
    slug: "airpods-pro-2",
    category: "airpods",
    price: 249,
    image: "/images/card.jpg",
    color: "White",
    isNew: false,
    description: "Audio espacial personalizado y cancelación activa de ruido.",
    features: ["Cancelación Activa de Ruido", "Modo Ambiente", "Audio Espacial"],
    specs: { storage: "N/A", screen: "N/A", camera: "N/A", battery: "6 horas (30 con estuche)", processor: "H2" },
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  // This is a simple filter. In reality, we might map 'iphones-nuevos' to a filter logic.
  // For now, I'll assume the category field matches the URL slug or I'll add logic here.
  
  if (category === 'iphones-nuevos') {
    return PRODUCTS.filter(p => p.name.includes('iPhone') && p.isNew);
  }
  
  // Fallback: filter by exact category match if I assigned it in the array
  return PRODUCTS.filter((p) => p.category === category || p.category.includes(category));
}

export function getProductsBySubcategory(category: string, subcategory: string) {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubcategory = subcategory.toLowerCase();

  return PRODUCTS.filter((p) => {
    // Basic category check (e.g. name contains "iPhone" if category is "iphone")
    const matchesCategory = p.name.toLowerCase().includes(normalizedCategory) || p.category.includes(normalizedCategory);

    // Subcategory check
    if (normalizedSubcategory === "nuevos-sellados") {
      return matchesCategory && p.isNew;
    }
    if (normalizedSubcategory === "semi-nuevos") {
      return matchesCategory && !p.isNew;
    }
    if (normalizedSubcategory === "accesorios") {
      // Assuming we have a way to identify accessories. 
      // For now, let's say if category is "accesorios" or name implies it.
      // Since we don't have explicit accessories in the mock data yet, 
      // we'll just return items that match the category but maybe are not phones?
      // Or just return everything for now to avoid empty list if no data.
      return matchesCategory && p.category === "accesorios";
    }

    return matchesCategory;
  });
}
