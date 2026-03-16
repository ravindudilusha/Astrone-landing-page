import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import imgAstronLogo from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import svgPaths from "../../imports/svg-ntxlaw3re7";

const brandCategories = [
  { name: "Pharmaceuticals", path: "/brands/pharmaceuticals" },
  { name: "Nutrition", path: "/brands/nutrition" },
  { name: "Healing Herbs", path: "/brands/healing-herbs" },
  { name: "Personal Care", path: "/brands/personal-care" },
  { name: "Animal Health", path: "/brands/animal-health" },
  { name: "Optipet", path: "/brands/optipet" },
];

const operationsItems = [
  { name: "R&D", path: "/operations/rnd" },
  { name: "Manufacturing", path: "/operations/manufacturing" },
  { name: "Quality", path: "/operations/quality-assurance" },
];

function SearchIcon() {
  return (
    <svg className="w-[19.108px] h-[21.814px]" fill="none" viewBox="0 0 19.108 21.814">
      <path clipRule="evenodd" d={svgPaths.p3651e400} fill="white" fillRule="evenodd" />
    </svg>
  );
}

export function FeedbackNavbar() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [operationsOpen, setOperationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white rounded-[30px]">
        <div className="px-4 lg:px-8 xl:px-12 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={imgAstronLogo}
                alt="Astron Logo"
                className="h-[32px] lg:h-[40px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden xl:flex items-center gap-[10px]">
              {/* Home */}
              <Link
                to="/"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  Home
                </span>
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  About Us
                </span>
              </Link>

              {/* Our Brands */}
              <div className="relative">
                <button
                  onClick={() => {
                    setBrandsOpen(!brandsOpen);
                    setOperationsOpen(false);
                  }}
                  className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center gap-[6px] hover:bg-[rgba(204,204,204,0.4)] transition-colors"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                    Our Brands
                  </span>
                  <ChevronDown className="w-[24px] h-[24px] text-[#4c4c4c]" />
                </button>

                {/* Brands Dropdown */}
                {brandsOpen && (
                  <div className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-[20px] shadow-lg border border-gray-100 p-6 w-[620px] z-50">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {brandCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.path}
                          className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-[#2e2e2e] hover:text-[#005400] transition-colors py-2"
                          onClick={() => setBrandsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Operations */}
              <div className="relative">
                <button
                  onClick={() => {
                    setOperationsOpen(!operationsOpen);
                    setBrandsOpen(false);
                  }}
                  className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center gap-[6px] hover:bg-[rgba(204,204,204,0.4)] transition-colors"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                    Operations
                  </span>
                  <ChevronDown className="w-[24px] h-[24px] text-[#4c4c4c]" />
                </button>

                {/* Operations Dropdown */}
                {operationsOpen && (
                  <div className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-[20px] shadow-lg border border-gray-100 p-6 w-[280px] z-50">
                    <div className="flex flex-col gap-3">
                      {operationsItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] text-[#2e2e2e] hover:text-[#005400] transition-colors py-2"
                          onClick={() => setOperationsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* BA Partner */}
              <Link
                to="/partner"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  BA Partner
                </span>
              </Link>

              {/* Careers */}
              <Link
                to="/careers"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  Careers
                </span>
              </Link>

              {/* CSR */}
              <Link
                to="/csr"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  CSR
                </span>
              </Link>

              {/* Feedback */}
              <Link
                to="/feedback"
                className="bg-[rgba(204,204,204,0.3)] h-[40px] px-[10px] py-[10px] rounded-[999px] flex items-center justify-center hover:bg-[rgba(204,204,204,0.4)] transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] text-[#4c4c4c] whitespace-nowrap">
                  Feedback
                </span>
              </Link>

              {/* Search Icon */}
              <button className="bg-[#2f872d] h-[40px] w-[40px] rounded-[999px] flex items-center justify-center hover:bg-[#267021] transition-colors">
                <SearchIcon />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-full bg-[rgba(204,204,204,0.3)] flex items-center justify-center text-[#4c4c4c]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="absolute top-20 left-4 right-4 bg-white rounded-[20px] shadow-2xl max-h-[calc(100vh-100px)] overflow-y-auto">
            <nav className="py-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                About Us
              </Link>

              {/* Our Brands Mobile */}
              <div>
                <button
                  onClick={() => setBrandsOpen(!brandsOpen)}
                  className="w-full flex items-center justify-between px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
                >
                  Our Brands
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${brandsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {brandsOpen && (
                  <div className="bg-gray-50 py-2 space-y-1">
                    {brandCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-10 py-2 text-sm text-[#4c4c4c] hover:text-[#005400]"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Operations Mobile */}
              <div>
                <button
                  onClick={() => setOperationsOpen(!operationsOpen)}
                  className="w-full flex items-center justify-between px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
                >
                  Operations
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${operationsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {operationsOpen && (
                  <div className="bg-gray-50 py-2 space-y-1">
                    {operationsItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-10 py-2 text-sm text-[#4c4c4c] hover:text-[#005400]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                BA Partner
              </Link>
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                Careers
              </Link>
              <Link
                to="/csr"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                CSR
              </Link>
              <Link
                to="/feedback"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-3 text-base font-semibold text-[#2e2e2e] hover:bg-gray-50"
              >
                Feedback
              </Link>

              {/* Search Button */}
              <div className="px-6 pt-2 pb-4">
                <button className="w-full bg-[#005400] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#003800] transition-colors">
                  <SearchIcon />
                  Search
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
