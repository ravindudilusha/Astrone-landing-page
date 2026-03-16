import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPathsCTA from "../../imports/svg-589vqzxc6w";

// Popular posts data (can be different news/events)
const popularPosts = [
  {
    id: 1,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: "https://images.unsplash.com/photo-1629805019269-356645aee7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzE5MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: "https://images.unsplash.com/photo-1764885415760-d3d8fff41fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMxOTI2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddsad adasd",
    image: "https://images.unsplash.com/photo-1710361006404-a13d01802ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMG5hdHVyZSUyMHRyZWVzJTIwcGxhbnRpbmd8ZW58MXx8fHwxNzczMTkyNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function NewsPreview() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="pt-4 px-4 lg:px-5">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Title and Date */}
        <div className="mb-12">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[48px] lg:text-[56px] text-[#1a1a1a] mb-6 tracking-tight leading-tight">
            Astron Donates Playground to the Deaf Children's School in Ratmalana
          </h1>
          <p className="text-[#878787] font-['Plus_Jakarta_Sans',sans-serif] text-[16px] mb-2">
            Date : 28th January 2025
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-[30px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629805019269-356645aee7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzE5MjY0OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="News Preview"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="mb-16">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#505050] mb-6">
            Astron Limited renovated the playground belonging to the School of the Deaf in Ratmalana for the second time as a part of the Company's CSR initiative to support and uplift the standards of the local community.
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#505050] mb-6">
            The company has been providing quality products & services and contributing to the local Health sector for decades, standing tall amidst tough competition because of our commitment to quality and the values we stand for! Over the years, we have continuously invested in the country's health and well-being. This includes providing free health camps for underprivileged communities, supporting medical research, and partnering with healthcare institutions to improve access to essential medications.
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#505050] mb-6">
            Our CSR initiatives extend beyond healthcare. We believe in nurturing the next generation through education scholarships, infrastructure development for schools, and sponsoring educational programs. Environmental sustainability is also at the heart of our operations, with initiatives focused on reducing our carbon footprint and promoting green practices across our facilities.
          </p>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#505050]">
            Through these efforts, Astron Limited remains committed to creating lasting positive change in the communities we serve, reinforcing our vision of a healthier, more prosperous Sri Lanka.
          </p>
        </div>

        {/* Popular Posts */}
        <div className="mb-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] text-[#1a1a1a] mb-8 text-center">
            Popular Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-[20px] border-2 border-[#e5e5e5] overflow-hidden hover:shadow-lg transition-shadow group relative"
              >
                <div className="p-4">
                  <div className="h-[200px] rounded-[16px] overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1a1a] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#858585] mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Link
                    to={`/news-events/preview/${post.id}`}
                    className="absolute bottom-4 right-4 bg-[rgba(47,135,45,0.13)] w-[40px] h-[40px] rounded-full flex items-center justify-center group-hover:bg-[rgba(47,135,45,0.25)] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#005400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
