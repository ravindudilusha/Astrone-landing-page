import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import svgPathsVision from "../../imports/svg-5fek5rztib";
import svgPathsTimeline from "../../imports/svg-9qbea9s8ru";
import svgPathsLeaf from "../../imports/svg-f4451516p4";
import svgPathsLeafDetailed from "../../imports/svg-mn0xv0vvcg";
import imgRectangle37 from "../../assets/56cbbc8de626388a69d65437dd0a070687cf1d1d.png";
import imgImage149 from "../../assets/1a58bdec794f674d0628e6585c84186dd1d8dc7b.png";
import imgImage89 from "../../assets/26d019a88463060da92bcd7d8ee023520f98fb5b.png";
import imgImage91 from "../../assets/60d857ca5d1b67b75e9a142ace59cfed2d3a444c.png";
import imgImage87 from "../../assets/275a6b536ea4483a52862c87587eb9ab06d6636d.png";
import imgImage86 from "../../assets/a06adaa486ba582139983b0601a017bc219369ff.png";
import imgImage90 from "../../assets/e4feb6dfab60a1505bc70d96c2ae70fe42adf40b.png";
import imgImage88 from "../../assets/288a44e804d391cb7bb01f196bdd66b69f3be1f8.png";
import imgRectangle45 from "../../assets/808ff71e4fd05987376e2bcc51359dd972bd64d7.png";
import imgImage95 from "../../assets/7396514aa12dfb1d5ae5227dfa13a2906ee98caa.png";
import imgAboutUs from "../../assets/About us.webp";
import imgRectangle3851 from "../../assets/165bfb26e59a80ed1bba14a44074fd119d6e5572.png";
import imgRectangle3852 from "../../assets/95d061ed72c5557d5765d453ac028b2ea928fbaa.png";
import imgLeader from "../../assets/8857271392119918fa2735dd4fc18af697916f2a.png";
import imgHero from "../../assets/56cbbc8de626388a69d65437dd0a070687cf1d1d.png";
import imgProcess from "../../assets/Process.png";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] sm:h-[85vh] lg:h-screen min-h-[500px] lg:min-h-[900px] overflow-hidden">
        <div className="pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 h-full">
          <div className="relative h-full rounded-[20px] lg:rounded-[30px] overflow-hidden">
            <img
              src={imgHero}
              alt="About Astron"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Navbar Overlay */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-5 sm:px-8 lg:px-16 py-12 lg:py-20">
              <div className="max-w-5xl">
                <h1 className="text-white text-[32px] sm:text-5xl lg:text-[64px] font-semibold tracking-tight leading-[1.15] mb-6 lg:mb-8 font-['Plus_Jakarta_Sans']">
                  Sri Lanka's First<br />
                  Pharmaceutical Pioneer
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
                  <div className="backdrop-blur-md bg-white/20 border border-white/40 px-6 lg:px-8 py-3 rounded-full text-white font-semibold text-sm lg:text-[15px] w-max cursor-default">
                    Our Story
                  </div>
                  
                  <p className="text-white/90 text-[14px] lg:text-base tracking-normal leading-relaxed max-w-md">
                    Leading the healthcare industry since 1956 with a commitment to local manufacturing excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Breadcrumb tag */}
            <div className="absolute bottom-8 lg:bottom-12 right-6 lg:right-12">
              <span className="text-white text-sm lg:text-lg tracking-tight">| Ratmalana, 1956</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Strip */}
      <section className="py-8 lg:py-12 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex gap-10 lg:gap-[154px] items-center mix-blend-luminosity justify-start lg:justify-center overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            <div className="h-[60px] lg:h-[81px] relative shrink-0 w-[70px] lg:w-[94px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Partner logo" className="absolute h-[115.38%] left-0 max-w-none top-[-7.8%] w-full" src={imgImage89} />
              </div>
            </div>
            <div className="h-[60px] lg:h-[82.113px] relative shrink-0 w-[60px] lg:w-[84px]">
              <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage91} />
            </div>
            <div className="relative shrink-0 size-[80px] lg:size-[119px]">
              <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage87} />
            </div>
            <div className="h-[80px] lg:h-[112px] relative shrink-0 w-[80px] lg:w-[113px]">
              <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage86} />
            </div>
            <div className="h-[60px] lg:h-[81px] relative shrink-0 w-[60px] lg:w-[83px]">
              <img alt="Partner logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage90} />
            </div>
            <div className="relative shrink-0 size-[60px] lg:size-[83px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Partner logo" className="absolute h-[119.29%] left-[-20.21%] max-w-none top-[-9.64%] w-[140.42%]" src={imgImage88} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-24 px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <ScrollAnimation direction="right" delay={0.2} className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold text-[#505050] leading-tight tracking-tight font-['Plus_Jakarta_Sans']">
              Empowering your<br />success with our<br />solutions
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="left" delay={0.3} className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-6 lg:gap-y-8">
              <div>
                <p className="text-4xl lg:text-[52px] font-extrabold text-black tracking-tight font-['Plus_Jakarta_Sans']">70</p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-snug lg:leading-6 font-['Plus_Jakarta_Sans']">
                  Years of<br />Experience
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-[52px] font-extrabold text-black tracking-tight font-['Plus_Jakarta_Sans']">6+</p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-snug lg:leading-6 font-['Plus_Jakarta_Sans']">
                  Business
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-[52px] font-extrabold text-black tracking-tight font-['Plus_Jakarta_Sans']">80+</p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-snug lg:leading-6 font-['Plus_Jakarta_Sans']">
                  Brands
                </p>
              </div>
              <div>
                <p className="text-4xl lg:text-[52px] font-extrabold text-black tracking-tight font-['Plus_Jakarta_Sans']">10</p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-snug lg:leading-6 font-['Plus_Jakarta_Sans']">
                  Export<br />Countries
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 lg:py-16 px-4 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Row 1: Vision Card (Left) + Building Image (Right) */}
          <ScrollAnimation direction="right" delay={0.1} className="relative bg-[#fff6e7] rounded-[24px] lg:rounded-[30px] p-8 lg:p-12 h-auto min-h-[300px] lg:h-[357px] flex flex-col justify-center overflow-hidden">
            {/* Decorative Eye Icon - top right */}
            <div className="absolute inset-[-7.56%_-10.79%_71.15%_72.58%] opacity-10">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.159 130">
                <g opacity="0.1">
                  <path d={svgPathsVision.p2c3d1280} fill="#294159" />
                  <path d={svgPathsVision.p3e853480} fill="#CDD1D1" />
                  <path d={svgPathsVision.p1136df80} fill="#F1F7F7" />
                  <path d={svgPathsVision.p105d73f0} fill="#75C1D8" />
                  <path d={svgPathsVision.p34ba1600} fill="#ADE9F7" />
                  <path d={svgPathsVision.p1b1fc640} fill="#283E55" />
                  <path d={svgPathsVision.p3c799e00} fill="#FBFDFC" />
                  <path d={svgPathsVision.p243edc40} fill="black" />
                </g>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-[30px] font-extrabold text-[#2e2e2e] mb-3 lg:mb-5 font-['Plus_Jakarta_Sans']">
                OUR VISION
              </h3>
              <div className="flex flex-col gap-2 lg:gap-[9px]">
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-relaxed lg:leading-[30px] tracking-[-0.18px] font-['Plus_Jakarta_Sans']">
                  To be the largest, dynamic and most admired Sri Lankan innovator , manufacturer and marketer of quality healthcare solutions.
                </p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-relaxed lg:leading-[30px] tracking-[-0.18px] font-['Plus_Jakarta_Sans']">
                  The company was incorporated in 1956 creating a milestone in the pharmaceutical industry by setting up the first pharmaceutical manufacturing facility in the country.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.2} className="h-[250px] sm:h-[300px] lg:h-[357px] rounded-[24px] lg:rounded-[30px] overflow-hidden">
            <img
              src={imgRectangle3851}
              alt="Astron building"
              className="w-full h-full object-cover"
            />
          </ScrollAnimation>

          {/* Row 2: Team Photo (Left) + Mission Card (Right) */}
          <ScrollAnimation direction="right" delay={0.3} className="h-[250px] sm:h-[300px] lg:h-[357px] rounded-[24px] lg:rounded-[30px] overflow-hidden hidden lg:block">
            <img
              src={imgRectangle3852}
              alt="Astron team"
              className="w-full h-full object-cover"
            />
          </ScrollAnimation>

          <ScrollAnimation direction="left" delay={0.4} className="relative bg-[#e7f3ff] rounded-[24px] lg:rounded-[30px] p-8 lg:p-12 h-auto min-h-[300px] lg:h-[357px] flex flex-col justify-center overflow-hidden">
            {/* Decorative Medical/Lightbulb Icon - top right */}
            <div className="absolute inset-[-8.12%_-6.45%_63.87%_80.33%] opacity-30">
              <div className="absolute inset-[18.01%_16.67%]">
                <div className="absolute inset-[36.72%_35.68%_27.61%_36.41%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.1023 56.356">
                    <path d={svgPathsVision.p2d6d9c00} fill="#7FEA8F" fillOpacity="0.92" />
                  </svg>
                </div>
                <div className="absolute contents inset-[32.96%_32.35%_28.06%_32.92%]">
                  <div className="absolute inset-[32.96%_32.35%_28.06%_32.92%]">
                    <div className="absolute inset-[0%_0%_0%_0%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.8783 61.5893">
                        <path d={svgPathsVision.p2f56e180} fill="#414042" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[72.86%_42.75%_25.94%_43.4%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8719 1.88949">
                      <path d={svgPathsVision.pfaa800} fill="#414042" />
                    </svg>
                  </div>
                  <div className="absolute inset-[75.59%_42.94%_23.2%_43.97%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6787 1.91857">
                      <path d={svgPathsVision.p2a612ff0} fill="#414042" />
                    </svg>
                  </div>
                  <div className="absolute inset-[78.08%_43.39%_20.63%_44.42%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2508 2.04886">
                      <path d={svgPathsVision.p36e3f800} fill="#414042" />
                    </svg>
                  </div>
                  <div className="absolute inset-[80.86%_48.12%_18.01%_49.1%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.40045 1.78406">
                      <path d={svgPathsVision.p17dcf700} fill="#414042" />
                    </svg>
                  </div>
                  <div className="absolute inset-[44.99%_38.88%_29.82%_38.86%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.1607 39.8079">
                      <path d={svgPathsVision.p1499eb00} fill="#414042" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-[30px] font-extrabold text-[#2e2e2e] mb-3 lg:mb-5 font-['Plus_Jakarta_Sans']">
                OUR MISSION
              </h3>
              <div className="flex flex-col gap-2 lg:gap-[9px]">
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-relaxed lg:leading-[30px] tracking-[-0.18px] font-['Plus_Jakarta_Sans']">
                  To uplift the wellbeing of society through innovation, ethical manufacture and marketing of quality healthcare solutions at affordable prices whilst adding value to all our stakeholders.
                </p>
                <p className="text-sm lg:text-lg font-semibold text-[#505050] leading-relaxed lg:leading-[30px] tracking-[-0.18px] font-['Plus_Jakarta_Sans']">
                  The company was incorporated in 1956 creating a milestone in the pharmaceutical industry by setting up the first pharmaceutical manufacturing facility in the country.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Mobile only Team Photo (moved to bottom) */}
          <div className="h-[250px] sm:h-[300px] rounded-[24px] overflow-hidden lg:hidden">
            <img
              src={imgRectangle3852}
              alt="Astron team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Discover Our Astron */}
      <section className="py-12 lg:py-24 px-4 lg:px-8 text-center overflow-hidden">
        <ScrollAnimation delay={0.1} className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl lg:text-[42px] font-bold text-[#323232] tracking-tight mb-4 lg:mb-6 font-['Plus_Jakarta_Sans']">
            Discover our <span className="text-[#87B54C]">Astron</span>
          </h2>
          <p className="text-[#7c7c7c] text-sm lg:text-lg leading-relaxed lg:leading-[30px] tracking-tight max-w-[849px] mx-auto mb-8 lg:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="rounded-[20px] lg:rounded-[30px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[520px]">
            <img
              src={imgAboutUs}
              alt="Astron pharmaceutical operations"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* Timeline / Process Section */}
      <section className="py-12 lg:py-24 px-4 lg:px-8 text-center bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <ScrollAnimation delay={0.1} direction="down" className="flex flex-col items-center lg:items-end w-full lg:w-3/4 max-w-4xl lg:self-end text-center lg:text-right mb-8 lg:mb-16 px-4">
            <p className="text-[#87B54C] font-semibold text-xs lg:text-sm tracking-wider uppercase mb-2 lg:mb-3 font-['Plus_Jakarta_Sans']">
              OUR HISTORY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-[#111111] leading-[1.2] lg:leading-[1.1] tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
              We have best team and<br className="hidden sm:block" /> best process
            </h2>
            <p className="text-[#6b7280] text-sm lg:text-[16px] leading-relaxed lg:leading-[26px] max-w-[580px] font-['Plus_Jakarta_Sans']">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.
            </p>
          </ScrollAnimation>
        </div>
        
        {/* Timeline image container */}
        <ScrollAnimation delay={0.2} direction="up" className="w-full mt-6 sm:mt-8 overflow-hidden">
          <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
            <div className="min-w-[800px] lg:min-w-full lg:px-0">
              <img 
                src={imgProcess} 
                alt="Astron History Timeline"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Leaderboard Message Section */}
      <section className="relative pt-20 lg:pt-0">
        <div className="bg-[#ecffec] h-auto lg:h-[350px]">
          <div className="max-w-[1400px] mx-auto h-full">
            <div className="flex flex-col lg:flex-row gap-0 items-end h-full">
              {/* Leader Image - Left Side - extends above the section */}
              <ScrollAnimation direction="up" delay={0.2} className="w-full lg:w-[30%] flex items-end justify-center lg:justify-start -mt-20 lg:-mt-0">
                <div className="w-[80%] max-w-[300px] lg:w-full lg:max-w-none h-[400px] lg:h-[480px]">
                  <img 
                    src={imgLeader} 
                    alt="Mr. John Doe - CEO of Astron"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </ScrollAnimation>

              {/* Leader Message - Right Side */}
              <ScrollAnimation direction="left" delay={0.3} className="w-full lg:w-[70%] flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-8 lg:py-12 relative text-center lg:text-left">
                <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#323232] tracking-tight mb-4 leading-tight font-['Plus_Jakarta_Sans']">
                  Our Leaderboard Message<br className="hidden sm:block" /> for you
                </h2>
                <p className="text-sm lg:text-[16px] text-[#7e7e7e] leading-relaxed lg:leading-[26px] tracking-tight font-['Inter'] mb-6 max-w-[520px] mx-auto lg:mx-0">
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                </p>
                
                {/* Large Green Closing Quote Mark */}
                <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start">
                  <svg width="48" height="36" viewBox="0 0 48 36" fill="none" className="w-[36px] h-[27px] lg:w-[48px] lg:h-[36px]">
                    <path d="M16 4V17.3333C16 22.8889 14.6667 27.5556 12 31.3333C9.33333 35.1111 5.77778 36 1.33333 36V30.6667C3.55556 30.2222 5.33333 29.1111 6.66667 27.3333C8 25.5556 8.66667 23.5556 8.66667 21.3333H0V4H16ZM40 4V17.3333C40 22.8889 38.6667 27.5556 36 31.3333C33.3333 35.1111 29.7778 36 25.3333 36V30.6667C27.5556 30.2222 29.3333 29.1111 30.6667 27.3333C32 25.5556 32.6667 23.5556 32.6667 21.3333H24V4H40Z" fill="#87B54C"/>
                  </svg>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-base lg:text-[18px] font-bold text-black leading-snug lg:leading-[24px] font-['Plus_Jakarta_Sans']">
                    Mr. John Doe
                  </p>
                  <p className="text-xs lg:text-[13px] font-semibold text-[#828282] leading-snug lg:leading-[20px] font-['Plus_Jakarta_Sans']">
                    CEO of Astron
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-12 lg:py-20 px-4 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-start">
            <ScrollAnimation direction="right" delay={0.2} className="w-full lg:w-1/2">
              <h2 className="text-3xl lg:text-[42px] font-semibold text-[#323232] tracking-tight mb-6 lg:mb-8 font-['Plus_Jakarta_Sans']">
                Astron is a member of the following associations
              </h2>
              <ul className="space-y-2 lg:space-y-3 list-disc pl-4 text-[#323232] text-sm lg:text-[17px] font-medium leading-relaxed lg:leading-[39px] font-['Plus_Jakarta_Sans']">
                <li>Sri Lanka Pharmaceutical Manufacturers Association - founder member</li>
                <li>Sri Lanka Chamber of Pharmaceutical Industries - founder member</li>
                <li>Sri Lanka Poultry Industry Association</li>
                <li>Ceylon Chamber of Commerce</li>
                <li>Employers Federation of Sri Lanka</li>
                <li>American Chamber of Commerce of Sri Lanka</li>
                <li>Industrial Association of Sri Lanka</li>
                <li>Sri Lanka Maldives Bilateral Business Council</li>
                <li>Sri Lanka China Business Council</li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.3} className="w-full lg:w-1/2">
              <div className="rounded-[24px] lg:rounded-[30px] overflow-hidden">
                <img
                  src={imgImage95}
                  alt="Associations"
                  className="w-full h-[250px] sm:h-[300px] lg:h-[434px] object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA - Let's divine into our Brands */}
      <section className="px-4 lg:px-6 pb-6 lg:pb-10 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto">
          <div className="relative bg-[#005400] rounded-[24px] lg:rounded-[30px] py-12 lg:py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 overflow-hidden text-center lg:text-left">
            {/* Decorative Leaf Background - Hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute inset-[0_2.94%_-33.59%_69.85%] pointer-events-none">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 379 350">
                <path d={svgPathsLeafDetailed.pd269420} fill="#87B54C" opacity="0.1" />
              </svg>
            </div>
            
            <div className="relative z-10 w-full lg:w-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
                Let's divine into our Brands
              </h2>
            </div>
            <button className="relative z-10 flex-shrink-0 bg-[#f9f9f9] text-[#005400] font-bold px-6 lg:px-10 py-3 lg:py-4 rounded-full hover:bg-white transition-colors text-base lg:text-[20px] flex items-center gap-2 lg:gap-3 lg:w-auto">
              Our Brands
              <svg className="w-[24px] h-[18px] lg:w-[34px] lg:h-[26px]" fill="none" viewBox="0 0 34 26">
                <path d={svgPathsLeaf.p13bf0e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
