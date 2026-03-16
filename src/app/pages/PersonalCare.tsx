import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductViewModal } from "../components/ProductViewModal";
import { Link } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import imgRectangle37 from "../../assets/4c9a787f4a7c9d8d2c26ff5d47ea5e27c722493a.png";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import imgImage145 from "../../assets/5300b421e1af28ed42557dea069754a4749c4e2f.png";
import imgImage140 from "../../assets/38bce08a78f5d0c36b2afe24ef7540b6f3062272.png";
import imgImage144 from "../../assets/b1395d04a7040f0ee0d497bda576761d63709885.png";
import imgImage143 from "../../assets/1eb1bd4a3ef640224a144d68310961a1aa2b653e.png";
import imgImage146 from "../../assets/93167ed7bab674d2dea0eeb23ab9742008130980.png";
import imgImage142 from "../../assets/3e60dd4361b76e2c565543b76d28c442723017f7.png";
import imgImage137 from "../../assets/8b312d74f1d7013b00cb2fd701dcb101c335c297.png";
import imgImage141 from "../../assets/96a308e1f661fc1f1fa812ac08fbf2b110ae6126.png";
import imgImage136 from "../../assets/45a87694f45a68252941fa8be19536df934563cf.png";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";

// Product categories for Personal Care
const categories = [
  { name: "All Products", count: 12, isSpecial: true },
  { name: "Hand Sanitizers", count: 3 },
  { name: "Body Care", count: 3 },
  { name: "Hair Care", count: 3 },
  { name: "Skin Care", count: 3 },
];

// Sample Personal Care products
const allProducts = [
  { 
    id: 1, 
    name: "Hand Sanitizer Gel", 
    image: imgImage145, 
    category: "Hand Sanitizers",
    categoryColor: "#0066cc",
    description: "Antibacterial hand gel"
  },
  { 
    id: 2, 
    name: "Sanitizer Spray", 
    image: imgImage140, 
    category: "Hand Sanitizers",
    categoryColor: "#0066cc",
    description: "Portable sanitizing spray"
  },
  { 
    id: 3, 
    name: "Pocket Sanitizer", 
    image: imgImage144, 
    category: "Hand Sanitizers",
    categoryColor: "#0066cc",
    description: "Travel-size sanitizer"
  },
  { 
    id: 4, 
    name: "Body Lotion", 
    image: imgImage143, 
    category: "Body Care",
    categoryColor: "#9b59b6",
    description: "Moisturizing body lotion"
  },
  { 
    id: 5, 
    name: "Body Wash", 
    image: imgImage146, 
    category: "Body Care",
    categoryColor: "#9b59b6",
    description: "Refreshing body cleanser"
  },
  { 
    id: 6, 
    name: "Body Butter", 
    image: imgImage142, 
    category: "Body Care",
    categoryColor: "#9b59b6",
    description: "Deep moisturizing cream"
  },
  { 
    id: 7, 
    name: "Shampoo", 
    image: imgImage137, 
    category: "Hair Care",
    categoryColor: "#e67e22",
    description: "Nourishing shampoo"
  },
  { 
    id: 8, 
    name: "Conditioner", 
    image: imgImage141, 
    category: "Hair Care",
    categoryColor: "#e67e22",
    description: "Smoothing conditioner"
  },
  { 
    id: 9, 
    name: "Hair Serum", 
    image: imgImage136, 
    category: "Hair Care",
    categoryColor: "#e67e22",
    description: "Hair strengthening serum"
  },
  { 
    id: 10, 
    name: "Face Cream", 
    image: imgImage145, 
    category: "Skin Care",
    categoryColor: "#16a085",
    description: "Anti-aging face cream"
  },
  { 
    id: 11, 
    name: "Sunscreen SPF 50", 
    image: imgImage140, 
    category: "Skin Care",
    categoryColor: "#16a085",
    description: "UV protection"
  },
  { 
    id: 12, 
    name: "Night Serum", 
    image: imgImage144, 
    category: "Skin Care",
    categoryColor: "#16a085",
    description: "Overnight skin repair"
  },
];

export default function PersonalCare() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Handle search
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Filter products based on selected category and search query
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    
    // Search filter
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get count for a category
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All Products") return allProducts.length;
    return allProducts.filter(p => p.category === categoryName).length;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with integrated navbar */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5">
        <div className="relative h-[65vh] sm:h-[70vh] lg:h-[820px] min-h-[480px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
          <img
            src={imgRectangle37}
            alt="Personal Care"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          {/* Navbar Overlay */}
          <Navbar />
          
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
            <div className="max-w-2xl">
              <h1 className="text-white text-[32px] sm:text-5xl lg:text-7xl font-semibold tracking-[-1px] lg:tracking-[-1.5px] leading-[1.15] lg:leading-tight mb-4 lg:mb-6">
                Astron<br />
                Personal Care
              </h1>
              <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-xl tracking-tight lg:tracking-[-0.36px]">
                Trusted by generations of Sri Lankans for over 70 years. Delivering world-class Nutrition solutions.
              </p>
            </div>
          </div>

          <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
            <p className="text-white/90 text-sm sm:text-lg font-semibold tracking-tight">
              | Our Brands
            </p>
          </div>
        </div>
      </section>

      {/* Discover our Brands Section */}
      <div className="text-center mt-12 sm:mt-[75px] mb-12 sm:mb-[95px] px-5 sm:px-6">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-[#1a1a1a] mb-3 lg:mb-4 tracking-tight leading-tight">
          Discover our <span className="text-[#878787]">Brands</span>
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] lg:text-[16px] leading-relaxed tracking-[-0.16px] text-[#7c7c7c] max-w-[746px] mx-auto mb-8 sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] lg:text-[20px] leading-relaxed lg:leading-[37px] tracking-tight lg:tracking-[-0.4px] text-[#505050] max-w-[980px] mx-auto">
          The natural choice of Astron business is centred in the local development, manufacture and marketing of several major pharmaceuticals therapeutic groups in a variety of dosage forms, strengths and pack sizes. All these products are marketed under the Astron logo.
        </p>
      </div>

      {/* Products Section */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-5 mb-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10 mb-10 lg:mb-[50px]">
          <div className="flex flex-col gap-1">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] lg:text-[32px] tracking-tight text-[#444]">
              Personal Care
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] lg:text-[16px] text-[#797979]">
              Quality personal care products for your daily routine
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[14px]">
            {/* Search Input */}
            <div className="flex items-center h-[52px] lg:h-[58px] rounded-full border border-black/10 bg-white sm:w-[320px] lg:w-[420px] pl-5 lg:pl-[25px] pr-1.5 py-1.5 gap-2 group focus-within:border-[#005400] transition-colors shadow-sm">
              <input
                type="text"
                placeholder="Search product"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 font-['DM_Sans',sans-serif] text-sm text-[#2e2e2e] outline-none bg-transparent placeholder:text-[#9ca3af]"
              />
              <button
                onClick={handleSearch}
                className="bg-[#005400] hover:bg-[#004400] text-white font-bold text-[12px] lg:text-[13px] px-5 lg:px-[17px] h-full rounded-full flex items-center gap-2 lg:gap-[12px] transition-all active:scale-95"
              >
                Search
                <div className="bg-white rounded-full p-1 lg:p-[5.66px] flex items-center justify-center">
                  <Search className="w-2.5 lg:w-[11px] h-2.5 lg:h-[11px] text-[#005400]" />
                </div>
              </button>
            </div>

            {/* Filters Button */}
            <div className="flex items-center justify-center gap-3 h-[52px] lg:h-[58px] px-6 rounded-full border border-black/10 bg-white cursor-pointer hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21M6 12H18M9 17H15" stroke="#3b3b3b" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-bold text-[13px] text-[#3b3b3b]">Filters</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[50px]">
          {/* Sidebar Categories */}
          <div className="w-full lg:w-[280px] lg:flex-shrink-0">
            <div className="flex flex-col gap-4 lg:gap-[26px]">
              {categories.map((category, index) => (
                <div key={category.name} className="flex flex-col">
                  {/* Main Category */}
                  <div className="relative group/cat">
                    <button
                      onClick={() => {
                        setSelectedCategory(category.name);
                      }}
                      className="w-full flex items-center justify-between text-left px-5 py-3 rounded-xl transition-all relative z-10 border border-transparent hover:border-black/5"
                    >
                      <p className={`font-['Open_Sans',sans-serif] text-base lg:text-[18px] font-bold ${
                        selectedCategory === category.name
                          ? "text-white"
                          : "text-[#1a191f]"
                      }`}>
                        {category.name}
                      </p>
                      
                      {/* Show count */}
                      <div className={`rounded-lg px-2.5 py-1 min-w-[28px] flex items-center justify-center transition-colors ${
                        selectedCategory === category.name ? "bg-white/20 text-white" : "bg-[#f7f7f7] text-[#505050]"
                      }`}>
                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs lg:text-[14px]">
                          {getCategoryCount(category.name)}
                        </p>
                      </div>
                    </button>
                    
                    {/* Selected category green background */}
                    {selectedCategory === category.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#297b29] to-[#009300] rounded-xl shadow-md z-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-[#7d7d7d] text-lg font-['Plus_Jakarta_Sans',sans-serif]">
                  No products found in this category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[24px]">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-[22px] overflow-visible group h-[334px] w-full border border-black/10 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-[14px] left-[11px] z-10">
                      <div 
                        className="backdrop-blur-[2px] rounded-[999px] px-[12px] py-[6px]"
                        style={{ 
                          backgroundColor: product.categoryColor === "#0066cc" ? "#ebf8ff" : product.categoryColor === "#9b59b6" ? "#f3e5f5" : product.categoryColor === "#e67e22" ? "#fff5e6" : "#e8f5f5"
                        }}
                      >
                        <p 
                          className="capitalize font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[8px] text-center whitespace-nowrap"
                          style={{ color: product.categoryColor }}
                        >
                          {product.category}
                        </p>
                      </div>
                    </div>

                    {/* Product Image Container */}
                    <div className="relative h-[185px] flex items-center justify-center pt-10 pb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-[107px] max-h-[105px] object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Shadow under product */}
                      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
                        <svg width="117" height="23" viewBox="0 0 117 23" fill="none">
                          <ellipse cx="58.5" cy="11.5" rx="58.5" ry="11.5" fill="url(#shadow_gradient)" />
                          <defs>
                            <radialGradient id="shadow_gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.5 11.5) scale(58.5 11.5)">
                              <stop stopOpacity="0.2" />
                              <stop offset="1" stopColor="#3F3F3F" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-[16px] pb-[16px] pt-[8px] relative">
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] text-[#484848] mb-[2px] text-center tracking-[-0.44px]">
                        {product.name}
                      </h4>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-[#b3b3b3] mb-[12px] text-center tracking-[-0.28px] line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* View in 3D button - positioned absolutely at bottom */}
                    <button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalOpen(true);
                      }}
                      className="absolute bottom-[25px] left-1/2 -translate-x-1/2 w-[194px] flex items-center justify-center gap-[6px] backdrop-blur-[2px] bg-[#e1ede0] text-[#005400] py-[10px] px-[10px] rounded-[14px] font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold transition-all hover:bg-[#d1ddd0] capitalize z-20 active:scale-95 shadow-sm"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g>
                          <path d="M10 16C10 17.1 9.1 18 8 18C6.9 18 6 17.1 6 16C6 14.9 6.9 14 8 14C9.1 14 10 14.9 10 16Z" stroke="#005400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="3" fill="#005400" />
                        </g>
                      </svg>
                      View in 3D
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-6 pb-6 lg:pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#005400] rounded-[24px] lg:rounded-[30px] min-h-[200px] lg:min-h-[262px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-8 lg:py-0 gap-6 lg:gap-0 text-center lg:text-left">
            {/* Decorative Leaf Background - Exact Figma positioning */}
            <div className="absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none hidden lg:block">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>

            <div className="flex-1 relative z-10 w-full">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight lg:tracking-[-1.16px] leading-tight max-w-2xl mx-auto lg:mx-0">
                Are you ready to partner with us?
              </h2>
            </div>

            <Link
              to="/partner"
              className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-6 lg:px-8 py-3 lg:py-5 rounded-full text-base lg:text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2 lg:mt-0 w-full sm:w-auto"
            >
              Let's start
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005400">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#005400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Product View Modal */}
      {selectedProduct && (
        <ProductViewModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
