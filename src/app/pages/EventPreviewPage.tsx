import { useParams, Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-cakmh93gbg";

// Sample event data - in a real app, this would come from a database or API
const eventsData: Record<string, {
  title: string;
  date: string;
  image: string;
  description: string[];
}> = {
  "1": {
    title: "Astron Donates Playground to the Deaf Children's School in Ratmalana",
    date: "28th January 2025",
    image: "https://images.unsplash.com/photo-1771339140493-918219f3689f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBzY2hvb2x8ZW58MXx8fHwxNzczMzEyNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Astron Limited renovated the playground belonging to the School of the Deaf in Ratmalana for the second time as a part of the Company's CSR initiative to support and uplift the standards of the local community.",
      "This initiative demonstrates our commitment to creating accessible and inclusive spaces for all children in our community.",
    ]
  },
  "2": {
    title: "Donation to Maliyangana College Mission",
    date: "15th February 2025",
    image: "https://images.unsplash.com/photo-1584441405886-bc91be56e56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZXZlbnQlMjBuZXdzbGV0dGVyJTIwZW1haWx8ZW58MXx8fHwxNzczMzEyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Our commitment to education drives us to support institutions that are shaping the future of our nation.",
    ]
  },
  "3": {
    title: "Community Health Initiative",
    date: "10th March 2025",
    image: "https://images.unsplash.com/photo-1771004843870-fb5108c6cff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwZG9uYXRpb258ZW58MXx8fHwxNzczMzEyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Through our CSR initiatives, we continue to make a positive impact in communities across Sri Lanka.",
    ]
  },
  "4": {
    title: "Environmental Sustainability Program",
    date: "5th April 2025",
    image: "https://images.unsplash.com/photo-1608093716744-94e91339930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzb2NpYWwlMjByZXNwb25zaWJpbGl0eXxlbnwxfHx8fDE3NzMzMTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Sustainability is at the core of our operations, and we're committed to creating a better tomorrow.",
    ]
  },
  "5": {
    title: "Medical Equipment Donation Drive",
    date: "20th May 2025",
    image: "https://images.unsplash.com/photo-1771339140493-918219f3689f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5Z3JvdW5kJTIwY2hpbGRyZW4lMjBzY2hvb2x8ZW58MXx8fHwxNzczMzEyNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Healthcare accessibility is a fundamental right, and we're proud to support medical facilities nationwide.",
    ]
  },
  "6": {
    title: "Youth Skills Development Workshop",
    date: "12th June 2025",
    image: "https://images.unsplash.com/photo-1584441405886-bc91be56e56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZXZlbnQlMjBuZXdzbGV0dGVyJTIwZW1haWx8ZW58MXx8fHwxNzczMzEyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Empowering the youth with skills and knowledge is an investment in our collective future.",
    ]
  },
};

// Popular posts data
const popularPosts = [
  {
    id: "2",
    title: "Donation to Maliyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://images.unsplash.com/photo-1584441405886-bc91be56e56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZXZlbnQlMjBuZXdzbGV0dGVyJTIwZW1haWx8ZW58MXx8fHwxNzczMzEyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "Donation to Maliyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://images.unsplash.com/photo-1771004843870-fb5108c6cff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwZG9uYXRpb258ZW58MXx8fHwxNzczMzEyNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    title: "Donation to Maliyangana college mission",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "https://images.unsplash.com/photo-1608093716744-94e91339930d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzb2NpYWwlMjByZXNwb25zaWJpbGl0eXxlbnwxfHx8fDE3NzMzMTI0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function EventPreviewPage() {
  const { id } = useParams<{ id: string }>();
  const event = id ? eventsData[id] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h1>
          <Link to="/csr" className="text-[#005400] hover:underline">
            Back to CSR
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
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight leading-tight max-w-3xl">
            {event.title}
          </h1>
          <div className="text-right flex-shrink-0">
            <p className="text-sm text-gray-500 mb-1">Date:</p>
            <p className="text-base font-semibold text-[#2e2e2e]">{event.date}</p>
          </div>
        </div>

        {/* Event Image */}
        <div className="mb-12 rounded-[30px] overflow-hidden">
          <ImageWithFallback
            src={event.image}
            alt={event.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Event Description */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {event.description.map((paragraph, index) => (
            <p key={index} className="text-gray-600 text-base leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Popular Posts Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#2e2e2e] text-center mb-12">
            Popular Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/csr/event/${post.id}`}
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
                  <h3 className="font-bold text-lg text-[#2e2e2e] mb-3 line-clamp-2 min-h-[56px]">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  
                  {/* Arrow Link - Same style as CSR cards */}
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
          <div className="absolute top-8 right-8 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#87B54C]">
              <circle cx="50" cy="50" r="40" fill="currentColor" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
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
