import { useState } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import imgHero from "../../assets/91146239001a34b4c3f2bf85a5219da24a67a479.png";
import imgCsrVideo from "../../assets/e72c58633226c48f00b4911fc5d192265834ce53.png";
import { ScrollAnimation } from "../components/ScrollAnimation";
import svgPaths from "../../imports/svg-a9g5l9pyvc";
import svgPathsCTA from "../../imports/svg-jzjch5hoam";

// CSR Impact Projects Page
const stats = [
  { value: "500+", label: "Health\nCamps" },
  { value: "1000+", label: "Trees\nPlanted" },
  { value: "Millions", label: "In\nDonations" },
  { value: "1000+", label: "Scholars" },
];

const impactProjects = [
  {
    id: 1,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Education",
    image: "https://images.unsplash.com/photo-1629805019269-356645aee7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzE5MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Education",
    image: "https://images.unsplash.com/photo-1629805019269-356645aee7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzE5MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMxOTI2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1710361006404-a13d01802ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMHRyZWVzJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzczMTkyNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Community",
    image: "https://images.unsplash.com/photo-1758599669186-9eaf14f6f3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MzE3NDI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMxOTI2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CSR() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-4 px-4 lg:px-5 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <section className="relative h-[500px] lg:h-[720px] overflow-hidden rounded-[20px] lg:rounded-[30px] mb-6 lg:mb-8">
            <img
              src={imgHero}
              alt="Corporate Social Responsibility"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-[20px] lg:rounded-[30px]" />

            {/* Navbar Overlay */}
            <Navbar />

            <div className="absolute bottom-6 lg:bottom-8 right-6 lg:right-8">
              <span className="text-white/70 text-xs lg:text-sm">| CSR</span>
            </div>

            <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pb-16 lg:pb-32">
              <div className="max-w-xl">
                <h1 className="text-white text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-4 lg:mb-6">
                  70 Years of Caring<br />for Sri Lanka
                </h1>
                <p className="text-white/80 text-xs lg:text-sm leading-relaxed max-w-md mb-6 lg:mb-8">
                  A legacy of healing, empowering, and sustaining our nation through seven decades of unwavering commitment.
                </p>
                <button className="border border-white/50 backdrop-blur-sm text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-semibold hover:bg-white/10 transition-colors">
                  Partner with us
                </button>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <ScrollAnimation direction="right" delay={0.2} className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#505050] leading-tight tracking-tight">
                Empowering your<br />success with our<br />solutions
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.3} className="lg:w-1/2 grid grid-cols-2 gap-6 lg:gap-10 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <div>
                    <p className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#2e2e2e] tracking-tight">{stat.value}</p>
                    <p className="text-sm lg:text-base font-semibold text-gray-400 whitespace-pre-line leading-tight mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CSR Video Section */}
      <section className="py-8 lg:py-10 px-6 lg:px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2e2e2e] tracking-tight">
              Corporate Social Responsibility<br />in few minutes
            </h2>
          </div>

          {/* Video thumbnail */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-[250px] lg:h-[460px]">
            <img
              src={imgCsrVideo}
              alt="CSR Video"
              className="w-full h-full object-cover"
            />
            {!videoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                >
                  <Play size={28} className="text-[#005400] ml-1 lg:ml-1" fill="#005400" />
                </button>
              </div>
            )}
          </div>

          <p className="text-center text-gray-500 text-xs lg:text-sm leading-relaxed max-w-3xl mx-auto mt-6 lg:mt-8 px-4">
            Astron's culture encourages diversity and innovation. It is a people-centric organization that strives for excellence by continuously improving the quality of its products/services while maintaining the work-life balance of its employees.
          </p>
        </ScrollAnimation>
      </section>

      {/* Our Impact in Action */}
      <section className="py-12 lg:py-20 px-6 lg:px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[1400px] mx-auto">
          <div className="mb-8 lg:mb-12">
            <p className="text-xs font-semibold text-[#005400] uppercase tracking-widest mb-3">CSR</p>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#444] tracking-tight leading-tight">
                  Our Impact in<br />Action
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                  CSR is not charity, it is about creating sustainable progress and well-being. Through CSR, we empower communities and build a brighter Sri Lanka for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {impactProjects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="bg-white relative rounded-[37.67px] overflow-hidden hover:shadow-xl transition-shadow group w-full"
              >
                <div className="overflow-clip relative rounded-[inherit] h-[344px]">
                  {/* Image */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[15px] w-[calc(100%-32px)] h-[180px] rounded-[32px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title - reduced width to prevent overlap with arrow */}
                  <p className="absolute left-[25px] top-[214px] w-[calc(100%-120px)] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] leading-[26px] text-black line-clamp-2">
                    {project.title}
                  </p>

                  {/* Arrow button - Positioned on the right side with navigation */}
                  <Link 
                    to={`/csr/event/${project.id}`}
                    className="absolute bg-[rgba(47,135,45,0.13)] content-stretch flex h-[49px] items-center justify-center right-[26px] px-[20px] py-[17.931px] rounded-[672.427px] top-[219px] w-[60px] group-hover:bg-[rgba(47,135,45,0.25)] transition-colors cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g clipPath="url(#clip0_18_33)">
                          <path d={svgPaths.p262a3200} fill="#005400" />
                        </g>
                        <defs>
                          <clipPath id="clip0_18_33">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </Link>

                  {/* Description - positioned below title with proper spacing */}
                  <p className="absolute left-[27px] top-[280px] w-[calc(100%-54px)] font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[10.13px] leading-[15px] text-[#858585] line-clamp-2">
                    {project.description}
                  </p>
                </div>
                {/* Border */}
                <div aria-hidden="true" className="absolute border-[#ddd] border-[2.883px] border-solid inset-0 pointer-events-none rounded-[37.67px]" />
              </div>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < impactProjects.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="flex items-center gap-2 border border-gray-300 px-8 py-3 rounded-full text-sm font-semibold text-[#2e2e2e] hover:border-[#005400] hover:text-[#005400] transition-colors"
              >
                Load more →
              </button>
            </div>
          )}
        </ScrollAnimation>
      </section>

      {/* Be a Part of Something Bigger */}
      <section className="relative bg-[#005400] py-12 lg:py-20 px-4 lg:px-8 xl:px-16 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="w-full">
        {/* Decorative background elements */}
        <div className="hidden lg:block absolute h-[194px] right-[100px] top-[51px] w-[178px] opacity-10">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 194">
            <path d={svgPathsCTA.p94ca880} fill="#87B54C" opacity="0.1" />
          </svg>
        </div>
        <div className="hidden lg:flex absolute h-[95px] items-center justify-center right-[20px] top-[148px] w-[86px] opacity-10">
          <div className="-scale-y-100 flex-none rotate-180">
            <svg className="h-[95px] w-[86px]" fill="none" preserveAspectRatio="none" viewBox="0 0 86 95">
              <path d={svgPathsCTA.p2d474100} fill="#87B54C" opacity="0.1" />
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 lg:gap-16 xl:gap-24 pl-0 sm:pl-12 lg:pl-32">
            {/* Handshake Icon */}
            <div className="flex-shrink-0">
              <svg className="w-[120px] h-[90px] lg:w-[162px] lg:h-[123px]" fill="none" preserveAspectRatio="none" viewBox="0 0 162.302 122.952">
                <g>
                  <path d={svgPathsCTA.p2bb6b480} fill="#82BFAB" />
                  <path d={svgPathsCTA.p6b82200} fill="#AAD4C8" />
                  <path d={svgPathsCTA.p1f83e100} fill="#AAD4C8" />
                  <path d={svgPathsCTA.pa3a4400} fill="#AAD4C8" />
                  <path d={svgPathsCTA.p3e05b200} fill="#616E7D" />
                  <path d={svgPathsCTA.p127eff00} fill="#AAD4C8" />
                  <path d={svgPathsCTA.p77ce700} fill="#AAD4C8" />
                  <path d={svgPathsCTA.p2bde5400} fill="#AAD4C8" />
                  <path d={svgPathsCTA.p1d2c2600} fill="#616E7D" />
                </g>
              </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.2] lg:leading-[79px] text-white tracking-[-1.04px] mb-6">
                Be a Part of something Bigger
              </p>
              <Link to="/contact" className="bg-white inline-flex h-[44px] lg:h-[48px] items-center justify-center px-8 lg:px-10 py-2 lg:py-3 rounded-[999px] hover:bg-gray-100 transition-colors">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] lg:text-[15px] text-[#005400]">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </section>

      <div className="-mt-[30px]">
        <Footer />
      </div>
    </div>
  );
}
