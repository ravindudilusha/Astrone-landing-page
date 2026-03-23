import { X, Maximize2 } from "lucide-react";
import svgPaths360 from "../../imports/svg-4j646ktm2r";
import { useNavigate } from "react-router";

interface ProductViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    category?: string;
    video?: string;
  };
}

export function ProductViewModal({ isOpen, onClose, product }: ProductViewModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleEnquireClick = () => {
    navigate("/enquire", { state: { product } });
    onClose();
  };

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-[20px] sm:rounded-[30px] w-full max-w-[850px] max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] w-[32px] h-[32px] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="px-6 py-8 sm:px-[70px] sm:py-[50px]">
          {/* Title Section */}
          <div className="flex flex-col items-center mb-[23px]">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] sm:text-[36px] text-[#444] text-center tracking-[-0.72px] leading-[32px] sm:leading-[45px]">
              {product.name}
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] sm:text-[16px] text-[#777] tracking-[-0.32px] leading-[24px] sm:leading-[37px] mt-2 sm:mt-0 text-center">
              {product.description}
            </p>
          </div>

          {/* 3D Viewer Area */}
          <div className="bg-white rounded-[22px] h-[300px] sm:h-[450px] flex items-center justify-center relative mb-[24px] sm:mb-[32px] overflow-hidden">
            {product.video ? (
              <video
                src={product.video}
                autoPlay
                controls
                loop
                className="w-full h-full object-contain relative z-10"
              />
            ) : (
              /* Product Image */
              <div className="relative z-10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[280px] max-h-[280px] object-contain"
                />
                {/* Shadow under product */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <svg width="117" height="23" viewBox="0 0 117 23" fill="none">
                    <ellipse cx="58.5" cy="11.5" rx="58.5" ry="11.5" fill="url(#shadow_gradient_modal)" />
                    <defs>
                      <radialGradient id="shadow_gradient_modal" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.5 11.5) scale(58.5 11.5)">
                        <stop stopOpacity="0.2" />
                        <stop offset="1" stopColor="#3F3F3F" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
          </div>


          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
            <div className="flex flex-col text-center sm:text-left">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[22px] sm:text-[26px] text-[#444] tracking-[-0.52px] leading-[30px] sm:leading-[40px]">
                Want this product ?
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] sm:text-[15px] text-[#777] tracking-[-0.3px] leading-[21px] mt-1 sm:mt-0">
                Please send us a message. We'll contact you.
              </p>
            </div>
            <button 
              onClick={handleEnquireClick}
              className="bg-[#005400] w-full sm:w-auto text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] px-[40px] h-[49px] rounded-full hover:bg-[#004400] transition-colors"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
