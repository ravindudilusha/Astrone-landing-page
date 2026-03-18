import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronDown, Calendar } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import imgJobPoster from "../../assets/e9e5c2a7f59f1b33615cb6df4d51025de4b190b0.png";
import { ScrollAnimation } from "../components/ScrollAnimation";
import svgPathsCTA from "../../imports/svg-jzjch5hoam";

// Handshake icon component
function HandshakeIcon() {
  return (
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
  );
}

export function VacancyDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobileNumber: "",
    nic: "",
    address: "",
    joinWithin: "",
    howDidYouKnow: "",
    cv: null as File | null,
    message: "",
  });

  // If no job data, redirect back to careers
  useEffect(() => {
    if (!job) {
      navigate("/careers");
    }
  }, [job, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    navigate("/careers");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  if (!job) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="py-8 px-4 lg:px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <div className="mb-8">
            {/* Navbar Overlay */}
            <Navbar variant="standard" />
          </div>
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-6 px-4 lg:px-0">
            <div>
              <p className="font-medium text-[#1a1a1a] mb-2 tracking-wide font-['Plus_Jakarta_Sans',sans-serif] text-base">Open Vacant</p>
              <h1 className="text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#505050] tracking-[-1px] leading-tight">
                {job.title}
              </h1>
            </div>
            <div className="md:w-[45%] md:text-right pt-1 text-[#7c7c7c]">
              <p className="font-medium text-base lg:text-[18px] lg:leading-[28px] mt-2 md:mt-0 font-['Plus_Jakarta_Sans',sans-serif] md:ml-auto max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="px-4 lg:px-8 py-8 lg:py-12 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left Column - Job Poster */}
          <ScrollAnimation delay={0.2} direction="right" className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <img
              src={imgJobPoster}
              alt="Job Poster"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </ScrollAnimation>

          {/* Right Column - Application Form */}
          <ScrollAnimation delay={0.3} direction="left" className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[700px] bg-white border border-[#e5e5e5] rounded-[24px] lg:rounded-[30px] p-6 sm:p-8 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <h2 className="text-[28px] lg:text-[32px] font-bold text-[#181818] font-['Plus_Jakarta_Sans',sans-serif] text-center mb-1">
                Job Application Form
              </h2>
              <p className="text-[#acacac] text-[15px] font-medium font-['Plus_Jakarta_Sans',sans-serif] text-center mb-8 lg:mb-10">
                Logistics - Warehouse
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Type here"
                      className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Type here"
                      className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                    />
                  </div>
                </div>

                {/* DOB & Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      DOB *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="DD/MM/YYYY"
                        value={formData.dob}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.type = "text";
                        }}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] appearance-none placeholder:text-[#d0d0d0]"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Gender *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className={`w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] appearance-none bg-white ${formData.gender ? 'text-[#1a1a1a]' : 'text-[#d0d0d0]'}`}
                      >
                        <option value="" disabled hidden>Select Gender</option>
                        <option value="male" className="text-[#1a1a1a]">Male</option>
                        <option value="female" className="text-[#1a1a1a]">Female</option>
                        <option value="other" className="text-[#1a1a1a]">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                {/* Email & Mobile Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Type here"
                      className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Mobile Number *
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="w-[70px] flex-shrink-0 h-[52px] border border-[#e0e0e0] rounded-[10px] flex items-center justify-center bg-white text-[15px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#1a1a1a]">
                        +94
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="Mobile Number"
                        className="flex-1 min-w-0 h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                      />
                    </div>
                  </div>
                </div>

                {/* NIC & Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      NIC *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nic}
                      onChange={(e) => setFormData({ ...formData, nic: e.target.value })}
                      placeholder="Type here"
                      className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Type here"
                      className="w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] placeholder:text-[#d0d0d0]"
                    />
                  </div>
                </div>

                {/* Join Within & How did you get to know about us */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      Join Within *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.joinWithin}
                        onChange={(e) => setFormData({ ...formData, joinWithin: e.target.value })}
                        className={`w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] appearance-none bg-white ${formData.joinWithin ? 'text-[#1a1a1a]' : 'text-[#d0d0d0]'}`}
                      >
                        <option value="" disabled hidden>Select</option>
                        <option value="immediate" className="text-[#1a1a1a]">Immediate</option>
                        <option value="1-week" className="text-[#1a1a1a]">1 Week</option>
                        <option value="2-weeks" className="text-[#1a1a1a]">2 Weeks</option>
                        <option value="1-month" className="text-[#1a1a1a]">1 Month</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                      How did you get to know about us? *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.howDidYouKnow}
                        onChange={(e) => setFormData({ ...formData, howDidYouKnow: e.target.value })}
                        className={`w-full h-[52px] border border-[#e0e0e0] rounded-[10px] px-5 text-[14px] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] appearance-none bg-white ${formData.howDidYouKnow ? 'text-[#1a1a1a]' : 'text-[#d0d0d0]'}`}
                      >
                        <option value="" disabled hidden>Select how</option>
                        <option value="website" className="text-[#1a1a1a]">Website</option>
                        <option value="social-media" className="text-[#1a1a1a]">Social Media</option>
                        <option value="referral" className="text-[#1a1a1a]">Referral</option>
                        <option value="job-portal" className="text-[#1a1a1a]">Job Portal</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                {/* Upload CV */}
                <div>
                  <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    Upload CV * <span className="text-[#ff4d4f] font-normal text-[11px] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">(Max size 10/24MB)</span>
                  </label>
                  <div className="relative h-[52px] border border-[#e0e0e0] rounded-[10px] flex items-center px-[6px] overflow-hidden focus-within:border-[#005400]">
                    <div className="bg-[#f5f5f5] text-[#717171] text-[13px] font-semibold px-6 py-2 rounded-[8px] pointer-events-none font-['Plus_Jakarta_Sans',sans-serif] ml-1">
                      Browse files
                    </div>
                    {/* Show selected file name slightly to the right */}
                    <span className="ml-4 text-[13px] text-[#717171] pointer-events-none font-['Plus_Jakarta_Sans',sans-serif] truncate pr-4">
                      {formData.cv ? formData.cv.name : ""}
                    </span>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    Message / Brief *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave us a message..."
                    rows={4}
                    className="w-full border border-[#e0e0e0] rounded-[10px] px-5 py-4 text-[14px] text-[#1a1a1a] font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:border-[#005400] resize-none placeholder:text-[#d0d0d0]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-[320px] max-w-full h-[52px] bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-wide rounded-full text-[13px] lg:text-[14px] hover:bg-[#004400] transition-colors"
                  >
                    SUBMIT APPLICATION
                  </button>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      {/* Be a Part of Something Bigger */}
      <section className="relative py-16 px-8 lg:px-16 bg-[#005400] overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Handshake Icon */}
            <div className="flex-shrink-0">
              <HandshakeIcon />
            </div>

            {/* Content */}
            <div className="flex-1 lg:text-left text-center">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[52px] leading-[79px] text-white tracking-[-1.04px] mb-4">
                Be a Part of something Bigger
              </p>
              <div className="backdrop-blur-[2px] bg-white inline-flex h-[48px] items-center justify-center px-6 py-3 rounded-[999px] border border-white">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#005400]">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
