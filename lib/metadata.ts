import { Metadata } from "next";

interface GenerateMetadataParams {
  subtitle: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const BASE_URL = "https://tudominio.com";
const SITE_NAME = "Nombre Tienda";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export function generateSEOMetadata({
  subtitle,
  description,
  keywords = [],
  image = DEFAULT_IMAGE,
  url = BASE_URL,
}: GenerateMetadataParams): Metadata {
  const fullTitle = `${SITE_NAME} | ${subtitle}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "iPhone",
      "Apple",
      "accesorios Apple",
      "tienda Apple",
      ...keywords,
    ],
    authors: [{ name: "Tu Empresa" }],
    creator: "Tu Empresa",

    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: subtitle,
        },
      ],
      locale: "es_ES",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },
  };
}
