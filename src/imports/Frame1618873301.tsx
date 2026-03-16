import svgPaths from "./svg-20qq3jcbll";

function Group() {
  return (
    <div className="col-1 h-[122.952px] ml-0 mt-0 relative row-1 w-[162.303px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162.302 122.952">
        <g id="Group">
          <g id="Vector" />
          <g id="Vector_2" />
          <g id="Vector_3" />
          <path d={svgPaths.p2bb6b480} fill="var(--fill-0, #82BFAB)" id="Vector_4" />
          <path d={svgPaths.p6b82200} fill="var(--fill-0, #AAD4C8)" id="Vector_5" />
          <path d={svgPaths.p1f83e100} fill="var(--fill-0, #AAD4C8)" id="Vector_6" />
          <path d={svgPaths.pa3a4400} fill="var(--fill-0, #AAD4C8)" id="Vector_7" />
          <path d={svgPaths.p3e05b200} fill="var(--fill-0, #616E7D)" id="Vector_8" />
          <path d={svgPaths.p127eff00} fill="var(--fill-0, #AAD4C8)" id="Vector_9" />
          <path d={svgPaths.p77ce700} fill="var(--fill-0, #AAD4C8)" id="Vector_10" />
          <path d={svgPaths.p2bde5400} fill="var(--fill-0, #AAD4C8)" id="Vector_11" />
          <path d={svgPaths.p1d2c2600} fill="var(--fill-0, #616E7D)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Object() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Object">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="backdrop-blur-[2px] bg-white content-stretch flex h-[48px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[181px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#005400] text-[15px] text-center whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[708px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[79px] min-w-full relative shrink-0 text-[52px] text-white tracking-[-1.04px] w-[min-content]">Be a Part of something Bigger</p>
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[96px] items-center left-[136.42px] top-[59px]">
      <Object />
      <Frame2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#005400] relative size-full">
      <Frame3 />
      <div className="absolute h-[194px] left-[1132px] top-[51px] w-[178px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 194">
          <path d={svgPaths.p94ca880} fill="var(--fill-0, #87B54C)" id="Vector" opacity="0.1" />
        </svg>
      </div>
      <div className="absolute flex h-[95px] items-center justify-center left-[1310px] top-[148px] w-[86px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[95px] relative w-[86px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 95">
              <path d={svgPaths.p2d474100} fill="var(--fill-0, #87B54C)" id="Vector" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
