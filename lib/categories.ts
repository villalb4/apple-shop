/**
 * Navigation items configuration for Header and MobileMenu
 * This file defines the structure of the navigation menus
 */

export const NAV_ITEMS = [
  {
    name: "iPhone",
    mainLink: {
      title: "Nuevos Sellados",
      href: "/iphone/nuevos-sellados",
      items: [
        "iPhone 17 Pro Max",
        "iPhone 17 Pro",
        "iPhone Air",
        "iPhone 17",
        "iPhone 16 Pro",
        "iPhone 16",
        "iPhone SE",
      ],
    },
    cards: [
      {
        title: "Semi Nuevos",
        description: "Equipos verificados con garantía y batería al 100%",
        href: "/iphone/semi-nuevos",
        iconName: "Smartphone",
      },
      {
        title: "Accesorios",
        description: "Fundas MagSafe, cargadores y protectores",
        href: "/iphone/accesorios",
        iconName: "Headphones",
      },
    ],
  },
  {
    name: "Mac",
    mainLink: {
      title: "Nuevos Sellados",
      href: "/mac/nuevos-sellados",
      items: [
        "MacBook Air M3",
        "MacBook Pro M4",
        "iMac M4",
        "Mac mini M4",
        "Mac Studio M2",
      ],
    },
    cards: [
      {
        title: "Semi Nuevos",
        description: "MacBooks reacondicionadas certificadas",
        href: "/mac/semi-nuevos",
        iconName: "Laptop",
      },
      {
        title: "Accesorios",
        description: "Magic Mouse, Teclados y adaptadores",
        href: "/mac/accesorios",
        iconName: "Sparkles",
      },
    ],
  },
  {
    name: "iPad",
    mainLink: {
      title: "Nuevos Sellados",
      href: "/ipad/nuevos-sellados",
      items: [
        "iPad Pro M4",
        "iPad Air M2",
        "iPad 10",
        "iPad mini 7",
      ],
    },
    cards: [
      {
        title: "Semi Nuevos",
        description: "iPads en excelente estado garantizados",
        href: "/ipad/semi-nuevos",
        iconName: "Tablet",
      },
      {
        title: "Accesorios",
        description: "Apple Pencil, teclados y fundas",
        href: "/ipad/accesorios",
        iconName: "Sparkles",
      },
    ],
  },
  {
    name: "Watch",
    mainLink: {
      title: "Nuevos Sellados",
      href: "/watch/nuevos-sellados",
      items: [
        "Apple Watch Series 10",
        "Apple Watch Ultra 2",
        "Apple Watch SE",
        "Edición Nike",
        "Edición Hermès",
      ],
    },
    cards: [
      {
        title: "Semi Nuevos",
        description: "Apple Watch verificados y funcionales",
        href: "/watch/semi-nuevos",
        iconName: "Watch",
      },
      {
        title: "Accesorios",
        description: "Correas de todos los estilos y colores",
        href: "/watch/accesorios",
        iconName: "Sparkles",
      },
    ],
  },
  {
    name: "AirPods",
    mainLink: {
      title: "Nuevos Sellados",
      href: "/airpods/nuevos-sellados",
      items: [
        "AirPods Pro 2 (USB-C)",
        "AirPods 4",
        "AirPods 4 ANC",
        "AirPods Max",
      ],
    },
    cards: [
      {
        title: "Semi Nuevos",
        description: "AirPods limpios y desinfectados",
        href: "/airpods/semi-nuevos",
        iconName: "Headphones",
      },
      {
        title: "Accesorios",
        description: "Estuches protectores y cables",
        href: "/airpods/accesorios",
        iconName: "Sparkles",
      },
    ],
  },
];
