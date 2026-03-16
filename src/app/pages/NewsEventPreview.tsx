import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import imgNews1 from "../../assets/f293267b48e5d2b24e7403940d14de9886e4bcd0.png";
import imgNews2 from "../../assets/04c3df92e58c0466aa268a6d84de497845390713.png";
import imgNews3 from "../../assets/0590c8cc5057abdd91e8b062923551dc3dd88170.png";
import imgNews4 from "../../assets/0eab084eb9b57adc4e83e9e6152226e04930bdbe.png";
import imgNews5 from "../../assets/0fce5dc8e698df0884a400b492bbf0111db67d65.png";
import imgNews6 from "../../assets/151f6b006bd4329d608c1ac6f06a7d69a29688e8.png";
import imgPreview from "../../assets/165bfb26e59a80ed1bba14a44074fd119d6e5572.png";
import svgPaths from "../../imports/svg-cakmh93gbg";
import svgPathsCTA from "../../imports/svg-jzjch5hoam";

// Sample news/event data - in a real app, this would come from a database or API
const newsEventsData: Record<string, {
  title: string;
  date: string;
  image: string;
  description: string[];
}> = {
  "1": {
    title: "Astron Donates Playground to the Deaf Childrens' School in Ratmalana",
    date: "28th January 2025",
    image: imgPreview,
    description: [
      "Astron Limited renovated the playground belonging to the School of the Deaf in Ratmalana for the second time as a part of the Company's CSR initiative to support and uplift the standards of the local community.",
      "This initiative demonstrates our commitment to creating accessible and inclusive spaces for all children in our community. The renovated playground features modern equipment designed to be safe, durable, and accessible for children with special needs.",
    ]
  },
  "2": {
    title: "Donation to Mahiyangana college mission",
    date: "15th February 2025",
    image: imgNews2,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Our commitment to education drives us to support institutions that are shaping the future of our nation.",
    ]
  },
  "3": {
    title: "Donation to Mahiyangana college mission",
    date: "20th March 2025",
    image: imgNews3,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Through our initiatives, we continue to make a positive impact in communities across Sri Lanka.",
    ]
  },
  "4": {
    title: "Donation to Mahiyangana college mission",
    date: "5th April 2025",
    image: imgNews4,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Supporting education and community development remains at the core of our mission.",
    ]
  },
  "5": {
    title: "Donation to Mahiyangana college mission",
    date: "18th May 2025",
    image: imgNews5,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "We believe in creating sustainable change through education and empowerment.",
    ]
  },
  "6": {
    title: "Donation to Mahiyangana college mission",
    date: "22nd June 2025",
    image: imgNews6,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Our ongoing commitment to community welfare continues to drive meaningful change.",
    ]
  },
};

// Popular posts data
const popularPosts = [
  {
    id: "2",
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: imgNews2,
  },
  {
    id: "3",
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: imgNews3,
  },
  {
    id: "4",
    title: "Donation to Mahiyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: imgNews4,
  },
];

export default function NewsEventPreview() {
  const { id } = useParams<{ id: string }>();
  const newsEvent = id ? newsEventsData[id] : null;

  if (!newsEvent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">News/Event not found</h1>
          <Link to="/news-events" className="text-[#005400] hover:underline">
            Back to News and Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="bg-white">
        <Navbar variant="standard" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Title and Date */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-4xl lg:text-5xl text-[#2e2e2e] tracking-[-1px] leading-tight max-w-3xl">
            {newsEvent.title}
          </h1>
          <div className="text-right flex-shrink-0">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-gray-500 mb-1">Date:</p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold text-[#2e2e2e]">
              {newsEvent.date}
            </p>
          </div>
        </div>

        {/* Event Image */}
        <div className="mb-12 rounded-[30px] overflow-hidden">
          <ImageWithFallback
            src={newsEvent.image}
            alt={newsEvent.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Event Description */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {newsEvent.description.map((paragraph, index) => (
            <p
              key={index}
              className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-600 text-base leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Popular Posts Section */}
        <div className="mb-20">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl font-bold text-[#2e2e2e] text-center mb-12 tracking-[-0.6px]">
            Popular Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/news-events/${post.id}`}
                className="group bg-[#e3f2fd] rounded-[30px] overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Illustration/Icon */}
                <div className="p-8 pb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center mb-4">
                    <div className="w-24 h-20 bg-blue-500 rounded-lg relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-1 bg-white rounded mb-2"></div>
                      </div>
                      <div className="absolute top-1 right-1 w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-300 rounded-full"></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg text-[#2e2e2e] mb-3 line-clamp-2 min-h-[56px]">
                    {post.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  
                  {/* Arrow Link - Same style as News cards */}
                  <div className="flex justify-end">
                    <div className="bg-[rgba(47,135,45,0.13)] content-stretch flex h-[49px] w-[74px] items-center justify-center px-[20px] py-[17.931px] rounded-[672.427px] group-hover:bg-[rgba(47,135,45,0.25)] transition-colors">
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section - Be a Part of something Bigger */}
        <div className="bg-[#005400] rounded-[30px] px-16 py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute h-[194px] right-[100px] top-[51px] w-[178px] opacity-10">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 194">
              <path d={svgPathsCTA.p94ca880} fill="#87B54C" opacity="0.1" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
              Be a Part of something Bigger
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#005400] px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
