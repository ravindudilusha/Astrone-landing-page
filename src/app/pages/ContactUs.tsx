import { useState } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Plus, Minus } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import imgHero from "../../assets/783583fd09243beb47ee28621f31fd285662b9d2.png";
import imgAstronLogo1 from "../../assets/89c7fd421088a06c87c99545596a5c79e1d21610.png";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";

const faqs = [
  {
    id: 1,
    question: "How can I become a distributor for Astron products?",
    answer:
      "We are always looking to expand our network. Please fill out the contact form above, selecting 'Distributor / Partner' as your role, and our Sales team will review your application within 48 hours.",
    open: true,
  },
  {
    id: 2,
    question: "Where can I find detailed information about specific medicines?",
    answer:
      "Detailed information about all our medicines is available on our product catalog page. You can also contact our medical affairs team directly via email.",
    open: false,
  },
  {
    id: 3,
    question: "How do I apply for a job at Astron?",
    answer:
      "Visit our Careers page to view all open positions and submit your application online. Our HR team will get back to you within 5 business days.",
    open: false,
  },
  {
    id: 4,
    question: "How do I apply for a job at Astron?",
    answer:
      "You can also send your CV directly to careers@astron.lk with the position title in the subject line.",
    open: false,
  },
];

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon-Fri 9am–5pm",
    detail: "+94 77 124 1231",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Speak to our friendly team",
    detail: "info@codevixe.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    subtitle: "Visit our office",
    detail: "N0.21, adasjdjasd, dsas",
  },
];

export function ContactUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5">
        <section className="relative h-[65vh] sm:h-[70vh] lg:h-[720px] min-h-[450px] overflow-hidden rounded-[20px] lg:rounded-[30px] mb-8">
          <img
            src={imgHero}
            alt="Contact Astron"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Navbar Overlay */}
          <Navbar />

          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8">
            <span className="text-white/70 text-sm">| Contact Us</span>
          </div>

          <div className="relative z-10 flex flex-col justify-end h-full px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
            <div className="max-w-2xl">
              <h1 className="text-white text-[32px] sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-4 lg:mb-6">
                We're Here<br />to Listen and Help
              </h1>
              <p className="text-white/80 text-[14px] leading-relaxed max-w-md mb-6 lg:mb-8 tracking-tight">
                Connecting you with the right solutions. Our dedicated team promises a 24–48 hour response time for all your enquiries.
              </p>
              <button className="border border-white/40 backdrop-blur-md text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all active:scale-95">
                View FAQs
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Info Cards */}
      <section className="py-8 lg:py-12 px-4 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="border border-gray-300 rounded-2xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactCards.map((card) => (
              <div key={card.title} className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[rgba(0,84,0,0.08)] flex items-center justify-center flex-shrink-0">
                  <card.icon size={24} className="text-[#005400]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#383838]">{card.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{card.subtitle}</p>
                  <p className="text-lg font-semibold text-[#383838] mt-1">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-10 lg:py-20 px-4 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left side */}
            <div className="lg:w-5/12">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight leading-tight mb-4 lg:mb-6">
                Let's get in touch<br />with Us
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempus incididunt ut dolore et labore et dolore magna aliqua.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 mb-10">
                {["facebook", "instagram", "twitter", "linkedin", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#005400] hover:text-[#005400] transition-colors text-xs font-bold uppercase"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>

              {/* Operating Hours */}
              <div>
                <h3 className="text-base font-semibold text-[#2e2e2e] mb-4">Operating Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Week Days</span>
                    <span className="font-semibold text-[#2e2e2e]">8:00 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-semibold text-[#2e2e2e]">8:00 AM – 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday & Poya</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:w-7/12">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-[#2e2e2e] mb-2">Contact Us</h3>
                <p className="text-sm text-gray-400 mb-6 lg:mb-8">The friendly team would love to hear from you.</p>

                <form className="space-y-4 lg:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#303030] block mb-2">First Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your first Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#303030] block mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter your last Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303030] block mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303030] block mb-2">Mobile Number</label>
                    <div className="flex gap-2">
                      <div className="border border-gray-300 rounded-xl px-3 py-3.5 text-sm text-gray-500 flex items-center gap-1 whitespace-nowrap">
                        +94 ▾
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="flex-1 border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#303030] block mb-2">Message *</label>
                    <textarea
                      rows={4}
                      placeholder="Your message..."
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#005400] placeholder:text-gray-300 resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#005400] text-white font-semibold py-4 rounded-full uppercase tracking-wider text-sm hover:bg-[#003800] transition-colors"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 lg:py-20 px-4 lg:px-8 bg-gray-50/50">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight text-center mb-8 lg:mb-12">
            Frequently Asked<br />Questions
          </h2>

          <div className="space-y-3 lg:space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  className="w-full flex items-center justify-between px-4 lg:px-8 py-4 lg:py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <div className="flex items-center gap-3 lg:gap-4 pr-4">
                    <span className="text-sm font-bold text-gray-400 shrink-0">
                      {String(faq.id).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-[#2e2e2e]">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openFaq === faq.id ? "bg-[#005400] text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {openFaq === faq.id ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 lg:px-8 pb-5 lg:pb-6 lg:pl-20 pl-[3.25rem]">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 lg:px-5 pb-4">
        <div className="h-[300px] lg:h-[500px] overflow-hidden relative rounded-[20px] lg:rounded-[30px]">
          {/* Google Maps Embed - Astron Limited, Colombo */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798654857448!2d79.85844931477473!3d6.914681995007345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f7598b9%3A0x9b8c0a0c0a0c0a0c!2sAstron%20Limited!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Astron Limited Location"
            className="w-full h-full rounded-[20px] lg:rounded-[30px]"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
