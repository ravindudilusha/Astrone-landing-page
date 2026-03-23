import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductViewModal } from "../components/ProductViewModal";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { Link } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import imgRectangle37 from "../../assets/c92549b5fa5f58821f330321ea304d3ec7615067.png";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import imgImage133 from "../../assets/dac0105114435eeefd0a2305d78e3ffcf56d4ef2.png";
import imgImage131 from "../../assets/f293267b48e5d2b24e7403940d14de9886e4bcd0.png";
import imgImage132 from "../../assets/6edf8466e4730854f57b084e12be4debf48e029f.png";
import imgImage143 from "../../assets/1eb1bd4a3ef640224a144d68310961a1aa2b653e.png";
import imgImage146 from "../../assets/93167ed7bab674d2dea0eeb23ab9742008130980.png";
import imgImage142 from "../../assets/3e60dd4361b76e2c565543b76d28c442723017f7.png";
import imgImage137 from "../../assets/8b312d74f1d7013b00cb2fd701dcb101c335c297.png";
import imgImage141 from "../../assets/96a308e1f661fc1f1fa812ac08fbf2b110ae6126.png";
import imgImage136 from "../../assets/45a87694f45a68252941fa8be19536df934563cf.png";
import imgAllermine from "../../assets/Allermine.png";
import videoAllermine from "../../assets/videos/Allermine 100ml.mp4";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";

// Product categories with counts and subcategories
const categories = [
  { name: "All Products", count: 120, isSpecial: true },
  { name: "Pain Management", count: 5 },
  { name: "Vitamins & Minerals", count: 3 },
  { name: "Worm Eradication", count: 6 },
  {
    name: "Skin Care",
    count: 24,
    subcategories: [
      { name: "Therapeutic Creams and Ointments", count: 6 },
      { name: "Moisturizing Cream", count: 6 },
      { name: "Skin, Nail and Hair Care", count: 6 },
      { name: "Nappy Rash", count: 6 },
    ]
  },
  {
    name: "Respiratory",
    count: 5,
    subcategories: []
  },
  { name: "Antibiotics", count: 5 },
  { name: "Anti-Allergenics", count: 5 },
  { name: "Oral Care", count: 5 },
];

// Sample products using the imported images with proper categories
const allProducts = [
  {
    id: 1,
    name: "Paracetamol",
    image: imgImage133,
    category: "Pain Management",
    categoryColor: "#002e54",
    description: "Fast-acting pain relief tablets"
  },
  {
    id: 2,
    name: "Multi-Vita Syrup",
    image: imgImage131,
    category: "Vitamins & Minerals",
    categoryColor: "#aa5b00",
    description: "Children's Multivitamin Syrup"
  },
  {
    id: 3,
    name: "Ibuprofen",
    image: imgImage132,
    category: "Pain Management",
    categoryColor: "#002e54",
    description: "Anti-inflammatory tablets"
  },
  {
    id: 4,
    name: "Vitamin C",
    image: imgImage143,
    category: "Vitamins & Minerals",
    categoryColor: "#aa5b00",
    description: "Immune support supplement"
  },
  {
    id: 5,
    name: "Calcium Plus",
    image: imgImage146,
    category: "Vitamins & Minerals",
    categoryColor: "#aa5b00",
    description: "Bone health supplement"
  },
  {
    id: 6,
    name: "Aspirin",
    image: imgImage142,
    category: "Pain Management",
    categoryColor: "#002e54",
    description: "Pain relief and fever reducer"
  },
  {
    id: 7,
    name: "Skin Cream",
    image: imgImage137,
    category: "Moisturizing Cream",
    categoryColor: "#aa5b00",
    description: "Moisturizing skin cream"
  },
  {
    id: 8,
    name: "Tooth Paste",
    image: imgImage141,
    category: "Oral Care",
    categoryColor: "#002e54",
    description: "Complete oral care solution"
  },
  {
    id: 9,
    name: "Cough Syrup",
    image: imgImage136,
    category: "Respiratory",
    categoryColor: "#aa5b00",
    description: "Relief from cough and cold"
  },
  {
    id: 10,
    name: "Antibiotic Capsules",
    image: imgImage133,
    category: "Antibiotics",
    categoryColor: "#002e54",
    description: "Broad spectrum antibiotic"
  },
  {
    id: 11,
    name: "Allergy Relief",
    image: imgImage131,
    category: "Anti-Allergenics",
    categoryColor: "#aa5b00",
    description: "Fast allergy relief tablets"
  },
  {
    id: 12,
    name: "Deworming Tablet",
    image: imgImage132,
    category: "Worm Eradication",
    categoryColor: "#002e54",
    description: "Effective worm treatment"
  },
  {
    id: 13,
    name: "Therapeutic Ointment",
    image: imgImage143,
    category: "Therapeutic Creams and Ointments",
    categoryColor: "#aa5b00",
    description: "Healing therapeutic ointment"
  },
  {
    id: 14,
    name: "Nail Care Solution",
    image: imgImage146,
    category: "Skin, Nail and Hair Care",
    categoryColor: "#002e54",
    description: "Complete nail care treatment"
  },
  {
    id: 15,
    name: "Allermine 100ml",
    image: imgAllermine,
    video: videoAllermine,
    category: "Anti-Allergenics",
    categoryColor: "#aa5b00",
    description: "Multi-symptom allergy relief"
  },
];

export default function Pharmaceuticals() {
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
    let matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;

    // If no direct match, check if selectedCategory is a parent category and product is in one of its subcategories
    if (!matchesCategory) {
      const parentCategory = categories.find(c => c.name === selectedCategory);
      if (parentCategory && parentCategory.subcategories) {
        matchesCategory = parentCategory.subcategories.some(sub => sub.name === product.category);
      }
    }

    // Search filter
    const matchesSearch = searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Get count for a category (including subcategories)
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All Products") return allProducts.length;

    // Check if category has subcategories
    const categoryDef = categories.find(c => c.name === categoryName);
    if (categoryDef && categoryDef.subcategories && categoryDef.subcategories.length > 0) {
      return allProducts.filter(p =>
        p.category === categoryName ||
        categoryDef.subcategories.some(sub => sub.name === p.category)
      ).length;
    }

    return allProducts.filter(p => p.category === categoryName).length;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with integrated navbar */}
      <section className="relative pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <div className="relative h-[65vh] sm:h-[70vh] lg:h-[820px] min-h-[480px] rounded-[20px] lg:rounded-[30px] overflow-hidden flex flex-col">
            <img
              src={imgRectangle37}
              alt="Astron Pharmaceuticals"
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
                  Pharmaceuticals
                </h1>
                <p className="text-white/80 text-[14px] lg:text-lg leading-relaxed max-w-xl tracking-tight lg:tracking-[-0.36px]">
                  Trusted by generations of Sri Lankans for over 70 years. Delivering world-class pharmaceutical solutions
                </p>
              </div>
            </div>

            <div className="absolute right-6 sm:right-14 bottom-6 sm:bottom-16 hidden sm:block">
              <p className="text-white/90 text-sm sm:text-lg font-semibold tracking-tight">
                Let's Discuss
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Discover our Brands Section */}
      <ScrollAnimation delay={0.1} direction="up" className="text-center mt-12 sm:mt-[75px] mb-12 sm:mb-[95px] px-5 sm:px-6">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-[#1a1a1a] mb-3 lg:mb-4 tracking-tight leading-tight">
          Discover our <span className="text-[#878787]">Brands</span>
        </h2>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] lg:text-[16px] leading-relaxed tracking-[-0.16px] text-[#7c7c7c] max-w-[746px] mx-auto mb-8 sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] lg:text-[20px] leading-relaxed lg:leading-[37px] tracking-tight lg:tracking-[-0.4px] text-[#505050] max-w-[980px] mx-auto">
          The major share of Astron business is currently in the local development, manufacture and marketing of several major pharmaceutical therapeutic groups in a variety of dosage forms, strengths and pack sizes. All these products are marketed under the Astron logo.
        </p>
      </ScrollAnimation>

      {/* Products Section */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-5 mb-20 overflow-hidden">
        {/* Section Header */}
        <ScrollAnimation delay={0.2} direction="up" className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10 mb-10 lg:mb-[50px]">
          <div className="flex flex-col gap-1">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] lg:text-[32px] tracking-tight text-[#444]">
              Pharmaceuticals
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] lg:text-[16px] text-[#797979]">
              Premium healthcare products for a healthier nation
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
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[50px]">
          {/* Sidebar Categories */}
          <ScrollAnimation delay={0.3} direction="right" className="w-full lg:w-[280px] lg:flex-shrink-0">
            {/* Mobile Categories - Horizontal Scroll or Accordion? Let's go with a cleaner stacked list with better spacing */}
            <div className="flex flex-col gap-4 lg:gap-[26px]">
              {categories.map((category, index) => (
                <div key={category.name} className="flex flex-col">
                  {/* Main Category */}
                  <div className="relative group/cat">
                    <button
                      onClick={() => {
                        setSelectedCategory(category.name);
                        if (category.subcategories && category.subcategories.length > 0) {
                          toggleCategory(category.name);
                        }
                      }}
                      className="w-full flex items-center justify-between text-left px-5 py-3 rounded-xl transition-all relative z-10 border border-transparent hover:border-black/5"
                    >
                      <p className={`font-['Open_Sans',sans-serif] text-base lg:text-[18px] font-bold ${selectedCategory === category.name
                          ? "text-white"
                          : "text-[#1a191f]"
                        }`}>
                        {category.name}
                      </p>

                      {/* Show chevron for expandable categories, count for others */}
                      {category.subcategories && category.subcategories.length > 0 ? (
                        <ChevronDown
                          className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform ${selectedCategory === category.name ? "text-white" : "text-[#1a191f]"
                            } ${expandedCategories.includes(category.name) ? 'rotate-180' : ''
                            }`}
                        />
                      ) : (
                        <div className={`rounded-lg px-2.5 py-1 min-w-[28px] flex items-center justify-center transition-colors ${selectedCategory === category.name ? "bg-white/20 text-white" : "bg-[#f7f7f7] text-[#505050]"
                          }`}>
                          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs lg:text-[14px]">
                            {getCategoryCount(category.name)}
                          </p>
                        </div>
                      )}
                    </button>

                    {/* Selected category green background */}
                    {selectedCategory === category.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#297b29] to-[#009300] rounded-xl shadow-md z-0" />
                    )}
                  </div>

                  {/* Subcategories */}
                  {category.subcategories && category.subcategories.length > 0 && expandedCategories.includes(category.name) && (
                    <div className="flex flex-col gap-3 pl-4 lg:pl-[12px] mt-4 mb-2">
                      {category.subcategories.map(subcategory => (
                        <div key={subcategory.name} className="relative">
                          <button
                            onClick={() => setSelectedCategory(subcategory.name)}
                            className="w-full flex items-center justify-between text-left px-5 py-2.5 rounded-xl transition-all relative z-10"
                          >
                            <p className={`font-['Open_Sans',sans-serif] text-sm lg:text-[18px] pr-2 ${selectedCategory === subcategory.name
                                ? "font-bold text-white"
                                : "font-normal text-[#1a191f]"
                              }`}>
                              {subcategory.name}
                            </p>
                            <div className={`rounded-lg px-2.5 py-1 min-w-[28px] flex items-center justify-center transition-colors ${selectedCategory === subcategory.name ? "bg-white/20 text-white" : "bg-[#f7f7f7] text-[#505050]"
                              }`}>
                              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-xs lg:text-[14px]">
                                {getCategoryCount(subcategory.name)}
                              </p>
                            </div>
                          </button>

                          {/* Selected subcategory green background */}
                          {selectedCategory === subcategory.name && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#297b29] to-[#009300] rounded-xl shadow-sm z-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Products Grid */}
          <ScrollAnimation delay={0.4} direction="up" className="flex-1">
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
                          backgroundColor: product.categoryColor === "#002e54" ? "#ebf8ff" : "#fff5e6"
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
          </ScrollAnimation>
        </div>
      </div>

      {/* Partner CTA Section */}
      <section className="px-4 lg:px-6 pb-6 lg:pb-10 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto">
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
        </ScrollAnimation>
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
