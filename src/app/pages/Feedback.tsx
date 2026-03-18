import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";

const productCategories = [
  "Pharmaceuticals",
  "Nutrition",
  "Healing Herbs",
  "Personal Care",
  "Animal Health",
  "Optipet",
  "Other",
];

export default function Feedback() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    product: "",
    feedback: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Feedback submitted:", form);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Page Header */}
      <div className="py-8 px-4 lg:px-8">
        <div className="mb-8">
          {/* Navbar */}
          <Navbar variant="standard" />
        </div>
      </div>

      {/* Feedback Form Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[620px] mx-auto">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] lg:text-[48px] text-[#2e2e2e] text-center mb-3 tracking-tight leading-tight px-2">
            Your feedbacks are<br className="hidden sm:block" /><span className="sm:hidden"> </span>great value to us
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] lg:text-[14px] text-[#7c7c7c] text-center mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="bg-white border border-[#e5e5e5] rounded-[20px] lg:rounded-[30px] p-5 sm:p-6 lg:p-10 xl:p-12 shadow-sm">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-[#2e2e2e] text-center mb-2">
              Feedback Form
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] lg:text-[13px] text-[#b3b3b3] text-center mb-6 lg:mb-8 px-2">
              Please fill our feedback form. Your thoughts are great value to us
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    required
                    className="w-full border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#b3b3b3]"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    required
                    className="w-full border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#b3b3b3]"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Email & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="w-full border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#b3b3b3]"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    <div className="border border-[#d4d4d4] rounded-[10px] px-2.5 sm:px-3 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#7c7c7c] flex items-center gap-1 whitespace-nowrap">
                      +94
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      className="flex-1 border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#b3b3b3]"
                      value={form.mobileNumber}
                      onChange={(e) => setForm({ ...form, mobileNumber: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Select our Product(s) */}
              <div>
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                  Select our Product(s) *
                </label>
                <select
                  required
                  className="w-full border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#7c7c7c] focus:outline-none focus:border-[#005400] bg-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237c7c7c' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                >
                  <option value="">Select our product</option>
                  {productCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Feedback */}
              <div>
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] text-[#2e2e2e] block mb-2">
                  Feedback *
                </label>
                <textarea
                  rows={5}
                  placeholder="Leave us a message"
                  required
                  className="w-full border border-[#d4d4d4] rounded-[10px] px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#b3b3b3] resize-none"
                  value={form.feedback}
                  onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] sm:text-[14px] py-3 sm:py-3.5 rounded-[10px] uppercase tracking-wider hover:bg-[#003800] transition-colors touch-manipulation"
              >
                SUBMIT FEEDBACK
              </button>
            </form>
          </div>
        </ScrollAnimation>
      </section>

      {/* Be a Part of Something Bigger */}
      <section className="relative bg-[#005400] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none opacity-20 sm:opacity-100">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
            <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
          </svg>
        </div>

        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Handshake Icon */}
              <div className="flex-shrink-0">
                <svg className="w-[100px] h-[75px] sm:w-[120px] sm:h-[90px] lg:w-[162px] lg:h-[123px]" fill="none" preserveAspectRatio="none" viewBox="0 0 162.302 122.952">
                  <g>
                    <path d="M129.5 59.5C129.5 59.5 120.5 53.5 110.5 53.5C100.5 53.5 95.5 58.5 95.5 58.5M44.5 51.5L32.5 55.5M40.5 61.5L28.5 65.5M44.5 72.5L34.5 75.5M52.5 83.5L44.5 85.5M78.5 76.5C78.5 76.5 86.5 85.5 95.5 86.5C104.5 87.5 113.5 81.5 113.5 81.5M10.5 48.5L25.5 30.5M41.5 115.5L41.5 105.5M60.5 119.5L60.5 107.5M81.5 117.5L81.5 105.5M101.5 107.5C101.5 107.5 104.5 96.5 104.5 89.5" stroke="#AAD4C8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M151.5 44.5C151.5 44.5 130.5 21.5 114.5 25.5C98.5 29.5 93.5 51.5 93.5 51.5L44.5 51.5C44.5 51.5 23.5 49.5 15.5 63.5C7.5 77.5 18.5 93.5 18.5 93.5L41.5 93.5V115.5C41.5 115.5 41.5 125.5 55.5 125.5C69.5 125.5 75.5 115.5 75.5 115.5V93.5H88.5C88.5 93.5 89.5 105.5 103.5 105.5C117.5 105.5 121.5 93.5 121.5 93.5H138.5C138.5 93.5 159.5 91.5 162.5 68.5C165.5 45.5 151.5 44.5 151.5 44.5Z" fill="#616E7D" fillOpacity="0.4"/>
                  </g>
                </svg>
              </div>

              {/* Content */}
              <div className="lg:text-left text-center">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] text-white tracking-[-1px] mb-2 sm:mb-4">
                  Be a Part of something Bigger
                </h2>
              </div>
            </div>

            <Link
              to="/contact"
              className="flex-shrink-0 bg-white text-[#005400] font-bold px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center whitespace-nowrap active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <div className="-mt-[20px] sm:-mt-[25px] lg:-mt-[30px]">
        <Footer />
      </div>
    </div>
  );
}
