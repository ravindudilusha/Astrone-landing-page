import { Factory, FlaskConical, Building2 } from "lucide-react";
import { Link } from "react-router";

function OperationItem({ 
  icon: Icon, 
  title, 
  description,
  href
}: { 
  icon: any; 
  title: string; 
  description: string;
  href: string;
}) {
  return (
    <Link 
      to={href}
      className="flex gap-[17px] items-center rounded-[7px] w-full px-[12px] py-[10px] hover:bg-[rgba(47,135,45,0.08)] transition-colors cursor-pointer text-left"
    >
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="bg-[#2f872d] col-1 ml-0 mt-0 rounded-[7px] row-1 size-[58px]" />
        <div className="col-1 ml-0 mt-0 row-1 size-[58px] flex items-center justify-center relative">
          <Icon className="w-[24px] h-[24px] text-white" strokeWidth={2} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] relative shrink-0">
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold relative shrink-0 text-[#4f4f4f] text-[18px] whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium relative shrink-0 text-[#878787] text-[9px] tracking-[-0.18px] w-[162px]">
          {description}
        </p>
      </div>
    </Link>
  );
}

export function OperationsDropdown() {
  return (
    <div className="relative w-[300px]">
      <div className="bg-white rounded-[20px] shadow-lg p-[20px]">
        {/* Vertical Layout - Single Column */}
        <div className="flex flex-col gap-[8px]">
          <OperationItem 
            icon={Factory}
            title="Manufacturing"
            description="Lorem ipsum dolor sit amet, consetetur adipiscing elit"
            href="/operations/manufacturing"
          />
          <OperationItem 
            icon={FlaskConical}
            title="Quality Assurance"
            description="Lorem ipsum dolor sit amet, consetetur adipiscing elit"
            href="/operations/quality-assurance"
          />
          <OperationItem 
            icon={Building2}
            title="R&D"
            description="Lorem ipsum dolor sit amet, consetetur adipiscing elit"
            href="/operations/rnd"
          />
        </div>
      </div>
    </div>
  );
}
