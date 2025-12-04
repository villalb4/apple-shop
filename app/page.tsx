import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import InstagramFeed from "@/components/InstagramFeed";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-0">
      <Hero />
      <FeaturedProducts />
      <Features />
      <InstagramFeed />
      <FAQAccordion />
    </div>
  );
}
