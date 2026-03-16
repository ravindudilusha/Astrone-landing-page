import { Link } from "react-router";
import { Pill, Leaf, Flower2, Sparkles, Heart, PawPrint } from "lucide-react";

const brands = [
  {
    name: "Pharmaceuticals",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: Pill,
    href: "/brands/pharmaceuticals",
  },
  {
    name: "Nutrition",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: Sparkles,
    href: "/brands/nutrition",
  },
  {
    name: "Healing Herbs",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: Leaf,
    href: "/brands/healing-herbs",
  },
  {
    name: "Personal Care",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: Flower2,
    href: "/brands/personal-care",
  },
  {
    name: "Animal Health",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: Heart,
    href: "/brands/animal-health",
  },
  {
    name: "Optipet",
    description: "Lorem ipsum dolor sit amet, consetetur adipiscing elit",
    icon: PawPrint,
    href: "/brands/optipet",
  },
];

export function BrandsDropdown() {
  return (
    <div className="bg-white rounded-[30px] shadow-lg w-[620px] p-[24px]">
      <div className="grid grid-cols-2 gap-x-[36px] gap-y-[8px]">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            to={brand.href}
            className="flex items-center gap-[17px] rounded-[7px] px-[12px] py-[10px] hover:bg-[rgba(47,135,45,0.08)] transition-colors group"
          >
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-[58px] h-[58px] rounded-[7px] bg-[#2f872d] group-hover:bg-[#005400] transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <brand.icon className="w-[24px] h-[24px] text-white" strokeWidth={2} />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[2px] flex-1 min-w-0">
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] text-[#4f4f4f]">
                {brand.name}
              </p>
              <p className="font-['Plus_Jakarta_Sans'] font-medium text-[9px] text-[#878787] tracking-[-0.18px] leading-[1.3]">
                {brand.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
