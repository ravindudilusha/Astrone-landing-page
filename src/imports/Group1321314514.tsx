function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[86px] items-center justify-center left-[680.5px] top-[124px] w-[295px] whitespace-nowrap">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[32px] text-center tracking-[-0.64px]">ISO 14001:2015</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] tracking-[-0.2px]">Compliant</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[86px] items-center justify-center left-[988.5px] top-[124px] w-[295px] whitespace-nowrap">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[34px] text-center tracking-[-0.68px]">70+</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] tracking-[-0.2px]">Years Expertise</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[86px] items-center justify-center left-[680.5px] top-px w-[295px] whitespace-nowrap">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[32px] text-center tracking-[-0.64px]">ISO 9001:2015</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] tracking-[-0.2px]">Certified</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[86px] items-center justify-center left-[988.5px] top-px w-[295px] whitespace-nowrap">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[34px] text-center tracking-[-0.68px]">GMP</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] tracking-[-0.2px]">Approved</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full text-[#505050]">
      <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-641.75px)] text-[52px] top-0 tracking-[-1.04px] w-[586px] whitespace-pre-wrap">
        <p className="mb-0">{`Empowering  your`}</p>
        <p>success with our solutions</p>
      </div>
      <Frame1 />
      <Frame3 />
      <Frame />
      <Frame2 />
    </div>
  );
}
