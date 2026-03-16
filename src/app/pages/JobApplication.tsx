import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { X, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import imgJobPoster from "../../assets/e9e5c2a7f59f1b33615cb6df4d51025de4b190b0.png";

export function JobApplication() {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    nic: "",
    address: "",
    jobWishes: "",
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
    alert("Application submitted successfully! We'll get back to you soon.");
    navigate("/careers");
  };

  // Return null while redirecting
  if (!job) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-4 px-4 lg:px-8">
        <div className="relative h-[150px] overflow-hidden rounded-[30px] mb-8 bg-[#005400]">
          {/* Navbar Overlay */}
          <Navbar />
        </div>
      </div>

      {/* Application Form Section */}
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white rounded-[30px] overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left side - Job Details */}
                <div className="lg:w-[45%]">
                  <p className="text-sm font-semibold text-[#2e2e2e] mb-2">Open Vacant</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight leading-tight mb-8">
                    {job.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {job.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
                  </p>

                  {/* Job Details */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[#2e2e2e] w-24">Department:</span>
                      <span className="text-sm text-gray-600">{job.department}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[#2e2e2e] w-24">Type:</span>
                      <span className="text-sm text-gray-600">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[#2e2e2e] w-24">Location:</span>
                      <span className="text-sm text-gray-600">{job.location}</span>
                    </div>
                  </div>

                  {/* Job Poster Image */}
                  <div className="rounded-[30px] overflow-hidden">
                    <img
                      src={imgJobPoster}
                      alt="Job poster"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Right side - Application Form */}
                <div className="lg:w-[55%]">
                  <div className="bg-white border-2 border-[#d3d3d3] rounded-[30px] p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#2e2e2e]">Job Application Form</h3>
                      <p className="text-sm text-[#777]">{job.department}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">First Name *</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">DOB *</label>
                          <input
                            type="date"
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400]"
                            value={form.dob}
                            onChange={(e) => setForm({ ...form, dob: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">Gender *</label>
                          <select
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400]"
                            value={form.gender}
                            onChange={(e) => setForm({ ...form, gender: e.target.value })}
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">Email *</label>
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">Mobile Number *</label>
                          <input
                            type="tel"
                            placeholder="+94"
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                            value={form.mobile}
                            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#303030] block mb-2">NIC *</label>
                        <input
                          type="text"
                          placeholder="NIC Number"
                          className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                          value={form.nic}
                          onChange={(e) => setForm({ ...form, nic: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#303030] block mb-2">Address *</label>
                        <input
                          type="text"
                          placeholder="Address"
                          className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">Job Wishes *</label>
                          <select
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400]"
                            value={form.jobWishes}
                            onChange={(e) => setForm({ ...form, jobWishes: e.target.value })}
                            required
                          >
                            <option value="">Select Position</option>
                            <option value="senior">Senior Level</option>
                            <option value="mid">Mid Level</option>
                            <option value="junior">Junior Level</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-[#303030] block mb-2">How did you get to know about us? *</label>
                          <select
                            className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400]"
                            value={form.howDidYouKnow}
                            onChange={(e) => setForm({ ...form, howDidYouKnow: e.target.value })}
                            required
                          >
                            <option value="">Select Option</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="website">Website</option>
                            <option value="referral">Referral</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#303030] block mb-2">
                          Upload CV * <span className="text-red-500 font-normal">(Max size 500MB)</span>
                        </label>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400]"
                          onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] || null })}
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-[#303030] block mb-2">Message / Brief *</label>
                        <textarea
                          rows={4}
                          placeholder="Your message..."
                          className="w-full border-2 border-[#d3d3d3] rounded-[12px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300 resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold py-[19px] rounded-[999px] uppercase tracking-[0.64px] text-[16px] hover:bg-[#003800] transition-colors"
                      >
                        SUBMIT APPLICATION
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
