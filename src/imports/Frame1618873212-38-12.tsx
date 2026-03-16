import imgImage99 from "../assets/1c9ce334fa6e341e4b343ace0b3a2d0280b366da.png";
import imgAstronLogo1 from "../assets/89c7fd421088a06c87c99545596a5c79e1d21610.png";

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[50px] size-full">
      <div className="absolute h-[851px] left-[-33px] top-[-172px] w-[1451px]" data-name="image 99">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage99} />
      </div>
      <div className="absolute h-[58px] left-[29px] top-[23px] w-[97px]" data-name="astron-logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[3.11%] max-w-none top-0 w-[285.53%]" src={imgAstronLogo1} />
        </div>
      </div>
    </div>
  );
}
