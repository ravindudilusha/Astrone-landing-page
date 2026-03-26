import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import { OperationsDropdown } from "./OperationsDropdown";
import { BrandsDropdown } from "./BrandsDropdown";
import { SearchOverlay } from "./SearchOverlay";

interface NavbarProps {
  variant?: "hero" | "standard";
  smallLogo?: boolean;
}

const navLinks = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Our Brands", href: "#", hasDropdown: true },
  { label: "Operations", href: "#", hasDropdown: true },
  { label: "BA Partner", href: "/partner", hasDropdown: false },
  { label: "Careers", href: "/careers", hasDropdown: false },
  { label: "CSR", href: "/csr", hasDropdown: false },
  { label: "Feedback", href: "/feedback", hasDropdown: false },
];

export function Navbar({ variant = "hero", smallLogo = false }: NavbarProps) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navbar inside hero */}
      {variant === "hero" && (
        <div className="relative z-20 pt-6 lg:pt-10 px-4 lg:px-12">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={imgImage149}
                alt="Astron Logo"
                className={`transition-all duration-300 ${
                  smallLogo ? "h-[32px] lg:h-[40px] w-auto" : "h-[32px] lg:h-[40px] w-auto"
                } object-contain`}
              />
            </Link>

            <div className="flex items-center gap-4">
              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                {navLinks.map((link) => {
                  const isActive =
                    link.href !== "#" &&
                    (link.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.href));

                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-semibold text-white backdrop-blur-sm transition-all whitespace-nowrap ${
                          isActive
                            ? "bg-white/30 ring-1 ring-white"
                            : "bg-white/20 hover:bg-white/30"
                        }`}
                      >
                        {link.label}
                        {link.hasDropdown && <ChevronDown size={16} />}
                      </Link>

                      {/* Our Brands Dropdown - Custom Design */}
                      {link.hasDropdown && link.label === "Our Brands" && openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                          <BrandsDropdown />
                        </div>
                      )}

                      {/* Operations Dropdown - Custom Design */}
                      {link.hasDropdown && link.label === "Operations" && openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                          <OperationsDropdown />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Search icon */}
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="w-10 h-10 rounded-full bg-[#2f872d] flex items-center justify-center text-white hover:bg-[#005400] transition-colors flex-shrink-0 ml-10"
                >
                  <Search size={18} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Standard Navbar (for non-hero pages) */}
      {variant === "standard" && (
        <div className="relative z-20 py-4 lg:py-6 px-4 lg:px-12">
          <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={imgImage149}
                alt="Astron Logo"
                className="h-[40px] lg:h-[56px] w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-4">
              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                {navLinks.map((link) => {
                  const isActive =
                    link.href !== "#" &&
                    (link.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.href));

                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={link.href}
                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-semibold text-[#4c4c4c] backdrop-blur-sm transition-all whitespace-nowrap ${
                          isActive
                            ? "bg-[rgba(204,204,204,0.5)]"
                            : "bg-[rgba(204,204,204,0.3)] hover:bg-[rgba(204,204,204,0.5)]"
                        }`}
                      >
                        {link.label}
                        {link.hasDropdown && <ChevronDown size={16} />}
                      </Link>

                      {/* Our Brands Dropdown - Custom Design */}
                      {link.hasDropdown && link.label === "Our Brands" && openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                          <BrandsDropdown />
                        </div>
                      )}

                      {/* Operations Dropdown - Custom Design */}
                      {link.hasDropdown && link.label === "Operations" && openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                          <OperationsDropdown />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Search icon */}
                <button className="w-10 h-10 rounded-full bg-[#2f872d] flex items-center justify-center text-white hover:bg-[#005400] transition-colors flex-shrink-0 ml-10">
                  <Search size={18} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-auto w-10 h-10 rounded-full bg-[rgba(204,204,204,0.3)] flex items-center justify-center text-[#4c4c4c]"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Navbar on scroll */}
      {scrolled && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300">
          <div className="py-3 lg:py-4 px-4 lg:px-8">
            <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <img
                  src={imgImage149}
                  alt="Astron Logo"
                  className="h-[32px] lg:h-[36px] w-auto object-contain transition-all duration-300"
                />
              </Link>

              <div className="flex items-center gap-4">
                {/* Desktop Nav Items */}
                <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href !== "#" &&
                      (link.href === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(link.href));

                    return (
                      <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Link
                          to={link.href}
                          className={`flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-semibold backdrop-blur-sm transition-all whitespace-nowrap ${
                            isActive
                              ? "bg-[#005400] text-white"
                              : "bg-[rgba(204,204,204,0.3)] text-[#4c4c4c] hover:bg-[rgba(204,204,204,0.5)]"
                          }`}
                        >
                          {link.label}
                          {link.hasDropdown && <ChevronDown size={16} />}
                        </Link>

                        {/* Our Brands Dropdown - Custom Design */}
                        {link.hasDropdown && link.label === "Our Brands" && openDropdown === link.label && (
                          <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                            <BrandsDropdown />
                          </div>
                        )}

                        {/* Operations Dropdown - Custom Design */}
                        {link.hasDropdown && link.label === "Operations" && openDropdown === link.label && (
                          <div className="absolute top-full left-0 mt-2 z-50 dropdown-bridge">
                            <OperationsDropdown />
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Search icon */}
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="w-10 h-10 rounded-full bg-[#2f872d] flex items-center justify-center text-white hover:bg-[#005400] transition-colors flex-shrink-0 ml-10"
                  >
                    <Search size={18} />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden ml-auto w-10 h-10 rounded-full bg-[rgba(204,204,204,0.3)] flex items-center justify-center text-[#4c4c4c]"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu side drawer */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[4px] transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-[400px] h-full bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={imgImage149}
                alt="Astron Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#2e2e2e] hover:bg-gray-200 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-3 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href !== "#" &&
                  (link.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.href));

                return (
                  <div key={link.label} className="px-3">
                    {!link.hasDropdown ? (
                      <Link
                        to={link.href}
                        className={`block px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all ${
                          isActive
                            ? "bg-[#005400] text-white shadow-md shadow-[#005400]/20"
                            : "text-[#2e2e2e] hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <div className="py-1">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all ${
                            openDropdown === link.label
                              ? "bg-gray-100 text-[#005400]"
                              : "text-[#2e2e2e] hover:bg-gray-100"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              openDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown Content */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            openDropdown === link.label ? "max-h-[400px] opacity-100 mt-1" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="bg-gray-50/50 rounded-xl py-2 px-4 space-y-1 ml-2 border-l-2 border-[#005400]/20">
                            {link.label === "Our Brands" && (
                              <>
                                <Link to="/brands/pharmaceuticals" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Pharmaceuticals</Link>
                                <Link to="/brands/nutrition" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Nutrition</Link>
                                <Link to="/brands/healing-herbs" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Healing Herbs</Link>
                                <Link to="/brands/personal-care" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Personal Care</Link>
                                <Link to="/brands/animal-health" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Animal Health</Link>
                                <Link to="/brands/optipet" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Optipet</Link>
                              </>
                            )}
                            {link.label === "Operations" && (
                              <>
                                <Link to="/operations/rnd" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">R&D</Link>
                                <Link to="/operations/manufacturing" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Manufacturing</Link>
                                <Link to="/operations/quality-assurance" className="block py-2.5 px-3 text-[14px] font-medium text-[#4c4c4c] hover:text-[#005400] transition-colors">Quality Assurance</Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Footer inside Drawer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex-shrink-0">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full bg-[#005400] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#004000] active:scale-[0.98] transition-all shadow-lg shadow-[#005400]/10"
            >
              <Search size={18} />
              Quick Search
            </button>
            <p className="text-center text-xs text-gray-400 mt-4 font-medium">
              &copy; {new Date().getFullYear()} Astron Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Global Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
