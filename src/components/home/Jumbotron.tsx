import ShowreelVideo from "../../assets/showreel_video.mp4";
import LogoMaxima from "../../assets/logo/logo_maxima.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const navigate = useNavigate();
  return (
    <section className="h-[944px] relative">
      <video autoPlay muted loop className="w-full absolute top-[-93px] z-[-1]">
        <source src={ShowreelVideo} type="video/mp4" />
      </video>
      <div className="h-[944px] flex justify-center flex-col items-center" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
        <div className="mb-[193px]">
          <div className="text-[113.677px] leading-[93px] font-bold tracking-[-0.015em] text-[#0D9D9F] text-center">*</div>
          <div className="flex items-center gap-[27.5px]">
            <span className="text-[56px] leading-[77px]"><b>Let’s</b> <i>create</i></span>
            <button className="text-[30px] leading-[52px] tracking-[-0.015em] font-semibold py-[3px] px-[29px] rounded-full border-[1.70516px] border-[#FFFF00] text-[#FFFF00]">SOMETHING</button>
          </div>
          <div className="flex items-center gap-[47.85px]">
            <span className="text-[56px] leading-[77px]">with <b>MAXIMA</b></span>
            <ArrowLongRightIcon className="text-[#9656AC]" width={106} />
            <img src={LogoMaxima} alt="logo-maxima" />
          </div>
          <div>
          <div className="flex justify-center">
            <button className="text-[24px] leading-[23px] tracking-[-0.015em] font-semibold py-[14px] px-[25px] rounded-full border-[1.70516px] border-[#FFFF00] text-black bg-[#FFFF00]" onClick={() => navigate('/contact')}>Get in Touch</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Jumbotron;