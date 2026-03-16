import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import imgProduct1 from "../../assets/04c3df92e58c0466aa268a6d84de497845390713.png"; // Example product placeholder

export function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Lock body scroll when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 lg:top-10 lg:right-12 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors z-[110]"
      >
        <X size={24} />
      </button>

      <div className="max-w-[900px] mx-auto pt-24 lg:pt-32 px-4 lg:px-8 pb-16">
        {/* Header Strings */}
        <div className="text-center mb-10">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-3xl lg:text-4xl text-[#1a1a1a] mb-2 tracking-tight">
            Search any product
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm lg:text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <div className="relative flex-1">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={22} />
            </div>
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product here"
              className="w-full h-[60px] pl-[60px] pr-6 rounded-2xl border border-gray-200 text-base font-['Plus_Jakarta_Sans',sans-serif] text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#005400] transition-colors shadow-sm"
            />
          </div>
          <button className="h-[60px] px-10 rounded-2xl bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base hover:bg-[#004400] transition-colors flex items-center justify-center gap-2 shadow-md flex-shrink-0">
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Results Container (Mocked for UI) */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 lg:p-8 ${
                index !== 2 ? "border-b border-gray-100" : ""
              } hover:bg-gray-50/50 transition-colors`}
            >
              {/* Product Image */}
              <div className="w-[80px] h-[80px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center p-2">
                <img
                  src={imgProduct1}
                  alt="Product item"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl text-[#1a1a1a] mb-2">
                  Product Name
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-[#fff6e5] text-[#d9730d] text-[10px] font-bold tracking-wider rounded-full mb-3 uppercase">
                  Vitamins
                </div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-gray-400 leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>

              {/* View 3D Action */}
              <button className="w-full sm:w-auto mt-4 sm:mt-0 px-6 py-3.5 bg-[#e8f5e8] text-[#005400] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] rounded-[14px] hover:bg-[#d8e5d8] transition-colors flex items-center justify-center gap-2 flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 8.33C17.41 7.61 19 6.39 19 5C19 2.79 14.97 1 10 1C5.03 1 1 2.79 1 5C1 7.06 4.5 8.75 9 8.98" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M10.25 9L7.5 6.25V11.75L10.25 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                View in 3D
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
