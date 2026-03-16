import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
  };
}

export function EnquireModal({ isOpen, onClose, product }: EnquireModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+94",
    mobile: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add your submission logic here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-[5px] bg-[rgba(10,26,41,0.3)]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[24px] w-full max-w-[992px] max-h-[90vh] overflow-y-auto shadow-[0px_4px_32px_0px_rgba(111,108,143,0.12),0px_3px_12px_0px_rgba(170,170,190,0.06)] z-10">
        <div className="border border-[#f1f2f9] rounded-[24px] absolute inset-0 pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-[#6F6C8F]" />
        </button>

        {/* Content */}
        <div className="px-6 py-8 sm:px-[64px] sm:py-[64px]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-[707px] mx-auto">
            {/* Title Section */}
            <div className="flex flex-col items-center mb-[23px] w-full">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] sm:text-[36px] text-[#444] text-center tracking-[-0.72px] leading-[32px] sm:leading-[45px]">
                Enquire our products
              </h2>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#777] tracking-[-0.32px] leading-[24px] sm:leading-[37px] mt-2 sm:mt-0 text-center">
                Please reach us through our form our company will contact you soon.
              </p>
            </div>

            {/* Product Section */}
            <div className="w-full mb-[26px]">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px]">
                Product
              </p>
              <div className="flex gap-[16px] items-center">
                <div className="w-[77px] h-[81px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1f1f1f] tracking-[-0.48px]">
                    {product.name}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-[#494949] tracking-[-0.28px]">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>

            {/* First Name & Last Name Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[16px] w-full mb-6 sm:mb-[26px]">
              {/* First Name */}
              <div className="flex-1">
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px] block">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first Name"
                  required
                  className="w-full h-[52px] px-[28.92px] bg-white border border-[#8f8f8f] rounded-[12px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] text-[#313131] placeholder:text-[#cecece] focus:outline-none focus:border-[#005400] transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px] block">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last Name"
                  className="w-full h-[52px] px-[27.68px] bg-white border border-[#8f8f8f] rounded-[12px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] text-[#313131] placeholder:text-[#cecece] focus:outline-none focus:border-[#005400] transition-colors"
                />
              </div>
            </div>

            {/* Email & Mobile Number Row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[26px] w-full mb-6 sm:mb-[26px]">
              {/* Email */}
              <div className="flex-1">
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px] block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className="w-full h-[52px] px-[13.92px] bg-white border border-[#8f8f8f] rounded-[12px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] text-[#313131] placeholder:text-[#cecece] focus:outline-none focus:border-[#005400] transition-colors"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex-1">
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px] block">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute left-[11.27px] top-1/2 -translate-y-1/2 flex items-center gap-[8px] pr-[12px] border-r border-[#DFEAF2]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[14px] text-[#313131]">
                      +94
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#434343]" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full h-[52px] pl-[88.16px] pr-[13.92px] bg-white border border-[#8f8f8f] rounded-[12px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] text-[#313131] placeholder:text-[#cecece] focus:outline-none focus:border-[#005400] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="w-full mb-[26px]">
              <label className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#303030] mb-[27px] block">
                Message / Proposal Brief *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave us a message ..."
                required
                rows={3}
                className="w-full min-h-[79px] px-[33.4px] py-[18px] bg-white border border-[#8f8f8f] rounded-[12px] font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] text-[#313131] placeholder:text-[#cdcdcd] focus:outline-none focus:border-[#005400] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 sm:mt-0 bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] tracking-[0.64px] uppercase w-full sm:w-[449px] h-[64px] rounded-full hover:bg-[#004400] transition-colors"
            >
              Enquire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
