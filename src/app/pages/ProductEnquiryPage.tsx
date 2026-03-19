import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { ShieldCheck } from "lucide-react";

type ProductCategory = 
  | "Nutritional Supplements" 
  | "Syrups – Herbal" 
  | "Capsules – Herbal" 
  | "Syrups – Pharma"
  | "Capsules – Pharma"
  | "Tablets – Pharma"
  | "Creams & Ointments – Pharma" 
  | "POS – Pharma";

interface Product {
  name: string;
  description: string;
  image: string;
  category?: string;
}

const mapCategoryToEnquiryType = (category?: string): ProductCategory => {
  if (!category) return "Nutritional Supplements";
  const cat = category.toLowerCase();
  
  if (cat.includes("nutrition")) return "Nutritional Supplements";
  
  if (cat.includes("herbal")) {
    if (cat.includes("syrup") || cat.includes("cough")) return "Syrups – Herbal";
    if (cat.includes("capsule")) return "Capsules – Herbal";
  }

  // Specific Pharma mappings
  if (cat.includes("respiratory") || (cat.includes("syrup") && !cat.includes("herbal"))) return "Syrups – Pharma";
  if (cat.includes("anti-biotics") || (cat.includes("capsule") && !cat.includes("herbal"))) return "Capsules – Pharma";
  if (cat.includes("tablet") || cat.includes("nervous")) return "Tablets – Pharma";
  
  if (cat.includes("cream") || cat.includes("ointment") || cat.includes("skin") || cat.includes("nappy")) return "Creams & Ointments – Pharma";
  if (cat.includes("pos") || cat.includes("pediatric") || cat.includes("child")) return "POS – Pharma";
  
  // Default fallbacks for Healing Herbs if not caught above
  if (cat.includes("immune") || cat.includes("liver") || cat.includes("cold")) {
    if (cat.includes("syrup") || cat.includes("throat")) return "Syrups – Herbal";
    return "Capsules – Herbal"; // Default for healing herbs
  }

  return "Nutritional Supplements"; // Default fallback
};

export default function ProductEnquiryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as Product;
  const enquiryType = mapCategoryToEnquiryType(product?.category);

  // Fallback if no product is passed
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No product selected</h1>
          <button 
            onClick={() => navigate(-1)}
            className="bg-[#005400] text-white px-6 py-2 rounded-full"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const [form, setForm] = useState({
    // Your Details
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    ageGroup: "",
    gender: "",
    frequencyOfUse: "",
    userCategory: "",
    durationOfUse: "",
    
    // Feedback Metrics (generic keys for radio groups)
    metric1: "", // e.g., Taste, Appearance
    metric2: "", // e.g., Aftertaste, Ease of Removing
    metric3: "", // e.g., Smell/Aroma, Aftertaste (swallowing)
    metric4: "", // e.g., Ease of Opening, Clarity of Instructions
    metric5: "", // e.g., Ease of Measuring (for POS)
    
    overallSatisfaction: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add submission logic
    alert("Inquiry submitted successfully!");
    navigate("/");
  };

  const renderRadioGroup = (label: string, name: string, options: string[], helpText?: string) => (
    <div className="mb-6">
      <label className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#303030] block mb-1">
        {label}
      </label>
      {helpText && (
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-[#777] mb-3">
          {helpText}
        </p>
      )}
      <div className="flex flex-wrap gap-4 sm:gap-6">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                name={name}
                value={option}
                required
                className="peer appearance-none w-[18px] h-[18px] border-2 border-[#8f8f8f] rounded-full checked:border-[#005400] transition-colors cursor-pointer"
                onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              />
              <div className="absolute w-[10px] h-[10px] bg-[#005400] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] text-[#444] group-hover:text-[#005400] transition-colors">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  const getFormFields = () => {
    switch (enquiryType) {
      case "Nutritional Supplements":
        return (
          <>
            {/* Your Details */}
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
              {renderRadioGroup("User Category", "userCategory", ["Self", "Child", "Elderly family member", "Patient under medical advice", "Other"], "Who is using the supplement?")}
              {renderRadioGroup("Duration of Use", "durationOfUse", ["Less than 1 week", "1-4 weeks", "1-3 months", "More than 3 months"], "How long did you use this product?")}
            </div>
            {/* Product Feedback */}
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Taste / Flavor (if applicable)", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the taste?")}
              {renderRadioGroup("Aftertaste", "metric2", ["None", "Mild", "Moderate", "Strong"], "How was the aftertaste remaining in the mouth")}
              {renderRadioGroup("Ease of Opening / Handling", "metric3", ["Very Easy", "Easy", "Acceptable", "Difficult"], "Rate your experience with opening the product")}
              {renderRadioGroup("Clarity of Instructions / Label Information", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How clear and helpful was the information on the label")}
            </div>
          </>
        );
      case "Syrups – Herbal":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Taste", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the taste?")}
              {renderRadioGroup("Aftertaste", "metric2", ["None", "Mild", "Moderate", "Strong"], "How was the aftertaste remaining in the mouth")}
              {renderRadioGroup("Smell / Aroma", "metric3", ["Excellent", "Good", "Acceptable", "Poor"], "How was the smell that you felt")}
              {renderRadioGroup("Ease of Opening", "metric4", ["Very Easy", "Easy", "Acceptable", "Difficult"], "Rate your experience with opening the product")}
            </div>
          </>
        );
      case "Syrups – Pharma":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Taste", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the taste?")}
              {renderRadioGroup("After Taste / Mouth Feel", "metric2", ["None", "Mild", "Moderate", "Strong"], "How was the aftertaste remaining in the mouth")}
              {renderRadioGroup("Smell / Aroma", "metric3", ["Excellent", "Good", "Acceptable", "Poor"], "How was the smell that you felt")}
              {renderRadioGroup("Ease of Opening", "metric4", ["Very Easy", "Easy", "Acceptable", "Difficult"], "Rate your experience with opening the product")}
            </div>
          </>
        );
      case "Capsules – Pharma":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Capsule Appearance (Color / Shape / Size)", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was appearance of the capsule?")}
              {renderRadioGroup("Ease of Removing Capsules from Blister", "metric2", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How was experience of removing capsule?")}
              {renderRadioGroup("Any unpleasant aftertaste after swallowing", "metric3", ["None", "Mild", "Moderate", "Strong"], "How was the aftertaste?")}
              {renderRadioGroup("Clarity of Instructions / Label Information", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How clear and helpful was the information on the label")}
            </div>
          </>
        );
      case "Capsules – Herbal":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Capsule Appearance (Color / Shape / Size)", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the appearance of the capsule?")}
              {renderRadioGroup("Ease of Removing Capsules from Blister", "metric2", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How was experience of removing capsule?")}
              {renderRadioGroup("Any unpleasant aftertaste after swallowing", "metric3", ["None", "Mild", "Moderate", "Strong"], "How was the aftertaste?")}
              {renderRadioGroup("Clarity of Instructions / Label Information", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How clear and helpful was the information on the label")}
            </div>
          </>
        );
      case "Tablets – Pharma":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Tablet Appearance (Color / Shape / Size)", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the appearance of the tablet?")}
              {renderRadioGroup("Ease of Swallowing", "metric2", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How was the aftertaste remaining in the mouth")}
              {renderRadioGroup("Ease of Removing Tablets from Blister", "metric3", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How was experience of removing tablets?")}
              {renderRadioGroup("Clarity of Instructions / Label Information", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How clear and helpful was the information on the label")}
            </div>
          </>
        );
      case "Creams & Ointments – Pharma":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<18", "18-30", "31-50", "51+"])}
              {renderRadioGroup("Gender", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Product Appearance (Color / Texture / Consistency)", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was appearance the overall product?")}
              {renderRadioGroup("Ease of Application & Skin Absorption", "metric2", ["Excellent", "Good", "Acceptable", "Poor"], "How was experience when applying on the skin?")}
              {renderRadioGroup("Skin Feel After Application (Free of Greasiness / Residue)", "metric3", ["None", "Mild", "Moderate", "Strong"], "How was the experience after apply on the skin?")}
              {renderRadioGroup("Ease of Dispensing the Product", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How easily a product can be removed from its container")}
            </div>
          </>
        );
      case "POS – Pharma":
        return (
          <>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Your Child Details</h3>
              {renderRadioGroup("Age Group", "ageGroup", ["<1 year", "1-3 years", "4-6 years", "7-12 years"])}
              {renderRadioGroup("Gender of Child", "gender", ["Male", "Female", "Prefer not to say"])}
              {renderRadioGroup("Frequency of Use", "frequencyOfUse", ["First time", "Occasionally", "Regular user"], "How often do you use this product")}
            </div>
            <div className="mb-10">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Product Feedback</h3>
              {renderRadioGroup("Taste Acceptance by Child", "metric1", ["Excellent", "Good", "Acceptable", "Poor"], "How was the willingness of child to get this product?")}
              {renderRadioGroup("Ease of Reconstitution", "metric2", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How quickly and smoothly a dry powder turns back into a uniform liquid")}
              {renderRadioGroup("Aftertaste", "metric3", ["None", "Mild", "Moderate", "Strong"], "How was the aroma remaining in the mouth")}
              {renderRadioGroup("Clarity of Instructions / Label Information", "metric4", ["Excellent", "Good", "Acceptable", "Poor"], "How clear and helpful was the information on the label")}
              {renderRadioGroup("Ease of Measuring the Dose", "metric5", ["Very Easy", "Easy", "Acceptable", "Difficult"], "How easy was measuring the dose of the product?")}
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <div className="py-8 px-4 lg:px-8">
        <div className="mb-8">
          <Navbar variant="standard" />
        </div>
      </div>

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up" className="max-w-[850px] mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[40px] text-[#2e2e2e] mb-3 tracking-tight">
              Tell us about <span className="text-[#8e8e8e]">Our Product</span>
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] text-[#7c7c7c] max-w-[600px] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="bg-white border border-[#eeeeee] rounded-[30px] p-6 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            {/* Product Summary */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 pb-10 border-b border-[#f0f0f0]">
              <div className="w-[120px] h-[120px] bg-[#f9f9f9] rounded-2xl flex items-center justify-center p-4">
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[12px] font-bold text-[#8e8e8e] uppercase tracking-wider mb-1">Product</p>
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] text-[#2e2e2e] leading-tight mb-1">
                  {product.name}
                </h2>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[15px] text-[#555]">
                  {enquiryType}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {getFormFields()}

              {/* Overall Satisfaction */}
              <div className="mb-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#005400] mb-6 border-b pb-2">Overall Satisfaction</h3>
                {renderRadioGroup("How satisfied are you with the product overall?", "overallSatisfaction", ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"])}
              </div>

              {/* Comments */}
              <div className="mb-10">
                <label className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#303030] block mb-3">
                  Any Other Comments
                </label>
                <textarea
                  rows={4}
                  placeholder="Leave us a message ..."
                  className="w-full border border-[#d4d4d4] rounded-xl px-4 py-3 text-[14px] text-[#2e2e2e] focus:outline-none focus:border-[#005400] placeholder:text-[#cecece] resize-none"
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-6">
                <button
                  type="submit"
                  className="w-full sm:w-[450px] bg-[#005400] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] py-4 rounded-full uppercase tracking-wider hover:bg-[#003800] transition-all shadow-lg hover:shadow-[#00540033]"
                >
                  SUBMIT
                </button>
                
                <div className="flex items-start gap-3 max-w-[500px] text-[12px] text-[#777] bg-[#f9f9f9] p-4 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-[#005400] flex-shrink-0" />
                  <p>
                    We are committed to handling your data responsibly and protecting your privacy. We safely manage and encrypt all your information
                  </p>
                </div>
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
