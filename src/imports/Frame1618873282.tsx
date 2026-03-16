function Categories() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        All Products
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[299px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">5</p>
    </div>
  );
}

function Categories1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pain Management
      </p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[299px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">3</p>
    </div>
  );
}

function Categories2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Vitamins & Minerals`}</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[299px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">6</p>
    </div>
  );
}

function Categories3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Worm Eradication
      </p>
      <Frame4 />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative size-[24px]" data-name="Arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d="M4 9L12 17L20 9" id="Vector" stroke="var(--stroke-0, #1A191F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Categories4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Skin Care
      </p>
      <div className="col-1 flex items-center justify-center ml-[305px] mt-[8px] relative row-1 size-[24px]">
        <div className="flex-none rotate-180">
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col h-[26px] items-center justify-center left-[299px] p-[10px] rounded-[6px] top-[4px] w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">6</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col h-[26px] items-center justify-center left-[299px] p-[10px] rounded-[6px] top-[70px] w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">6</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col h-[26px] items-center justify-center left-[299px] p-[10px] rounded-[6px] top-[113px] w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">6</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col h-[26px] items-center justify-center left-[299px] p-[10px] rounded-[6px] top-[156px] w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">6</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] relative w-full">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a191f] text-[20px] w-[283px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Theraputic Creams and Ointments
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a191f] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Moisturizing Cream
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a191f] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Skin, Nail and Hair Care
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1a191f] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Nappy Rash
        </p>
        <Frame5 />
        <Frame6 />
        <Frame7 />
        <Frame8 />
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="col-1 ml-[305px] mt-[8px] relative row-1 size-[24px]" data-name="Arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Arrow">
          <path d="M4 9L12 17L20 9" id="Vector" stroke="var(--stroke-0, #1A191F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Categories5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Respiratory
      </p>
      <Arrow1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[299px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">5</p>
    </div>
  );
}

function Categories6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Antibiotics
      </p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[298px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#505050] text-[14px] w-[7px]">5</p>
    </div>
  );
}

function Categories7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Anti-Allergenics
      </p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f7f7f7] col-1 content-stretch flex flex-col h-[26px] items-center justify-center ml-[298px] mt-px p-[10px] relative rounded-[6px] row-1 w-[28px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a191f] text-[14px] w-[7px]">5</p>
    </div>
  );
}

function Categories8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Categories">
      <p className="col-1 font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-0 relative row-1 text-[#1a191f] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Oral Care
      </p>
      <Frame11 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative size-full">
      <Categories />
      <Categories1 />
      <Categories2 />
      <Categories3 />
      <Categories4 />
      <Frame1 />
      <Categories5 />
      <Categories6 />
      <Categories7 />
      <Categories8 />
    </div>
  );
}
