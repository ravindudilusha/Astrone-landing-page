import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgHero from "../../assets/f293267b48e5d2b24e7403940d14de9886e4bcd0.png";
import imgFeatured from "../../assets/04c3df92e58c0466aa268a6d84de497845390713.png";
import imgNews1 from "../../assets/0590c8cc5057abdd91e8b062923551dc3dd88170.png";
import imgNews2 from "../../assets/0eab084eb9b57adc4e83e9e6152226e04930bdbe.png";
import imgNews3 from "../../assets/0fce5dc8e698df0884a400b492bbf0111db67d65.png";
import imgNews4 from "../../assets/151f6b006bd4329d608c1ac6f06a7d69a29688e8.png";
import imgNews5 from "../../assets/165bfb26e59a80ed1bba14a44074fd119d6e5572.png";
import imgNews6 from "../../assets/e9e5c2a7f59f1b33615cb6df4d51025de4b190b0.png";
import svgPaths from "../../imports/svg-a9g5l9pyvc";
import svgPathsCTA from "../../imports/svg-jzjch5hoam";

const newsEvents = [
  {
    id: 1,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews1,
    date: "12th January 2025",
  },
  {
    id: 2,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews2,
    date: "15th February 2025",
  },
  {
    id: 3,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews3,
    date: "20th March 2025",
  },
  {
    id: 4,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews4,
    date: "5th April 2025",
  },
  {
    id: 5,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews5,
    date: "18th May 2025",
  },
  {
    id: 6,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: imgNews6,
    date: "22nd June 2025",
  },
];

export default function NewsAndEvents() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(newsEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = newsEvents.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-4 px-4 lg:px-5">
        <section className="relative h-[720px] overflow-hidden rounded-[30px] mb-8">
          <ImageWithFallback
            src={imgHero}
            alt="News and Events"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-[30px]" />

          {/* Navbar Overlay */}
          <Navbar />

          <div className="absolute bottom-8 right-8">
            <span className="text-white/70 text-sm">| News and Events</span>
          </div>

          <div className="relative z-10 flex flex-col justify-end h-full px-16 pb-32">
            <div className="max-w-xl">
              <h1 className="text-white text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Driven by Science<br />
                Defined by Innovation
              </h1>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Discover the latest breakthroughs, achievements and milestones as we continue to shape the future of pharmaceutical excellence in Sri Lanka.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Featured Event Section */}
      <section className="py-12 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-[#838383] tracking-[-0.28px] mb-2">
              Featured
            </p>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] text-[#2e2e2e] tracking-[-0.8px] leading-[normal]">
              Astron Christmas Party 2022
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-[30px] overflow-hidden h-[400px]">
              <ImageWithFallback
                src={imgFeatured}
                alt="Astron Christmas Party 2022"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#7c7c7c] tracking-[-0.32px] mb-6">
                Astron celebrated its annual Christmas party bringing together team members and their families for a night of celebration, recognizing outstanding contributions and fostering the spirit of unity that has been the hallmark of our 70+ year history.
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#7c7c7c] tracking-[-0.32px]">
                The event featured performances, awards, and a showcase of our achievements throughout the year, reaffirming our commitment to creating a supportive and inclusive work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[48px] text-[#2e2e2e] tracking-[-0.96px] mb-4">
              Recent <span className="text-[#b3b3b3]">Posts</span>
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#b3b3b3] tracking-[-0.28px]">
              Latest news and events from across our organization, detailing our milestones, achievements and ongoing initiatives
            </p>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentNews.map((news) => (
              <div
                key={news.id}
                className="bg-white relative rounded-[37.67px] overflow-hidden hover:shadow-xl transition-shadow group w-full"
              >
                <div className="overflow-clip relative rounded-[inherit] h-[344px]">
                  {/* Image */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[15px] w-[calc(100%-32px)] h-[180px] rounded-[32px] overflow-hidden">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title - reduced width to prevent overlap with arrow */}
                  <p className="absolute left-[25px] top-[214px] w-[calc(100%-120px)] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] leading-[26px] text-black line-clamp-2">
                    {news.title}
                  </p>

                  {/* Arrow button - Positioned on the right side with navigation */}
                  <Link 
                    to={`/news-events/${news.id}`}
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
                    {news.description}
                  </p>
                </div>
                {/* Border */}
                <div aria-hidden="true" className="absolute border-[#ddd] border-[2.883px] border-solid inset-0 pointer-events-none rounded-[37.67px]" />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm text-[#7c7c7c] hover:text-[#005400] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Prev page
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-[#005400] text-white"
                        : "bg-[#f5f5f5] text-[#7c7c7c] hover:bg-[#e5e5e5]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm text-[#7c7c7c] hover:text-[#005400] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next page →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Be a Part of Something Bigger */}
      <section className="relative py-16 px-8 lg:px-16 bg-[#005400] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute h-[194px] right-[100px] top-[51px] w-[178px] opacity-10">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 194">
            <path d={svgPathsCTA.p94ca880} fill="#87B54C" opacity="0.1" />
          </svg>
        </div>
        <div className="absolute flex h-[95px] items-center justify-center right-[20px] top-[148px] w-[86px] opacity-10">
          <div className="-scale-y-100 flex-none rotate-180">
            <svg className="h-[95px] w-[86px]" fill="none" preserveAspectRatio="none" viewBox="0 0 86 95">
              <path d={svgPathsCTA.p2d474100} fill="#87B54C" opacity="0.1" />
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Handshake Icon */}
            <div className="flex-shrink-0">
              <svg className="w-[162px] h-[123px]" fill="none" preserveAspectRatio="none" viewBox="0 0 162.302 122.952">
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
            <div className="flex-1 lg:text-left text-center">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[52px] leading-[79px] text-white tracking-[-1.04px] mb-4">
                Be a Part of something Bigger
              </p>
              <div className="backdrop-blur-[2px] bg-white inline-flex h-[48px] items-center justify-center px-6 py-3 rounded-[999px] border border-white">
                <Link to="/contact" className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#005400]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
