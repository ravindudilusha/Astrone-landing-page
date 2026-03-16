import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";
import imgMolecularBg from "../../assets/04c3df92e58c0466aa268a6d84de497845390713.png";
import imgManufacturingFacility from "../../assets/98ea6cf1cd72b4d27264604e63e3d6da55890847.png";
import imgPackingDivision from "../../assets/989127164ee2405e42b1b6a019421059ab97bf19.png";
import imgHero from "../../assets/bd853bf86d4bc3bc07d96e341e2862f5fae9dafd.png";
import { Link } from "react-router";

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with integrated navbar */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5">
        <div className="relative h-[85vh] sm:h-[70vh] lg:h-[820px] min-h-[550px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
          <ImageWithFallback
            src={imgHero}
            alt="Manufacturing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 rounded-[20px] lg:rounded-[30px]" />
          
          {/* Navbar Overlay */}
          <Navbar />
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
            <div className="max-w-3xl">
              <h1 className="text-white text-[32px] sm:text-5xl lg:text-7xl font-semibold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.15] lg:leading-tight mb-4 lg:mb-6">
                Engineering Excellence<br />
                <span className="text-white">Manufacturing Trust</span>
              </h1>
              <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-[620px] tracking-tight lg:tracking-[-0.36px]">
                Welcome to Sri Lanka's premier, WHO-GMP certified pharmaceutical manufacturing facility. For 70 years, we have combined cutting-edge technology with uncompromising quality to deliver healthcare solutions to the world.
              </p>
            </div>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
            <p className="text-white/90 text-sm sm:text-lg font-semibold tracking-tight">
              | Manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Certified to Global Standards Section */}
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
              Certified to<br />
              Global Standards
            </h3>
            <p className="relative z-10 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[37px] tracking-[-0.4px] text-[#505050] opacity-80 mt-6">
              Our facilities are built to world-class standards and regularly inspected by regulatory frameworks.
            </p>
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

      {/* Manufacturing Content Sections */}
      <div className="mb-12 sm:mb-20">
        {/* Manufacturing Facility Section */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-12 lg:col-span-8 px-4 sm:px-6 lg:pl-5 lg:pr-6 flex items-center order-2 lg:order-1">
            <div className="max-w-[666px]">
              <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[20px] mb-2 sm:mb-3 tracking-tight sm:tracking-[-0.4px]">
                Manufacturing Operation
              </p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[38px] text-[#444] mb-4 sm:mb-6 tracking-tight lg:tracking-[-0.76px] leading-[1.2]">
                Manufacturing Facility
              </h3>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[16px] leading-relaxed lg:leading-[30px] text-[#7c7c7c] opacity-80 tracking-normal lg:tracking-[-0.16px]">
                <p className="mb-4">
                  Located on our 5-acre campus in Piliyandala, Sri Lanka, Astron's manufacturing facility is equipped with state-of-the-art production lines capable of producing tablets, capsules, liquids, creams, and ointments. Our pharmaceutical production capacity exceeds 2 billion tablets annually.
                </p>
                <p className="mb-4">
                  The facility features environmentally controlled production areas that maintain precise temperature, humidity, and particulate levels necessary for pharmaceutical manufacturing. Every production area is regularly monitored and validated to ensure compliance with WHO-GMP standards.
                </p>
                <p>
                  Designed with both quality and high capacity in mind, our operations, organized to recognize and segregate products according to their intended market's distinct quality requirements. We implement stringent in-process controls and finished product quality testing protocols to ensure that every product meets the strict quality criteria established for international pharmaceutical markets.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[500px] rounded-[24px] lg:rounded-tl-[34px] lg:rounded-bl-[34px] lg:rounded-tr-none lg:rounded-br-none overflow-hidden order-1 lg:order-2">
            <ImageWithFallback
              src={imgManufacturingFacility}
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Packing Division Section */}
        <div className="mb-16 lg:mb-24 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-0">
          <div className="col-span-12 lg:col-span-4 h-[300px] sm:h-[400px] lg:h-[500px] rounded-[24px] lg:rounded-tr-[34px] lg:rounded-br-[34px] lg:rounded-tl-none lg:rounded-bl-none overflow-hidden order-1">
            <ImageWithFallback
              src={imgPackingDivision}
              alt="Packing Division"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-8 px-4 sm:px-6 lg:pl-20 lg:pr-5 flex items-center order-2">
            <div className="max-w-[666px] lg:ml-auto">
              <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[20px] mb-2 sm:mb-3 tracking-tight sm:tracking-[-0.4px]">
                Manufacturing Operation
              </p>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[38px] text-[#444] mb-4 sm:mb-6 tracking-tight lg:tracking-[-0.76px] leading-[1.2]">
                Packing Division
              </h3>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] sm:text-[16px] leading-relaxed lg:leading-[30px] text-[#7c7c7c] opacity-80 tracking-normal lg:tracking-[-0.16px]">
                <p className="mb-4">
                  Our automated packaging lines are designed to handle high-volume production while maintaining stringent quality control at all of the stages in the process. The packaging area features advanced blister packing machines, bottle filling lines, and labeling systems capable of handling multiple pack sizes and configurations.
                </p>
                <p>
                  At Astron Packaging, we are committed to innovation that benefits our customers, the environment, and public health alike. Our packaging strategy balances child-resistant features with ease of use for elderly patients, incorporates tamper-evident seals, and provides clear labeling that meets international regulatory standards for patient safety and convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-6 pb-6 lg:pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#005400] rounded-[24px] lg:rounded-[30px] min-h-[200px] lg:h-[262px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-0 gap-6 lg:gap-0">
            {/* Decorative Leaf Background */}
            <div className="hidden lg:block absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight lg:tracking-[-1.16px] leading-tight max-w-2xl">
                Looking for a Manufacturing Partner?
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3 lg:mt-4 max-w-xl mx-auto lg:mx-0">
                Leverage our 70+ years of expertise and WHO-GMP certified facility. We offer contract manufacturing services with strict quality assurance.
              </p>
            </div>

            <Link
              to="/partner"
              className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-6 lg:px-8 py-3 lg:py-5 rounded-full text-base lg:text-lg hover:bg-white transition-colors flex items-center gap-2"
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
