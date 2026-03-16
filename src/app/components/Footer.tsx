import { Link } from "react-router";
import imgAstronLogo1 from "../../assets/89c7fd421088a06c87c99545596a5c79e1d21610.png";
import svgPaths from "../../imports/svg-d0is9wu1s6";

function FacebookIcon() {
  return (
    <svg className="w-[7px] h-[14px]" fill="none" viewBox="0 0 7 14">
      <path d={svgPaths.p50d1c80} fill="white" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-[18px] h-[14px]" fill="none" viewBox="0 0 18 14">
      <path d={svgPaths.pd4cb240} fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-[16px] h-[15px]" fill="none" viewBox="0 0 16 15">
      <path d={svgPaths.p21cf7400} fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-[16px] h-[18px]" fill="none" viewBox="0 0 16 18">
      <path d={svgPaths.p3941a00} fill="white" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p3972a900} fill="white" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
      <path d={svgPaths.p27494700} fill="white" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-[14px] h-[19px]" fill="none" viewBox="0 0 14 19">
      <path d={svgPaths.p239f000} fill="white" />
    </svg>
  );
}

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "BA Partner", path: "/partner" },
  { label: "Careers", path: "/careers" },
  { label: "CSR", path: "/csr" },
  { label: "Feedback", path: "/feedback" },
  { label: "News and Events", path: "/news-events" },
];

const ourBrands = [
  { label: "Pharmaceuticals", path: "/brands/pharmaceuticals" },
  { label: "Nutrition", path: "/brands/nutrition" },
  { label: "Healing Herbs", path: "/brands/healing-herbs" },
  { label: "Personal Care", path: "/brands/personal-care" },
  { label: "Animal Health", path: "/brands/animal-health" },
  { label: "Optipet", path: "/brands/optipet" },
];

const ourOperations = [
  { label: "R&D", path: "/operations/rnd" },
  { label: "Manufacturing", path: "/operations/manufacturing" },
  { label: "Quality", path: "/operations/quality-assurance" },
];

interface FooterProps {
  fullWidth?: boolean;
}

export function Footer({ fullWidth = false }: FooterProps) {
  return (
    <footer
      className={`bg-[#1e1e1e] text-white relative overflow-hidden ${
        fullWidth ? "" : "rounded-tl-[30px] rounded-tr-[30px]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
          {/* Left: Brand + CTA */}
          <div className="flex flex-col gap-8 flex-shrink-0">
            <img
              src={imgAstronLogo1}
              alt="Astron Logo"
              className="h-[58px] w-[275px] object-contain"
            />
            <div className="flex flex-col gap-6">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[58px] leading-[normal] tracking-[-1.16px]">
                Let's Discuss!
              </p>
              <Link to="/contact" className="w-fit bg-[#f9f9f9] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-bold px-[40px] py-[14px] rounded-[999px] text-[15px] hover:bg-white transition-colors">
                Contact us
              </Link>
            </div>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-[34px] h-[34px] rounded-full bg-[#39cb74] flex items-center justify-center hover:bg-[#2f872d] transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-[34px] h-[34px] rounded-full bg-[#39cb74] flex items-center justify-center hover:bg-[#2f872d] transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                className="w-[34px] h-[34px] rounded-full bg-[#39cb74] flex items-center justify-center hover:bg-[#2f872d] transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                className="w-[34px] h-[34px] rounded-full bg-[#39cb74] flex items-center justify-center hover:bg-[#2f872d] transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-[115px] flex-1">
            {/* Navigation */}
            <div>
              <h4 className="font-['Roboto',sans-serif] font-semibold text-[18px] tracking-[-0.18px] mb-[24px]">
                Navigation
              </h4>
              <ul className="space-y-[18px]">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px] leading-[14px] text-white hover:text-[#39cb74] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h4 className="font-['Roboto',sans-serif] font-semibold text-[18px] tracking-[-0.18px] mb-[24px]">
                Our Brands
              </h4>
              <ul className="space-y-[18px]">
                {ourBrands.map((brand) => (
                  <li key={brand.label}>
                    <Link
                      to={brand.path}
                      className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px] leading-[14px] text-white hover:text-[#39cb74] transition-colors"
                    >
                      {brand.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Operations */}
            <div>
              <h4 className="font-['Roboto',sans-serif] font-semibold text-[18px] tracking-[-0.18px] mb-[24px] whitespace-nowrap">
                Our Operations
              </h4>
              <ul className="space-y-[18px]">
                {ourOperations.map((operation) => (
                  <li key={operation.label}>
                    <Link
                      to={operation.path}
                      className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px] leading-[14px] text-white hover:text-[#39cb74] transition-colors"
                    >
                      {operation.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Roboto',sans-serif] font-semibold text-[18px] tracking-[-0.18px] mb-[24px]">
                Contact
              </h4>
              <ul className="space-y-[18px]">
                <li className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <span className="font-['Roboto',sans-serif] font-bold text-[14px] tracking-[-0.28px] leading-[14px] text-white">
                    +94 11 22 33334
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                    <EmailIcon />
                  </div>
                  <span className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px] leading-[14px] text-white">
                    contact@example.com
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-[24px] h-[24px] flex items-center justify-center flex-shrink-0">
                    <LocationIcon />
                  </div>
                  <span className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px] leading-[24px] text-white">
                    ABC Roard Bandaranaike Mawatha, Colombo 01
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#8f8f8f]">
          <p className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px]">
            @2026 . All Rights Reserved
          </p>
          <div className="flex gap-4">
            <p className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px]">
              Privacy and Policies.
            </p>
            <p className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px]">
              Terms and conditions
            </p>
          </div>
          <p className="font-['Roboto',sans-serif] font-normal text-[14px] tracking-[-0.28px]">
            Designed and Developed by Ellipza Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
