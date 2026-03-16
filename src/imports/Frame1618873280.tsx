import svgPaths from "./svg-hz8m5t5jd3";

function HeaderButtonIconContainer() {
  return (
    <div className="bg-white content-stretch flex items-center p-[5.66px] relative rounded-[254.683px] shrink-0" data-name="Header Button Icon Container">
      <div className="overflow-clip relative shrink-0 size-[16.979px]" data-name="Header Button Icon">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9655 10.9655">
              <path d={svgPaths.p31ac1bc0} id="Icon" stroke="var(--stroke-0, #005400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06118" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderButtonContainer() {
  return (
    <div className="bg-[#005400] content-stretch flex gap-[12.66px] h-[45px] items-center justify-center pl-[16.979px] pr-[5.66px] py-[5.66px] relative rounded-[254.683px] shrink-0 w-[117px]" data-name="Header Button Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Search</p>
      <HeaderButtonIconContainer />
    </div>
  );
}

function HeaderInputContainer() {
  return (
    <div className="content-stretch flex gap-[5.66px] h-[58px] items-center justify-center pl-[25.468px] pr-[8.489px] py-[5.66px] relative rounded-[254.683px] shrink-0 w-[420px]" data-name="Header Input Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[254.683px]" />
      <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px relative text-[#61707d] text-[14.149px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Search product
      </p>
      <HeaderButtonContainer />
    </div>
  );
}

function CarbonGlobalFilters() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="carbon:global-filters">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="carbon:global-filters">
          <path d={svgPaths.p3946300} fill="var(--fill-0, #3B3B3B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderInputContainer1() {
  return (
    <div className="content-stretch flex gap-[11.66px] h-[58px] items-center justify-center relative rounded-[254.683px] shrink-0 w-[130px]" data-name="Header Input Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[254.683px]" />
      <CarbonGlobalFilters />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#3b3b3b] text-[13px] whitespace-nowrap">Filters</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative size-full">
      <HeaderInputContainer />
      <HeaderInputContainer1 />
    </div>
  );
}
