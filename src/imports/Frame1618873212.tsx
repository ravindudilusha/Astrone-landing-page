import svgPaths from "./svg-ytr8brh293";

function StreamlineNext() {
  return (
    <div className="h-[26px] relative shrink-0 w-[34px]" data-name="streamline:next">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 26">
        <g id="streamline:next">
          <path d={svgPaths.p13bf0e00} id="Vector" stroke="var(--stroke-0, #005400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute backdrop-blur-[2px] bg-[#f9f9f9] content-stretch flex gap-[12px] h-[69.577px] items-center justify-center left-[calc(50%+498.5px)] p-[10px] rounded-[999px] top-[calc(50%-0.21px)] w-[224px]">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#005400] text-[20px] text-center whitespace-nowrap">Our Brands</p>
      <StreamlineNext />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#005400] border border-black border-solid h-[262px] left-0 rounded-[30px] top-0 w-[1393px]" />
      <div className="absolute inset-[0_2.94%_-33.59%_69.85%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
          <path d={svgPaths.pd269420} fill="var(--fill-0, #87B54C)" id="Vector" opacity="0.1" />
        </svg>
      </div>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[158.722px] leading-[normal] left-[calc(50%-607.5px)] text-[58px] text-white top-[calc(50%-78px)] tracking-[-1.16px] w-[666px]">Let’s divine into our Brands</p>
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}
