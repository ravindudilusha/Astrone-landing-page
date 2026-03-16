import imgImage89 from "../assets/26d019a88463060da92bcd7d8ee023520f98fb5b.png";
import imgImage91 from "../assets/60d857ca5d1b67b75e9a142ace59cfed2d3a444c.png";
import imgImage87 from "../assets/275a6b536ea4483a52862c87587eb9ab06d6636d.png";
import imgImage86 from "../assets/a06adaa486ba582139983b0601a017bc219369ff.png";
import imgImage90 from "../assets/e4feb6dfab60a1505bc70d96c2ae70fe42adf40b.png";
import imgImage88 from "../assets/288a44e804d391cb7bb01f196bdd66b69f3be1f8.png";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[154px] items-center mix-blend-luminosity relative size-full">
      <div className="h-[81px] relative shrink-0 w-[94px]" data-name="image 89">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.38%] left-0 max-w-none top-[-7.8%] w-full" src={imgImage89} />
        </div>
      </div>
      <div className="h-[82.113px] relative shrink-0 w-[84px]" data-name="image 91">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage91} />
      </div>
      <div className="relative shrink-0 size-[119px]" data-name="image 87">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage87} />
      </div>
      <div className="h-[112px] relative shrink-0 w-[113px]" data-name="image 86">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage86} />
      </div>
      <div className="h-[81px] relative shrink-0 w-[83px]" data-name="image 90">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage90} />
      </div>
      <div className="relative shrink-0 size-[83px]" data-name="image 88">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[119.29%] left-[-20.21%] max-w-none top-[-9.64%] w-[140.42%]" src={imgImage88} />
        </div>
      </div>
    </div>
  );
}
