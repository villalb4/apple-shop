import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import InstagramFeed from "@/components/InstagramFeed";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import ScrollingText from "@/components/ScrollingText";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-0 flex flex-col gap-20 pb-20">
      <Hero />
      <FeaturedProducts />
      <ScrollingText />
      <InstagramFeed />
      <Features />
      <FAQAccordion />
    </div>
  );
}
