import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";
import imgHero from "../../assets/a08f8a0003fd491f3e00109ff342830edc9095c0.png";
import imgQualityManagement from "../../assets/989127164ee2405e42b1b6a019421059ab97bf19.png";
import imgCert1 from "../../assets/68c7c9a035628050ee3e5ff969847c60cf363a5a.png";
import imgCert2 from "../../assets/cf898e2c10856ef9ab5deca24a11c89182034480.png";
import imgCert3 from "../../assets/26d019a88463060da92bcd7d8ee023520f98fb5b.png";
import imgAccred1 from "../../assets/c8de8def13be21eee93a6e3ae5330e4ffbc39d1f.png";
import imgAccred2 from "../../assets/c6c4a3ea5465f2bfcbcf33c1f592de3647a73d07.png";
import { Link } from "react-router";

export default function Quality() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with integrated navbar */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <div className="relative h-[85vh] sm:h-[70vh] lg:h-[820px] min-h-[550px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
            <ImageWithFallback
              src={imgHero}
              alt="Quality Assurance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 rounded-[20px] lg:rounded-[30px]" />
            
            {/* Navbar Overlay */}
            <Navbar />
            
            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
              <div className="max-w-3xl">
                <h1 className="text-white text-[32px] sm:text-5xl lg:text-7xl font-semibold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.15] lg:leading-tight mb-4 lg:mb-6 uppercase">
                  QUALITY IS NOT AN ACT,<br />
                  <span className="text-white">IT'S A HABIT</span>
                </h1>
                <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-[620px] tracking-tight lg:tracking-[-0.32px]">
                  For 70 years, Astron has operated on a simple philosophy: Every tablet, every drop, and every capsule we manufacture must be safe enough for our own families. Welcome to our WHO-GMP certified Quality ecosystem.
                </p>
              </div>
            </div>

            {/* Bottom Right Text */}
            <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
              <p className="text-white/90 text-sm sm:text-lg font-semibold tracking-[-0.36px]">
                | Quality
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Commitment Section */}
      <ScrollAnimation delay={0.1} direction="up" className="text-center mt-12 sm:mt-[75px] mb-12 sm:mb-[95px] px-5 sm:px-6">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[40px] lg:text-[48px] text-[#1a1a1a] mb-6 sm:mb-8 leading-tight sm:leading-[1.2]">
          Committed to the development of the local<br className="hidden lg:block" />
          {' '}<span className="text-[#878787]">health care manufacturing industry in Sri Lanka.</span>
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] sm:text-[18px] leading-relaxed sm:leading-[32px] tracking-tight sm:tracking-[-0.36px] text-[#b3b3b3] max-w-[980px] mx-auto">
          The company was incorporated in 1956 creating a milestone in the pharmaceutical industry by setting up the first pharmaceutical manufacturing facility in the country.
        </p>
      </ScrollAnimation>

      {/* Quality Management Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 mb-12 sm:mb-20 overflow-hidden">
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <ScrollAnimation delay={0.1} direction="right" className="w-full lg:w-[480px] h-[300px] sm:h-[400px] rounded-[20px] overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src={imgQualityManagement}
              alt="Quality Management"
              className="w-full h-full object-cover"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={0.2} direction="left" className="flex-1">
            <p className="text-[#878787] font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] sm:text-[14px] mb-2 sm:mb-3 tracking-wider uppercase">
              Quality
            </p>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#1a1a1a] mb-4 sm:mb-6">
              Quality Management
            </h3>
            <div className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] leading-[28px] text-[#505050]">
              <p className="mb-4">
                Our integrated Quality Management System operates across all levels of the organization, from raw material procurement through production, packaging, and distribution. This system is based on Good Manufacturing Practices (GMP), Quality Risk Management (QRM), and continuous process verification.
              </p>
              <p>
                Each product undergoes rigorous in-process controls and finished product testing by our ISO-certified laboratory. We maintain complete traceability throughout the manufacturing process, ensuring that any quality concerns can be rapidly identified and addressed while maintaining full transparency with regulatory authorities.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 px-4 lg:px-5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <ScrollAnimation delay={0.1} direction="up" className="text-center">
            <p className="text-[#838383] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] mb-3 tracking-[-0.4px]">
              Certifications
            </p>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[48px] text-[#444] mb-6 tracking-[-0.96px] leading-[normal]">
              Certified Quality and<br />Regulatory Compliance
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] leading-[30px] text-[#7c7c7c] opacity-80 tracking-[-0.16px] max-w-[900px] mx-auto mb-16">
              We don't merely comply; We commit through all our standards certified by the ISO 22000:2018 certified as well as conformity to the Good Manufacturing Principles. We are setting the criteria that define the future of global pharmaceutical standards.
            </p>
          </ScrollAnimation>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <ScrollAnimation delay={0.1} direction="up" className="flex flex-col bg-white border border-[#e5e5e5] rounded-[20px] p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                <img src={imgCert1} alt="FDA/NMRA Certificate" className="max-w-full max-h-full object-contain" />
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a1a] mb-3">
                FDA/NMRA Approved Facilities of GMP
              </h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] text-[#7c7c7c] mb-6 leading-[24px] flex-grow">
                Our pharmaceutical manufacturing and testing sites are certified to GMP (Good Manufacturing Practice) standards by NMRA 2008
              </p>
              <button className="mt-auto bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#d8e5d8] transition-colors w-full sm:w-auto self-center">
                View Certificate
              </button>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2} direction="up" className="flex flex-col bg-white border border-[#e5e5e5] rounded-[20px] p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                <img src={imgCert2} alt="HACCP Certificate" className="max-w-full max-h-full object-contain" />
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a1a] mb-3">
                HACCP and Good Certificate for Quality Manufactured Products (WHO-GMP)
              </h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] text-[#7c7c7c] mb-6 leading-[24px] flex-grow">
                We're certified in HACCP food safety management with strict controls around potential hazards.
              </p>
              <button className="mt-auto bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#d8e5d8] transition-colors w-full sm:w-auto self-center">
                View Certificate
              </button>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3} direction="up" className="flex flex-col bg-white border border-[#e5e5e5] rounded-[20px] p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                <img src={imgCert3} alt="GMP Certificate" className="max-w-full max-h-full object-contain" />
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[18px] text-[#1a1a1a] mb-3">
                Good Manufacturing Practice System (GMP) - Its Application to pharmaceutical production
              </h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] text-[#7c7c7c] mb-6 leading-[24px] flex-grow">
                Complete quality control system covering all aspects of pharmaceutical manufacturing
              </p>
              <button className="mt-auto bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#d8e5d8] transition-colors w-full sm:w-auto self-center">
                View Certificate
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Accredited Testing Facilities */}
      <section className="bg-[#f9f9f9] py-12 lg:py-16 px-5 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation delay={0.1} direction="up" className="text-center">
            <p className="text-[#878787] font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[12px] sm:text-[14px] mb-2 sm:mb-3 tracking-wider uppercase">
              Accreditation
            </p>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[36px] text-[#1a1a1a] mb-8 sm:mb-12">
              Accredited Pharmaceutical<br className="hidden sm:block" /> Testing Facilities
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[16px] leading-relaxed sm:leading-[28px] text-[#505050] max-w-3xl mx-auto mb-12 sm:mb-16">
              Our state-of-the-art testing laboratory is accredited by ISO/IEC 17025:2017 for many tests run by our pharmaceutical and dairy teams laboratories are SLAS (Sri Lanka Accreditation Board for Conformity Assessment) accredited and audited semi-annually for a range of microbiological, chemical and following internationally recognized test methods using state-of-the-art equipment in an advanced laboratory setting.
            </p>
          </ScrollAnimation>

          {/* SLAB Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <ScrollAnimation delay={0.1} direction="right" className="flex flex-col bg-white border border-[#e5e5e5] rounded-[20px] p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-[100px] h-[100px] mx-auto mb-4 sm:mb-6 flex items-center justify-center flex-shrink-0">
                <img src={imgAccred1} alt="SLAB TC 057" className="max-w-full max-h-full object-contain" />
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1a1a] mb-2">
                SLAB
              </h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-[#005400] mb-2 sm:mb-4">
                ISO / IEC 17025: 2017
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] text-[#7c7c7c] mb-6 flex-grow">
                Accreditation No: SLAB TC 057
              </p>
              <button className="mt-auto bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#d8e5d8] transition-colors w-full sm:w-auto self-center">
                View Certificate
              </button>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2} direction="left" className="flex flex-col bg-white border border-[#e5e5e5] rounded-[20px] p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-[100px] h-[100px] mx-auto mb-4 sm:mb-6 flex items-center justify-center flex-shrink-0">
                <img src={imgAccred2} alt="SLAB MC 047" className="max-w-full max-h-full object-contain" />
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1a1a] mb-2">
                SLAB
              </h4>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] text-[#005400] mb-2 sm:mb-4">
                ISO / IEC 17025: 2017
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] text-[#7c7c7c] mb-6 flex-grow">
                Accreditation No: SLAB MC 047
              </p>
              <button className="mt-auto bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] px-6 py-3 rounded-full hover:bg-[#d8e5d8] transition-colors w-full sm:w-auto self-center">
                View Certificate
              </button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="px-5 sm:px-6 pb-10 sm:pb-16 mt-12 sm:mt-16 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto">
          <div className="bg-[#005400] rounded-[20px] lg:rounded-[30px] p-8 sm:p-12 lg:h-[262px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:px-16">
            {/* Decorative Leaf Background (Only visible on larger screens) */}
            <div className="hidden lg:block absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-white text-[28px] sm:text-[40px] lg:text-[52px] font-semibold tracking-[-0.02em] leading-[1.15] mb-4 max-w-2xl mx-auto lg:mx-0">
                Looking for a Manufacturing Partner?
              </h2>
              <p className="text-white/80 text-[14px] sm:text-[16px] leading-[1.6] max-w-xl mx-auto lg:mx-0">
                Leverage our 70+ years of expertise and WHO-GMP certified facility. We offer contract manufacturing services with strict quality assurance.
              </p>
            </div>

            <Link
              to="/partner"
              className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-8 py-4 sm:py-5 rounded-full text-[15px] sm:text-[18px] hover:bg-white transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Partner with us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005400">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#005400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
