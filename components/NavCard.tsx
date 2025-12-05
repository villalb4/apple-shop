import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Headphones,
  Watch,
  Laptop,
  Smartphone,
  Tablet,
} from "lucide-react";

interface NavCardProps {
  title: string;
  description: string;
  href: string;
  iconName?: string;
}

const iconMap: { [key: string]: any } = {
  Sparkles,
  Headphones,
  Watch,
  Laptop,
  Smartphone,
  Tablet,
  ArrowRight,
};

export default function NavCard({
  title,
  description,
  href,
  iconName = "Sparkles",
}: NavCardProps) {
  const Icon = iconMap[iconName] || Sparkles;

  return (
    <Link
      href={href}
      className="group flex flex-col p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border border-transparent hover:border-gray-200"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-[#1d1d1f]" />
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0071e3] group-hover:translate-x-1 transition-all duration-300" />
      </div>

      <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#0071e3] transition-colors">
        {title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </Link>
  );
}
