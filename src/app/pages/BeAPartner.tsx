import { useState } from "react";
import { CheckCircle, Award, Globe, ShieldCheck, Package } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import imgHero from "../../assets/360a6faae5aca84c3b9cfd1b8a19247cb7085ebf.png";
import imgWorkspace from "../../assets/0fce5dc8e698df0884a400b492bbf0111db67d65.png";

const partnerBenefits = [
  {
    icon: Award,
    title: "70-Year Legacy",
    description: "Backed by decades of pharmaceutical excellence and a trusted Sri Lankan brand service.",
  },
  {
    icon: Globe,
    title: "Global Footprint",
    description: "Expand your reach with quality standards and access to international markets.",
  },
  {
    icon: ShieldCheck,
    title: "GMP Certified",
    description: "Our manufacturing meets stringent GMP standards, ensuring quality and compliance at every stage.",
  },
  {
    icon: Package,
    title: "Diverse Portfolio",
    description: "Access a comprehensive range of pharmaceutical, veterinary and consumer health products.",
  },
];

const historyPoints = [
  "Sri Lanka's first pharmaceutical and veterinary products manufacturing company.",
  "Pioneer in establishing quality healthcare standards across South Asia.",
  "Over 70 years of continuous innovation and manufacturing excellence.",
];

type ApplicationType = "distributor" | "supplier";

export function BeAPartner() {
  const [applicationType, setApplicationType] = useState<ApplicationType>("distributor");
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    mobileNumber: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! Our team will get back to you within 48 hours.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <div className="relative h-[65vh] sm:h-[70vh] lg:h-[820px] min-h-[480px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
            <img
              src={imgHero}
              alt="Partner with us"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Navbar Overlay */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
              <div className="max-w-2xl">
                <h1 className="text-white text-[32px] sm:text-5xl lg:text-7xl font-semibold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.15] lg:leading-tight mb-4 lg:mb-6">
                  Partner with Sri Lanka's<br />
                  <span className="text-[#39cb74]">Healthcare Pioneer</span>
                </h1>
                <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-xl tracking-tight lg:tracking-[-0.36px] mb-8">
                  Join our 70-year legacy of excellence. We are looking for distributors and suppliers committed to delivering world-class healthcare solutions.
                </p>
                <button className="border border-white/50 backdrop-blur-sm text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all active:scale-95 w-fit">
                  Partner with us
                </button>
              </div>
            </div>

            {/* Breadcrumb tag */}
            <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
              <span className="text-white/70 text-sm sm:text-lg font-semibold tracking-tight">| BA Partner</span>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Why Partner with Astron */}
      <section className="py-24 px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Benefit cards – left column */}
            <div className="lg:w-1/3 space-y-6">
              {partnerBenefits.slice(0, 2).map((benefit) => (
                <div key={benefit.title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#005400]/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#005400]/10 flex items-center justify-center mb-4">
                    <benefit.icon size={22} className="text-[#005400]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2e2e2e] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Center text */}
            <div className="lg:w-1/3 text-center px-4">
              <div className="flex justify-center mb-6">
                {/* Leaf decoration */}
                <svg width="60" height="80" viewBox="0 0 199 121" fill="none" className="opacity-30">
                  <path d="M99.7 0C44.7 0 0 44.7 0 99.7c27.6-27.6 65.6-44.7 107.5-44.7H199C199 24.7 154.3 0 99.7 0z" fill="#87B54C" />
                  <path d="M99.7 121C154.7 121 199 76.3 199 21.3c-27.6 27.6-65.6 44.7-107.5 44.7H0C0 96.3 44.7 121 99.7 121z" fill="#87B54C" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2e2e2e] tracking-tight mb-4">
                Why Partner with<br /><span className="text-[#87B54C]">Astron?</span>
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Leverage our established reputation, rigorous quality standards, and extensive network to fuel rapid growth.
              </p>
              <button className="bg-[#005400] text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-[#003800] transition-colors">
                Partner Now →
              </button>
            </div>

            {/* Benefit cards – right column */}
            <div className="lg:w-1/3 space-y-6">
              {partnerBenefits.slice(2, 4).map((benefit) => (
                <div key={benefit.title} className="border border-gray-200 rounded-2xl p-6 hover:border-[#005400]/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#005400]/10 flex items-center justify-center mb-4">
                    <benefit.icon size={22} className="text-[#005400]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2e2e2e] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Become a Distributor or Supplier */}
      <section className="py-20 px-8 bg-gray-50/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScrollAnimation delay={0.2} direction="right" className="lg:w-1/2">
              <p className="text-xs font-semibold text-[#005400] uppercase tracking-widest mb-3">Our History</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2e2e2e] tracking-tight mb-6">
                Become a Distributor<br />or a Supplier
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The Company was incorporated in 1956 creating a milestone in the healthcare industry by setting up the first pharmaceutical and veterinary products manufacturing facility in the country.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                The Company was incorporated in 1956 creating a milestone in the healthcare industry by setting up the first pharmaceutical and veterinary products manufacturing facility in the country.
              </p>
              <ul className="space-y-3">
                {historyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#005400] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3} direction="left" className="lg:w-1/2">
              <div className="rounded-3xl overflow-hidden h-96">
                <img
                  src={imgWorkspace}
                  alt="Distributor partnership"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-8 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2e2e2e] tracking-tight mb-3">
              Start the Conversation
            </h2>
            <p className="text-gray-400 text-sm">Fill out this form to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#303030] block mb-2">Company Name *</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#303030] block mb-2">Contact Person</label>
                <input
                  type="text"
                  placeholder="Contact person name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                  value={form.contactPerson}
                  onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#303030] block mb-2">Email *</label>
                <input
                  type="email"
                  placeholder="company@email.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#303030] block mb-2">Mobile Number</label>
                <div className="flex gap-2">
                  <div className="border border-gray-300 rounded-xl px-3 py-3.5 text-sm text-gray-500 flex items-center gap-1 whitespace-nowrap">
                    +44 ▾
                  </div>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="flex-1 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                    value={form.mobileNumber}
                    onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#303030] block mb-2">Country</label>
              <input
                type="text"
                placeholder="Sri Lanka"
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#303030] block mb-2">Message / Proposal Brief *</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business and how you'd like to partner with Astron..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300 resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Application Type Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[26px] items-center justify-center w-full mt-2">
              <button
                type="button"
                onClick={() => setApplicationType("distributor")}
                className={`relative flex flex-col h-[65px] sm:h-[77px] items-center justify-center rounded-[20px] sm:rounded-[28px] w-full sm:w-[267px] transition-all active:scale-95 ${
                  applicationType === "distributor"
                    ? "bg-[rgba(0,84,0,0.08)]"
                    : "bg-gray-50/50"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[20px] sm:rounded-[28px] ${
                    applicationType === "distributor"
                      ? "border-[rgba(0,84,0,0.37)]"
                      : "border-[rgba(211,211,211,0.37)]"
                  }`}
                />
                <p
                  className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] relative text-base sm:text-[18px] text-center tracking-tight whitespace-nowrap ${
                    applicationType === "distributor" ? "text-[#005400]" : "text-[#777]"
                  }`}
                >
                  Distributor / Retailer
                </p>
              </button>
              <button
                type="button"
                onClick={() => setApplicationType("supplier")}
                className={`relative flex flex-col h-[65px] sm:h-[77px] items-center justify-center rounded-[20px] sm:rounded-[28px] w-full sm:w-[267px] transition-all active:scale-95 ${
                  applicationType === "supplier"
                    ? "bg-[rgba(0,84,0,0.08)]"
                    : "bg-gray-50/50"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[20px] sm:rounded-[28px] ${
                    applicationType === "supplier"
                      ? "border-[rgba(0,84,0,0.37)]"
                      : "border-[rgba(211,211,211,0.37)]"
                  }`}
                />
                <p
                  className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold leading-[normal] relative text-base sm:text-[18px] text-center tracking-tight whitespace-nowrap ${
                    applicationType === "supplier" ? "text-[#005400]" : "text-[#777]"
                  }`}
                >
                  Supplier / Vendor
                </p>
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:max-w-[571px] bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold py-4 sm:py-[19px] rounded-full uppercase tracking-wider text-sm sm:text-[16px] hover:bg-[#003800] transition-all active:scale-95 mt-6"
              >
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
