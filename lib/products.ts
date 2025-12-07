import { CategorySlug, SubcategorySlug } from "./categories-config";

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: CategorySlug;
  subcategory: SubcategorySlug;
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
  images: string[];
}

export const PRODUCTS: Product[] = [
  // iPhone - Nuevos Sellados
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    slug: "iphone-17-pro-max",
    category: "iphone",
    subcategory: "nuevo",
    price: 1399,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 17 Pro Max es el smartphone más avanzado de Apple, con un diseño de titanio premium, el chip A18 Pro y una cámara profesional de última generación.",
    features: [
      "Pantalla Super Retina XDR de 6.9 pulgadas",
      "Chip A18 Pro con GPU de 6 núcleos",
      "Sistema de cámaras Pro con teleobjetivo 5x",
      "Hasta 33 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3.2",
    ],
    specs: {
      storage: "256GB",
      screen: "6.9 pulgadas",
      camera: "48MP + 48MP + 12MP",
      battery: "Hasta 33 horas de video",
      processor: "A18 Pro",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 2,
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    category: "iphone",
    subcategory: "nuevo",
    price: 1199,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: true,
    description:
      "El iPhone 17 Pro combina potencia profesional con un diseño elegante en titanio, perfecto para creativos y profesionales.",
    features: [
      "Pantalla Super Retina XDR de 6.3 pulgadas",
      "Chip A18 Pro con GPU de 6 núcleos",
      "Sistema de cámaras Pro",
      "Hasta 29 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3.2",
    ],
    specs: {
      storage: "256GB",
      screen: "6.3 pulgadas",
      camera: "48MP + 48MP + 12MP",
      battery: "Hasta 29 horas de video",
      processor: "A18 Pro",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 3,
    name: "iPhone Air",
    slug: "iphone-air",
    category: "iphone",
    subcategory: "nuevo",
    price: 1099,
    image: "/images/card.jpg",
    color: "Azul",
    isNew: true,
    description:
      "El iPhone Air redefine la delgadez con un diseño ultraligero sin comprometer el rendimiento.",
    features: [
      "Pantalla Super Retina XDR de 6.6 pulgadas",
      "Chip A18 con GPU de 5 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 27 horas de reproducción de video",
      "Dynamic Island",
      "USB-C con USB 3",
    ],
    specs: {
      storage: "128GB",
      screen: "6.6 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 27 horas de video",
      processor: "A18",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 4,
    name: "iPhone 17",
    slug: "iphone-17",
    category: "iphone",
    subcategory: "nuevo",
    price: 999,
    image: "/images/card.jpg",
    color: "Negro",
    isNew: true,
    description:
      "El iPhone 17 ofrece todas las funciones esenciales de iPhone con el rendimiento del chip A18.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A18 con GPU de 5 núcleos",
      "Sistema de cámaras avanzado",
      "Hasta 26 horas de reproducción de video",
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
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 5,
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    category: "iphone",
    subcategory: "nuevo",
    price: 1099,
    image: "/images/card.jpg",
    color: "Titanio Azul",
    isNew: true,
    description:
      "iPhone 16 Pro con chip A17 Pro, cámara profesional y diseño en titanio.",
    features: [
      "Pantalla Super Retina XDR de 6.3 pulgadas",
      "Chip A17 Pro",
      "Sistema de cámaras Pro",
      "Hasta 27 horas de reproducción de video",
      "Dynamic Island",
      ],
    specs: {
      storage: "256GB",
      screen: "6.3 pulgadas",
      camera: "48MP + 12MP + 12MP",
      battery: "Hasta 27 horas de video",
      processor: "A17 Pro",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 6,
    name: "iPhone 16",
    slug: "iphone-16",
    category: "iphone",
    subcategory: "nuevo",
    price: 799,
    image: "/images/card.jpg",
    color: "Rosa",
    isNew: true,
    description:
      "iPhone 16 con chip A17 y todas las funciones esenciales de iPhone.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A17",
      "Cámara dual de 48MP",
      "Hasta 22 horas de reproducción de video",
      "Dynamic Island",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP",
      battery: "Hasta 22 horas de video",
      processor: "A17",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 7,
    name: "iPhone SE",
    slug: "iphone-se",
    category: "iphone",
    subcategory: "nuevo",
    price: 429,
    image: "/images/card.jpg",
    color: "Medianoche",
    isNew: true,
    description:
      "iPhone SE combina el diseño clásico con el potente chip A15 Bionic.",
    features: [
      "Pantalla Retina HD de 4.7 pulgadas",
      "Chip A15 Bionic",
      "Touch ID",
      "Cámara de 12MP",
      "Resistencia al agua IP67",
    ],
    specs: {
      storage: "64GB",
      screen: "4.7 pulgadas",
      camera: "12MP",
      battery: "Hasta 15 horas de video",
      processor: "A15 Bionic",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },

  // iPhone - Semi Nuevos
  {
    id: 8,
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    category: "iphone",
    subcategory: "semi-nuevo",
    price: 999,
    image: "/images/card.jpg",
    color: "Titanio Natural",
    isNew: false,
    description:
      "iPhone 15 Pro Max reacondicionado certificado, con batería al 100% y garantía de 6 meses.",
    features: [
      "Pantalla Super Retina XDR de 6.7 pulgadas",
      "Chip A17 Pro",
      "Sistema de cámaras Pro",
      "Batería reemplazada al 100%",
      "Garantía de 6 meses",
    ],
    specs: {
      storage: "256GB",
      screen: "6.7 pulgadas",
      camera: "48MP + 12MP + 12MP",
      battery: "100% capacidad",
      processor: "A17 Pro",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 9,
    name: "iPhone 14 Pro",
    slug: "iphone-14-pro",
    category: "iphone",
    subcategory: "semi-nuevo",
    price: 749,
    image: "/images/card.jpg",
    color: "Morado Oscuro",
    isNew: false,
    description:
      "iPhone 14 Pro reacondicionado con Dynamic Island y cámara de 48MP.",
    features: [
      "Pantalla Super Retina XDR de 6.1 pulgadas",
      "Chip A16 Bionic",
      "Dynamic Island",
      "Batería al 100%",
      "Garantía de 6 meses",
    ],
    specs: {
      storage: "128GB",
      screen: "6.1 pulgadas",
      camera: "48MP + 12MP + 12MP",
      battery: "100% capacidad",
      processor: "A16 Bionic",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },

  // Mac - Nuevos Sellados
  {
    id: 10,
    name: "MacBook Air M3",
    slug: "macbook-air-m3",
    category: "mac",
    subcategory: "nuevo",
    price: 1099,
    image: "/images/card.jpg",
    color: "Midnight",
    isNew: true,
    description:
      "La MacBook Air más popular, ahora con el chip M3 para un rendimiento excepcional.",
    features: [
      "Chip M3 con CPU de 8 núcleos",
      "Pantalla Liquid Retina de 13.6 pulgadas",
      "Hasta 18 horas de batería",
      "MagSafe 3",
      "Diseño ultradelgado",
    ],
    specs: {
      storage: "256GB SSD",
      screen: "13.6 pulgadas",
      camera: "1080p FaceTime HD",
      battery: "18 horas",
      processor: "M3",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 11,
    name: "MacBook Pro M4",
    slug: "macbook-pro-m4",
    category: "mac",
    subcategory: "nuevo",
    price: 1599,
    image: "/images/card.jpg",
    color: "Space Black",
    isNew: true,
    description:
      "MacBook Pro con chip M4, perfecta para profesionales creativos.",
    features: [
      "Chip M4 con CPU de 10 núcleos",
      "Pantalla Liquid Retina XDR de 14 pulgadas",
      "Hasta 22 horas de batería",
      "Puertos Thunderbolt 4",
      "Touch ID",
    ],
    specs: {
      storage: "512GB SSD",
      screen: "14 pulgadas",
      camera: "1080p FaceTime HD",
      battery: "22 horas",
      processor: "M4",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 12,
    name: "iMac M4",
    slug: "imac-m4",
    category: "mac",
    subcategory: "nuevo",
    price: 1299,
    image: "/images/card.jpg",
    color: "Azul",
    isNew: true,
    description:
      "iMac con pantalla 4.5K Retina y el potente chip M4 en un diseño icónico.",
    features: [
      "Chip M4",
      "Pantalla Retina 4.5K de 24 pulgadas",
      "Cámara FaceTime HD 1080p",
      "Sistema de sonido de seis altavoces",
      "Magic Keyboard y Magic Mouse incluidos",
    ],
    specs: {
      storage: "256GB SSD",
      screen: "24 pulgadas 4.5K",
      camera: "1080p FaceTime HD",
      battery: "N/A",
      processor: "M4",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },

  // iPad - Nuevos Sellados
  {
    id: 13,
    name: "iPad Pro M4",
    slug: "ipad-pro-m4",
    category: "ipad",
    subcategory: "nuevo",
    price: 999,
    image: "/images/card.jpg",
    color: "Space Black",
    isNew: true,
    description:
      "El iPad definitivo con el alucinante chip M4 y pantalla Ultra Retina XDR.",
    features: [
      "Chip M4",
      "Pantalla Ultra Retina XDR de 11 pulgadas",
      "Diseño imposiblemente fino",
      "Compatibilidad con Apple Pencil Pro",
      "Face ID",
    ],
    specs: {
      storage: "256GB",
      screen: "11 pulgadas",
      camera: "12MP Wide",
      battery: "10 horas",
      processor: "M4",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 14,
    name: "iPad Air M2",
    slug: "ipad-air-m2",
    category: "ipad",
    subcategory: "nuevo",
    price: 599,
    image: "/images/card.jpg",
    color: "Azul",
    isNew: true,
    description:
      "iPad Air con chip M2, perfecto equilibrio entre rendimiento y precio.",
    features: [
      "Chip M2",
      "Pantalla Liquid Retina de 10.9 pulgadas",
      "Compatibilidad con Apple Pencil (2.ª generación)",
      "Touch ID",
      "USB-C",
    ],
    specs: {
      storage: "128GB",
      screen: "10.9 pulgadas",
      camera: "12MP Wide",
      battery: "10 horas",
      processor: "M2",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },

  // Apple Watch - Nuevos Sellados
  {
    id: 15,
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    category: "watch",
    subcategory: "nuevo",
    price: 399,
    image: "/images/card.jpg",
    color: "Jet Black",
    isNew: true,
    description:
      "El Apple Watch más fino y con la pantalla más grande hasta ahora.",
    features: [
      "Pantalla OLED de gran ángulo",
      "Carga rápida",
      "Sensores de salud avanzados",
      "Resistencia al agua 50m",
      "Detección de caídas y choques",
    ],
    specs: {
      storage: "64GB",
      screen: "46mm",
      camera: "N/A",
      battery: "18 horas",
      processor: "S10",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 16,
    name: "Apple Watch Ultra 2",
    slug: "apple-watch-ultra-2",
    category: "watch",
    subcategory: "nuevo",
    price: 799,
    image: "/images/card.jpg",
    color: "Titanio",
    isNew: true,
    description:
      "Apple Watch Ultra 2 diseñado para aventuras extremas y deportes de alto rendimiento.",
    features: [
      "Caja de titanio de 49mm",
      "Pantalla Always-On más brillante",
      "Resistencia al agua 100m",
      "Batería de hasta 36 horas",
      "Sirena de emergencia",
    ],
    specs: {
      storage: "64GB",
      screen: "49mm",
      camera: "N/A",
      battery: "36 horas",
      processor: "S9",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },

  // AirPods - Nuevos Sellados
  {
    id: 17,
    name: "AirPods Pro 2",
    slug: "airpods-pro-2",
    category: "airpods",
    subcategory: "nuevo",
    price: 249,
    image: "/images/card.jpg",
    color: "Blanco",
    isNew: true,
    description:
      "Audio espacial personalizado y cancelación activa de ruido de última generación.",
    features: [
      "Cancelación Activa de Ruido",
      "Modo Ambiente adaptativo",
      "Audio Espacial personalizado",
      "Chip H2",
      "Resistencia al agua IPX4",
    ],
    specs: {
      storage: "N/A",
      screen: "N/A",
      camera: "N/A",
      battery: "6 horas (30 con estuche)",
      processor: "H2",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
  {
    id: 18,
    name: "AirPods Max",
    slug: "airpods-max",
    category: "airpods",
    subcategory: "nuevo",
    price: 549,
    image: "/images/card.jpg",
    color: "Plata",
    isNew: true,
    description:
      "Auriculares over-ear con audio de alta fidelidad y cancelación de ruido premium.",
    features: [
      "Cancelación Activa de Ruido",
      "Audio Espacial",
      "Chip H1",
      "Almohadillas de malla acústica",
      "Digital Crown para control preciso",
    ],
    specs: {
      storage: "N/A",
      screen: "N/A",
      camera: "N/A",
      battery: "20 horas",
      processor: "H1",
    },
    images: ["/images/card.jpg", "/images/card.jpg", "/images/card.jpg", "/images/card.jpg"],
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductBySlugAndCategory(
  slug: string,
  category: string
): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug && p.category === category);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductsBySubcategory(
  category: string,
  subcategory: string
): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );
}

export function getRelatedProducts(
  productId: number,
  limit: number = 4
): Product[] {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return [];

  return PRODUCTS.filter(
    (p) =>
      p.id !== productId &&
      p.category === product.category &&
      p.subcategory === product.subcategory
  ).slice(0, limit);
}
