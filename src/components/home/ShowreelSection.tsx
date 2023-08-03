import { useNavigate } from "react-router-dom";
import UnspashWorkingBackground from "../../assets/img/unsplash_working.png";
import VectorTriangle from "../../assets/img/vector_triangle.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ShowreelSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <section className="min-h-[400px] max-h-[400px]" style={{ backgroundImage: `url(${UnspashWorkingBackground})`}}>
        <div className="flex min-h-[400px] max-h-[400px] justify-end" style={{ background: `linear-gradient(270deg, #000000 -1.47%, rgba(17, 17, 17, 0.645183) 69.09%, rgba(0, 0, 0, 0) 100%)`}}>
          <div className="max-w-[750px] flex flex-col-reverse mb-[84px] mr-[275px] cursor-pointer">
            <div className="group flex gap-[50px]">
              <span className="text-[60px] leading-[96%]"><b>LE’S</b> TAKE A <b>LOOK</b> TO OUR <b>SHOWREEL</b></span>
              <div className="bg-[#FFFF00] py-[28px] px-[43px] text-black flex text-center items-center" onClick={() => navigate('/work')}>
                <ArrowRightIcon className="font-bold" width={50} height={43} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="w-full" src={VectorTriangle} alt="vector-triangle" />
    </div>
  )
};

export default ShowreelSection;