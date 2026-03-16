import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import imgHero from "../../assets/790c8d1c422c77d0ad2b32dcc8da991a2f89ead2.png";
import imgBusiness from "../../assets/2a5ccce750257a6cd412066b1650430e77866330.png";
import imgLogo1 from "../../assets/26d019a88463060da92bcd7d8ee023520f98fb5b.png";
import imgLogo2 from "../../assets/60d857ca5d1b67b75e9a142ace59cfed2d3a444c.png";
import imgLogo3 from "../../assets/275a6b536ea4483a52862c87587eb9ab06d6636d.png";
import imgLogo4 from "../../assets/a06adaa486ba582139983b0601a017bc219369ff.png";
import imgLogo5 from "../../assets/e4feb6dfab60a1505bc70d96c2ae70fe42adf40b.png";
import imgLogo6 from "../../assets/288a44e804d391cb7bb01f196bdd66b69f3be1f8.png";
import imgNewsMain from "../../assets/2e478d79e7b326dcc4d16ba733d5a4b937e41fcd.png";
import imgNewsRight1 from "../../assets/a1c22d02857474103bfa95022bd4d287211c61f4.png";
import imgNewsRight2 from "../../assets/151f6b006bd4329d608c1ac6f06a7d69a29688e8.png";
import imgRectangle38 from "../../assets/0eab084eb9b57adc4e83e9e6152226e04930bdbe.png";
import imgRectangle15 from "../../assets/3a525a01b391f2ef294fe292ed322a59bc895a67.png";
import imgRectangle16 from "../../assets/e50d28e438621edb4132c2eee63f332c49acd3bb.png";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";
import svgPathsArrow from "../../imports/svg-r7taeovsli";

const stats = [
  { value: "70", label: "Years of\nExperience" },
  { value: "6+", label: "Business\nUnits" },
  { value: "80+", label: "Brands" },
  { value: "10", label: "Export\nCountries" },
];

const businessLines = [
  { num: "01", label: "PHARMACEUTICALS", active: true, path: "/brands/pharmaceuticals" },
  { num: "02", label: "NUTRITION", active: false, path: "/brands/nutrition" },
  { num: "03", label: "HEALING HERBS", active: false, path: "/brands/healing-herbs" },
  { num: "04", label: "PERSONAL CARE", active: false, path: "/brands/personal-care" },
  { num: "05", label: "ANIMAL HEALTH", active: false, path: "/brands/animal-health" },
];

const operationsCards = [
  {
    title: "Manufacturing Excellence",
    subtitle: "Production",
    description:
      "Tailored scientific design to ensure regulatory compliance and the highest quality standards at every step of production.",
    dark: true,
  },
  {
    title: "Quality Assurance",
    subtitle: "QA / QC",
    description:
      "Real-time engagement, pre-screening and retention strategies that maintain our world-class product standards.",
    dark: false,
  },
  {
    title: "Regulatory Affairs",
    subtitle: "Compliance",
    description:
      "Clean, validated data ready for regulatory submission, powered by advanced analytics and compliance frameworks.",
    dark: false,
  },
];

const bpmCards = [
  { 
    title: "BMI Calculator", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgRectangle38
  },
  { 
    title: "Pregnancy Due Date", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgRectangle15
  },
  { 
    title: "Waist Hip Ratio", 
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgRectangle16
  },
];

const certLogos = [
  { src: imgLogo1, alt: "SLAB" },
  { src: imgLogo2, alt: "SLIDA" },
  { src: imgLogo3, alt: "Pfizer" },
  { src: imgLogo4, alt: "WHO" },
  { src: imgLogo5, alt: "ISO" },
  { src: imgLogo6, alt: "GMP" },
];

export function Home() {
  const [activeBusinessLine, setActiveBusinessLine] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[85vh] sm:h-[90vh] lg:h-screen min-h-[600px] max-h-[1080px] overflow-hidden">
        <div className="pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 h-full">
          <div className="relative h-full rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
            <ImageWithFallback
              src={imgHero}
              alt="Astron Pharmaceuticals"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-[20px] lg:rounded-[30px]" />

            {/* Navbar Overlay */}
            <Navbar />

            {/* Hero content */}
            <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-6 lg:px-16 pb-12 sm:pb-16 lg:pb-24 xl:pb-32">
              <div className="max-w-2xl">
                <h1 className="text-white text-[32px] sm:text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-[-1.5px] leading-[1.1] sm:leading-tight mb-3 sm:mb-4 lg:mb-6">
                  Sustainable<br />
                  Pharmaceutical<br />
                  Innovation
                </h1>
                <p className="text-white/90 text-[14px] sm:text-sm lg:text-lg leading-relaxed max-w-xl mb-6 sm:mb-6 lg:mb-10 tracking-[-0.2px]">
                  Leading the way in healthcare through quality manufacturing and innovative pharmaceutical solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/partner"
                    className="inline-flex items-center gap-2 bg-[#2f872d] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#256a23] transition-all active:scale-95 shadow-lg shadow-black/20"
                  >
                    Partner With us
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 border border-white/40 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all active:scale-95"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
            </div>

            {/* Arrow next */}
            <div className="hidden xl:block absolute right-10 xl:right-14 top-1/2 -translate-y-1/2">
              <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full border-2 border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer">
                <svg width="30" height="22" viewBox="0 0 34 26" fill="none" className="xl:w-[34px] xl:h-[26px]">
                  <path d="M1 13H33M21 1L33 13L21 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT US STATEMENT ─── */}
      <section className="py-10 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[#2e2e2e] text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4 lg:mb-6">About Us</p>
          <h2 className="text-[#505050] text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.5px] sm:tracking-[-1.04px] leading-tight mb-4 sm:mb-6 lg:mb-8 max-w-5xl mx-auto px-2">
            Committed to the development of the local health care manufacturing industry in Sri Lanka.
          </h2>
          <p className="text-[#b9b9b9] text-sm sm:text-base lg:text-xl xl:text-2xl font-semibold leading-relaxed max-w-5xl mx-auto tracking-[-0.84px] px-2">
            The company was incorporated in 1956 creating a milestone in the pharmaceutical industry by setting up the first pharmaceutical manufacturing facility in the country.
          </p>

          {/* Learn more button */}
          <div className="flex justify-center mt-5 sm:mt-6 lg:mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#f9f9f9] text-[#868686] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold hover:bg-gray-100 transition-colors touch-manipulation"
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 lg:pb-20">
        <div className="max-w-[1180px] mx-auto">
          <div className="border-2 border-[#2f872d] rounded-[20px] lg:rounded-[30px] px-4 sm:px-6 lg:px-10 py-6 lg:py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {stats.map((stat, i) => (
              <div key={stat.value} className="flex items-center gap-4">
                {i > 0 && (
                  <div className="hidden sm:block w-px h-12 lg:h-14 bg-[#9f9f9f]/40" />
                )}
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#505050] tracking-[-1.24px]">{stat.value}</span>
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#505050] whitespace-pre-line leading-snug tracking-[-0.2px]">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR BUSINESS ─── */}
      <section className="py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left image */}
            <div className="w-full lg:w-[42%]">
              <div className="rounded-[20px] sm:rounded-[24px] lg:rounded-[34px] overflow-hidden h-[350px] sm:h-[400px] lg:h-[580px]">
                <img
                  src={imgBusiness}
                  alt="Our Business"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Pagination dots */}
              <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className={`rounded-full transition-all ${i === 0 ? "w-7 sm:w-8 h-2.5 sm:h-3 bg-[#2f872d]" : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#2f872d]/23"}`}
                  />
                ))}
              </div>
            </div>

            {/* Right list */}
            <div className="w-full lg:w-[58%]">
              <p className="text-[#2e2e2e] text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-6 lg:mb-8">Our Business</p>
              <div className="space-y-0">
                {businessLines.map((line, i) => (
                  <Link
                    key={line.num}
                    to={line.path}
                    onMouseEnter={() => setActiveBusinessLine(i)}
                    className={`w-full flex items-center justify-between py-3 sm:py-4 lg:py-5 border-b transition-colors text-left group ${
                      activeBusinessLine === i
                        ? "border-[#2f872d]"
                        : "border-gray-200 hover:border-[#2f872d]/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
                      <span className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-[-0.8px] transition-colors ${
                        activeBusinessLine === i ? "text-[#2f872d]" : "text-[#424242]"
                      }`}>
                        {line.num}
                      </span>
                      <span className={`text-base sm:text-xl lg:text-2xl xl:text-4xl font-semibold tracking-[0.4px] transition-colors ${
                        activeBusinessLine === i ? "text-[#2f872d]" : "text-[#424242]"
                      }`}>
                        {line.label}
                      </span>
                    </div>
                    <div className="w-[48px] h-[36px] sm:w-[56px] sm:h-[40px] lg:w-[76px] lg:h-[52px] bg-[#f9f9f9] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="16" viewBox="0 0 34 26" fill="none" className="sm:w-[24px] sm:h-[18px] lg:w-[34px] lg:h-[26px]">
                        <path d={`M1 13H33M21 1L33 13L21 25`} stroke={activeBusinessLine === i ? "#2f872d" : "#424242"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <Link to="/brands/pharmaceuticals" className="inline-flex items-center gap-2 text-[#3b3b3b] text-sm sm:text-base font-semibold underline underline-offset-4 hover:text-[#2f872d] transition-colors">
                  See more our Business
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONS / SERVICES ─── */}
      <section className="py-12 lg:py-24 px-6 lg:px-8 bg-[#ecffec] border-y border-[#d3d3d3]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#2e2e2e] text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 lg:mb-4">Operations</p>
          <h2 className="text-[#505050] text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-[-1.04px] leading-tight mb-10 lg:mb-16 max-w-2xl">
            Committed to the development of the local health care
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {operationsCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 h-[280px] lg:h-[329px] flex flex-col justify-between relative overflow-hidden ${
                  card.dark ? "bg-[#2f872d]" : "bg-white border border-[#d3d3d3]"
                }`}
              >
                {/* Icon top-right */}
                <div className="flex justify-between items-start">
                  <p className={`text-xs lg:text-sm font-semibold opacity-70 ${card.dark ? "text-white" : "text-black"}`}>
                    {card.subtitle}
                  </p>
                  <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center ${card.dark ? "bg-white" : "bg-white border border-gray-200"}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f872d" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lg:w-5 lg:h-5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className={`text-base lg:text-xl font-semibold leading-[1.2] mb-2 lg:mb-3 tracking-[-0.45px] ${card.dark ? "text-white" : "text-black opacity-60"}`}>
                    {card.description}
                  </p>
                </div>
                <p className={`text-xl lg:text-2xl font-semibold tracking-[-0.45px] ${card.dark ? "text-white" : "text-black"}`}>
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST / NEWS SECTION ─── */}
      <section className="py-12 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[#505050] text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-[-1.04px] leading-tight mb-10 lg:mb-16 text-center max-w-4xl mx-auto">
            Committed to the development of the local health care manufacturing industry in Sri Lanka.
          </h2>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
            {/* Left large block */}
            <div className="w-full lg:w-[38%] relative">
              <div className="rounded-[24px] lg:rounded-[34px] overflow-hidden h-[500px] lg:h-full lg:min-h-[700px]">
                <img
                  src={imgNewsMain}
                  alt="Latest news"
                  className="w-full h-full object-cover rounded-br-[24px] lg:rounded-br-[34px] rounded-tr-[24px] lg:rounded-tr-[34px]"
                />
              </div>
              {/* Overlay content */}
              <div className="absolute bottom-6 lg:bottom-10 left-4 lg:left-8 right-4 lg:right-8">
                <p className="text-[#505050] text-xl lg:text-3xl font-semibold tracking-[-0.76px] leading-[1.4] lg:leading-[43px] mb-3 lg:mb-4 drop-shadow-sm bg-white/70 backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 lg:px-4 py-2 lg:py-3">
                  Committed to the development of the local health care
                </p>
                <p className="text-[#505050] text-sm lg:text-base leading-6 lg:leading-7 tracking-[-0.18px] mb-4 lg:mb-6 bg-white/70 backdrop-blur-sm rounded-xl lg:rounded-2xl px-3 lg:px-4 py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button className="flex items-center gap-2 bg-[#2f872d] text-white font-semibold px-5 lg:px-6 py-2.5 lg:py-3 rounded-full text-sm hover:bg-[#005400] transition-colors">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right two stacked images */}
            <div className="w-full lg:w-[62%] flex flex-col gap-5 lg:gap-6">
              <div className="relative rounded-[24px] lg:rounded-[34px] overflow-hidden h-[240px] lg:h-[290px] group">
                <img
                  src={imgNewsRight1}
                  alt="Medical Equipment Show"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-black/40 rounded-[24px] lg:rounded-[34px]" />
                <p className="absolute bottom-4 lg:bottom-6 left-4 lg:left-8 text-white text-lg lg:text-2xl font-semibold tracking-[-0.56px] leading-7 lg:leading-9 max-w-[250px]">
                  Medical Equipment show
                </p>
              </div>
              <div className="relative rounded-[24px] lg:rounded-[34px] overflow-hidden h-[240px] lg:h-[290px] group">
                <img
                  src={imgNewsRight2}
                  alt="Medical Equipment Show"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-black/40 rounded-[24px] lg:rounded-[34px]" />
                <p className="absolute bottom-4 lg:bottom-6 left-4 lg:left-8 text-white text-lg lg:text-2xl font-semibold tracking-[-0.56px] leading-7 lg:leading-9 max-w-[250px]">
                  Medical Equipment show
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATED BY ─── */}
      <section className="py-10 lg:py-16 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#2e2e2e] text-xs lg:text-sm font-semibold uppercase tracking-widest text-center mb-8 lg:mb-12">Certificated By</p>
          <div className="flex items-center justify-center gap-8 lg:gap-12 xl:gap-20 flex-wrap">
            {certLogos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center h-16 lg:h-24 w-20 lg:w-28">
                <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATIONS / BPM CARDS ─── */}
      <section className="py-12 lg:py-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[#2e2e2e] text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 lg:mb-4">Operations</p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start mb-10 lg:mb-16">
            <h2 className="text-[#505050] text-2xl lg:text-4xl xl:text-5xl font-semibold tracking-[-1.04px] leading-tight w-full lg:w-1/2">
              Committed to the development of the local health care
            </h2>
            <p className="text-[#a7a7a7] text-base lg:text-lg leading-relaxed w-full lg:w-1/2 lg:text-right tracking-[-0.36px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {bpmCards.map((card, i) => (
              <div
                key={i}
                className="bg-white relative rounded-[30px] lg:rounded-[37.67px] w-full cursor-pointer group hover:shadow-xl transition-all duration-300 border-[#ddd] border-[1px] md:border-[2.5px] lg:border-[2.883px]"
              >
                <div className="p-4 lg:p-[17px]">
                  {/* Image Area */}
                  <div className="relative aspect-[16/9] lg:h-[176px] overflow-hidden rounded-[24px] lg:rounded-[30px] mb-4 lg:mb-6">
                    <img 
                      alt={card.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={card.image} 
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="px-1 pb-2 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg lg:text-[20px] text-black mb-1">
                        {card.title}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[11px] lg:text-[13px] text-[#858585] line-clamp-2 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    
                    {/* Arrow button */}
                    <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-[#2f872d15] rounded-full flex items-center justify-center group-hover:bg-[#2f872d25] transition-colors">
                      <ArrowRight size={20} className="text-[#005400]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="px-4 lg:px-6 pb-6 lg:pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#005400] rounded-[24px] lg:rounded-[30px] min-h-[200px] lg:h-[262px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-0 gap-6 lg:gap-0">
            {/* Decorative Leaf Background - Hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-white text-3xl lg:text-5xl xl:text-6xl font-semibold tracking-[-1.16px] leading-tight max-w-2xl">
                Are you ready to partner with us?
              </h2>
            </div>

            <Link
              to="/partner"
              className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-6 lg:px-8 py-3 lg:py-5 rounded-full text-base lg:text-lg hover:bg-white transition-colors flex items-center gap-2"
            >
              Let's start
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005400">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#005400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
