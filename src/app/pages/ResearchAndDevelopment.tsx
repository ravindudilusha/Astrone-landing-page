import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";
import svgPathsMolecule from "../../imports/svg-13ob3327v5";
import imgRectangle43 from "../../assets/31eb7a855b334d7733d3997ab5043128f8ded3d5.png";
import imgRectangle44 from "../../assets/aa68ee16167f5226fff25786f1b5ca08e0dc2687.png";
import imgRectangle45 from "../../assets/1c1c0f6749fe1e6850b40bfd1e0ade2c7fe92b17.png";
import imgRectangle37 from "../../assets/83b375bbe6675ba509c8d7d75c45b4e350f22edb.png";
import imgMolecularBg from "../../assets/04c3df92e58c0466aa268a6d84de497845390713.png";
import { Link } from "react-router";

export default function ResearchAndDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with integrated navbar */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5">
        <div className="relative h-[65vh] sm:h-[70vh] lg:h-[820px] min-h-[480px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
          <img
            src={imgRectangle37}
            alt="Research and Development"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-[20px] lg:rounded-[30px]" />
          
          {/* Navbar Overlay */}
          <Navbar />
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
            <div className="max-w-3xl">
              <h1 className="text-white text-[32px] sm:text-5xl lg:text-7xl font-semibold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.15] lg:leading-tight mb-4 lg:mb-6">
                Driven by Science<br />
                <span className="text-white">Defined by Innovation</span>
              </h1>
              <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-xl tracking-tight lg:tracking-[-0.32px]">
                Welcome to the heart of Astron. For 70 years, our R&D center has been the engine behind Sri Lanka's most trusted pharmaceuticals, advanced nutrition, and natural wellness solutions.
              </p>
            </div>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
            <p className="text-white/90 text-sm sm:text-lg font-semibold tracking-tight">
              | R & D
            </p>
          </div>
        </div>
      </section>

      {/* From Concept to Cure Section with molecule background */}
      <div className="relative mt-[75px] mb-[95px] px-4 py-20">
        {/* Molecular Background Pattern */}
        <div className="absolute inset-[18.19%_9.23%_67.02%_23.83%] opacity-[0.33] pointer-events-none">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 964.379 595.444">
            <g id="Group">
              <path d={svgPathsMolecule.p38778a80} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p2d198200} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p1b730dc0} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p13a61a50} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p32713900} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p1d289a00} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p21a7dc00} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p1bd7aac0} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p3a8b62c0} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              <path d={svgPathsMolecule.p28455280} stroke="#DEDEDE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.444" />
              {/* Additional paths as needed */}
            </g>
          </svg>
        </div>

        <h2 className="relative font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] lg:text-[52px] text-center mb-3 tracking-[-0.7px] lg:tracking-[-1.04px] leading-[1.2] lg:leading-[normal] px-4">
          <span className="text-[#444]">From Concept</span> <span className="text-[#a4a4a4]">to Cure</span>
        </h2>
        <p className="relative font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed sm:leading-[32px] lg:leading-[37px] tracking-tight lg:tracking-[-0.4px] text-[#505050] opacity-80 max-w-[980px] mx-auto text-center mt-6 sm:mt-[40px] lg:mt-[60px] px-4">
          At Astron, innovation is a continuous process. Our dedicated team of highly qualified pharmacists, researchers, and scientists work in state-of-the-art facilities to develop safe, efficacious, and affordable healthcare solutions.
        </p>
      </div>

      {/* Research & Development Content Sections */}
      <div className="mb-12 sm:mb-20">
        {/* Innovation Section */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-12 lg:col-span-8 px-4 sm:px-6 lg:pl-5 lg:pr-6 flex items-center order-2 lg:order-1">
            <div className="max-w-[666px]">
              <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[20px] mb-2 sm:mb-3 tracking-tight sm:tracking-[-0.4px]">
                Research and Development
              </p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[38px] text-[#444] mb-4 sm:mb-6 tracking-tight lg:tracking-[-0.76px] leading-[1.2]">
                Innovation
              </h3>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[16px] leading-relaxed lg:leading-[30px] text-[#7c7c7c] opacity-80 tracking-normal lg:tracking-[-0.16px]">
                <p className="mb-4">
                  Innovation is a key element of our continuous growth strategy. We develop Pharmaceuticals, Nutritional Supplements, Herbal Products and Animal Health Care products in the form of tablets, capsules, liquids, powders, creams, ointments and gels and over the past decades, we have developed the expertise in the pharmaceutical industry, that has earned us an enviable reputation for quality and capability.
                </p>
                <p>
                  Our highly trained R&D team has extensive experience in working with a variety of Active Pharmaceutical Ingredients (APIs) with a range of physicochemical characteristics. We continuously push the boundaries to develop high quality and efficacious health care solutions to improve the overall longevity and quality of life for humans and animals alike.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[424px] rounded-[24px] lg:rounded-tl-[34px] lg:rounded-bl-[34px] lg:rounded-tr-none lg:rounded-br-none overflow-hidden order-1 lg:order-2">
            <img
              src={imgRectangle43}
              alt="Innovation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Technological Advancement Section */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-12 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[429px] rounded-[24px] lg:rounded-tr-[34px] lg:rounded-br-[34px] lg:rounded-tl-none lg:rounded-bl-none overflow-hidden order-1">
            <img
              src={imgRectangle45}
              alt="Technological Advancement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-8 px-4 sm:px-6 lg:pl-20 lg:pr-5 flex items-center order-2">
            <div className="max-w-[666px] lg:ml-auto">
              <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[20px] mb-2 sm:mb-3 tracking-tight sm:tracking-[-0.36px]">
                Research and Development
              </p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[38px] text-[#444] mb-4 sm:mb-6 tracking-tight lg:tracking-[-0.76px] leading-[1.2]">
                Technological Advancement
              </h3>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[16px] leading-relaxed lg:leading-[30px] text-[#7c7c7c] opacity-80 tracking-normal lg:tracking-[-0.16px]">
                <p className="mb-4">
                  Innovation is a key element of our continuous growth strategy. We develop Pharmaceuticals, Nutritional Supplements, Herbal Products and Animal Health Care products in the form of tablets, capsules, liquids, powders, creams, ointments and gels and over the past decades, we have developed the expertise in the pharmaceutical industry, that has earned us an enviable reputation for quality and capability.
                </p>
                <p>
                  Our highly trained R&D team has extensive experience in working with a variety of Active Pharmaceutical Ingredients (APIs) with a range of physicochemical characteristics. We continuously push the boundaries to develop high quality and efficacious health care solutions to improve the overall longevity and quality of life for humans and animals alike.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Section */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-12 lg:col-span-8 px-4 sm:px-6 lg:pl-5 lg:pr-6 flex items-center order-2 lg:order-1">
            <div className="max-w-[666px]">
              <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[20px] mb-2 sm:mb-3 tracking-tight sm:tracking-[-0.4px]">
                Research and Development
              </p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[38px] text-[#444] mb-4 sm:mb-6 tracking-tight lg:tracking-[-0.76px] leading-[1.2]">
                Core Competencies
              </h3>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[16px] leading-relaxed lg:leading-[30px] text-[#7c7c7c] opacity-80 tracking-normal lg:tracking-[-0.16px]">
                <p className="mb-4">
                  Innovation is a key element of our continuous growth strategy. We develop Pharmaceuticals, Nutritional Supplements, Herbal Products and Animal Health Care products in the form of tablets, capsules, liquids, powders, creams, ointments and gels and over the past decades, we have developed the expertise in the pharmaceutical industry, that has earned us an enviable reputation for quality and capability.
                </p>
                <p>
                  Our highly trained R&D team has extensive experience in working with a variety of Active Pharmaceutical Ingredients (APIs) with a range of physicochemical characteristics. We continuously push the boundaries to develop high quality and efficacious health care solutions to improve the overall longevity and quality of life for humans and animals alike.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[427px] rounded-[24px] lg:rounded-tl-[34px] lg:rounded-bl-[34px] lg:rounded-tr-none lg:rounded-br-none overflow-hidden order-1 lg:order-2">
            <img
              src={imgRectangle44}
              alt="Core Competencies"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="relative bg-white py-12 lg:py-16 overflow-hidden mt-12 sm:mt-[75px] mb-12 sm:mb-[95px]">
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20 px-6">
          {/* Left Side - Title with Background (col-6) */}
          <div className="col-span-12 lg:col-span-6 relative -ml-6 pl-6 lg:pl-12">
            {/* Molecular Background Pattern - Black and White - Extends to Left Edge */}
            <div className="absolute -left-6 top-0 bottom-0 right-0 pointer-events-none">
              <img 
                src={imgMolecularBg} 
                alt="" 
                className="w-full h-full object-cover grayscale opacity-60"
              />
            </div>
            
            <h3 className="relative z-10 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[44px] lg:text-[52px] text-[#505050] tracking-[-0.7px] lg:tracking-[-1.04px] leading-tight">
              Empowering  your<br />
              success with our solutions
            </h3>
          </div>

          {/* Right Side - Certifications Grid (2x2) (col-6) */}
          <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-[60px] gap-y-10 sm:gap-y-[50px]">
              <div className="flex flex-col items-center">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] text-[#505050] tracking-[-0.64px] leading-[normal] text-center">
                  ISO 9001:2015
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] text-[#505050] tracking-[-0.2px] leading-[24px] text-center">
                  Certified
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[34px] text-[#505050] tracking-[-0.68px] leading-[normal] text-center">
                  GMP
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] text-[#505050] tracking-[-0.2px] leading-[24px] text-center">
                  Approved
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] text-[#505050] tracking-[-0.64px] leading-[normal] text-center">
                  ISO 14001:2015
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] text-[#505050] tracking-[-0.2px] leading-[24px] text-center">
                  Compliant
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[34px] text-[#505050] tracking-[-0.68px] leading-[normal] text-center">
                  70+
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] text-[#505050] tracking-[-0.2px] leading-[24px] text-center">
                  Years Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-6 py-6 lg:py-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#005400] rounded-[24px] lg:rounded-[30px] min-h-[200px] lg:min-h-[262px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-0 gap-6 lg:gap-0 text-center lg:text-left">
            {/* Decorative Leaf Background */}
            <div className="absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none hidden lg:block">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 relative z-10 w-full">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight lg:tracking-[-1.16px] leading-tight max-w-2xl mx-auto lg:mx-0">
                Looking for a Manufacturing Partner?
              </h2>
            </div>

            <Link
              to="/partner"
              className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-6 lg:px-8 py-3 lg:py-5 rounded-full text-base lg:text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2 lg:mt-0 w-full sm:w-auto"
            >
              Partner with us
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
