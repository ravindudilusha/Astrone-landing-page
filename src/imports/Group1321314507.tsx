import svgPaths from "./svg-d0is9wu1s6";
import imgAstronLogo1 from "../assets/89c7fd421088a06c87c99545596a5c79e1d21610.png";

function Frame7() {
  return (
    <div className="backdrop-blur-[2px] bg-[#f9f9f9] content-stretch flex h-[48px] items-center justify-center p-[10px] relative rounded-[999px] shrink-0 w-[151px]">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#005400] text-[15px] text-center whitespace-nowrap">Contact us</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[58px] text-white tracking-[-1.16px] w-[498px]">Let’s Discuss!</p>
      <Frame7 />
    </div>
  );
}

function FacebookLogo() {
  return (
    <div className="col-1 h-[14px] ml-[13px] mt-[10px] relative row-1 w-[7px]" data-name="facebook logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
        <g clipPath="url(#clip0_9_881)" id="facebook logo">
          <path d={svgPaths.p50d1c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_881">
            <rect fill="white" height="14" width="7" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#39cb74] col-1 ml-0 mt-0 rounded-[60px] row-1 size-[34px]" />
      <FacebookLogo />
    </div>
  );
}

function TwitterLogo() {
  return (
    <div className="col-1 h-[14px] ml-[8px] mt-[10px] relative row-1 w-[18px]" data-name="Twitter logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
        <g clipPath="url(#clip0_9_795)" id="Twitter logo">
          <path d={svgPaths.pd4cb240} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_795">
            <rect fill="white" height="14" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#39cb74] col-1 ml-0 mt-0 rounded-[60px] row-1 size-[34px]" />
      <TwitterLogo />
    </div>
  );
}

function LinkedinLogo() {
  return (
    <div className="col-1 h-[15px] ml-[9px] mt-[9px] relative row-1 w-[16px]" data-name="linkedin logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g clipPath="url(#clip0_9_773)" id="linkedin logo">
          <path d={svgPaths.p21cf7400} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_773">
            <rect fill="white" height="15" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#39cb74] col-1 ml-0 mt-0 rounded-[60px] row-1 size-[34px]" />
      <LinkedinLogo />
    </div>
  );
}

function InstagramLogo() {
  return (
    <div className="col-1 h-[18px] ml-[9px] mt-[8px] relative row-1 w-[16px]" data-name="instagram logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g clipPath="url(#clip0_9_1028)" id="instagram logo">
          <path d={svgPaths.p3941a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_1028">
            <rect fill="white" height="18" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#39cb74] col-1 ml-0 mt-0 rounded-[60px] row-1 size-[34px]" />
      <InstagramLogo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start leading-[0] relative shrink-0">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start mr-[-71px] relative shrink-0">
      <div className="h-[58px] relative shrink-0 w-[275px]" data-name="astron-logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAstronLogo1} />
      </div>
      <Frame8 />
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[18px] items-start leading-[14px] ml-0 mt-[61px] relative row-1 text-[14px] tracking-[-0.28px] w-[102px]">
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Us
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        BA Partner
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Careers
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CSR
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feedback
      </p>
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        News and Events
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-white">
      <p className="col-1 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] ml-0 mt-0 relative row-1 text-[18px] tracking-[-0.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Navigation
      </p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[18px] items-start leading-[14px] ml-0 mt-[61px] relative row-1 text-[14px] tracking-[-0.28px] w-[102px]">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pharmaceuticals
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nutrition
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Healing Herbs
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Personal Care
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Animal Health
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Optipet
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-white">
      <p className="col-1 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] ml-0 mt-0 relative row-1 text-[18px] tracking-[-0.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Brands
      </p>
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="col-1 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal gap-[18px] items-start leading-[14px] ml-0 mt-[61px] relative row-1 text-[14px] tracking-[-0.28px] w-[102px]">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`R&D`}</p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Manufacturing
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quality
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-white">
      <p className="col-1 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] ml-0 mt-0 relative row-1 text-[18px] tracking-[-0.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Operations
      </p>
      <Frame12 />
    </div>
  );
}

function AntDesignPhoneFilled() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ant-design:phone-filled">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ant-design:phone-filled">
          <path d={svgPaths.p3972a900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative size-[24px]">
      <AntDesignPhoneFilled />
    </div>
  );
}

function Frame1() {
  return <div className="col-1 ml-0 mt-[100px] row-1 size-[24px]" />;
}

function Fa6SolidLocationDot() {
  return (
    <div className="absolute inset-[12.5%_20.83%_8.33%_20.83%]" data-name="fa6-solid:location-dot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
        <g clipPath="url(#clip0_9_1078)" id="fa6-solid:location-dot">
          <path d={svgPaths.p239f000} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_1078">
            <rect fill="white" height="19" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-1 ml-0 mt-[139px] overflow-clip relative row-1 size-[24px]">
      <Fa6SolidLocationDot />
    </div>
  );
}

function DashiconsEmail() {
  return (
    <div className="col-1 ml-0 mt-[100px] relative row-1 size-[24px]" data-name="dashicons:email">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dashicons:email">
          <path d={svgPaths.p27494700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] ml-0 mt-0 relative row-1 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[normal] ml-[32px] mt-[64px] relative row-1 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +94 11 22 33334
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[32px] mt-[104px] relative row-1 text-[14px] text-white tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        contact@example.com
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[24px] ml-[37.69px] mt-[143px] relative row-1 text-[14px] text-white tracking-[-0.28px] w-[215px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ABC Roard Bandaranaike Mawatha, Colombo 01
      </p>
      <div className="col-1 flex items-center justify-center ml-0 mt-[61px] relative row-1 size-[24px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame />
        </div>
      </div>
      <Frame1 />
      <Frame2 />
      <DashiconsEmail />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[115px] items-start leading-[0] mr-[-71px] relative shrink-0">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex inset-[17.06%_3.18%_27.06%_3.16%] items-start pr-[71px]">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[17px] inset-[91.18%_40.63%_5.69%_40.63%] items-center leading-[normal] text-[#8f8f8f] text-[14px] tracking-[-0.28px] whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy and Policies.
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms and conditions
      </p>
    </div>
  );
}

export default function Group8() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#1e1e1e] inset-0 rounded-[30px]" />
      <Frame6 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[91.18%_82.29%_5.69%_6.04%] leading-[normal] text-[#8f8f8f] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        @2026 . All Rights Reserved
      </p>
      <Frame9 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[91.18%_5.63%_5.69%_76.88%] leading-[normal] text-[#8f8f8f] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designed and Developed by Ellipza Pvt Ltd
      </p>
    </div>
  );
}
