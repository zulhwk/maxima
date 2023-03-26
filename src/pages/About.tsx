import IconStar from "../assets/img/icon_bubble_star.png";
import IconArrowBottomRec from "../assets/img/arrow-bottom-rec.png";

const AboutPage = () => {
  return (
    <div>
      <div className="min-h-[944px]">
        <div className="container mx-auto">
          <div className="flex justify-center mx-[100px]">
            <div className="grid grid-cols-3 gap-4 mt-[90px]">
              <div className="relative">
                <h4 className="text-[130px] leading-[123px] max-w-[300px]">
                  Who We Are?
                </h4>
                <img src={IconArrowBottomRec} alt="icon-arrow-bottom-rec" className="absolute right-[-102px] top-[29px]" />
              </div>
              <div className="col-span-2 flex flex-col-reverse text-[20px]">
                <p className="relative">
                  Maxima Post Production Studio is a Jakarta based company that
                  provides visual material needs service since 2019, committed to
                  give maximum result to every projects. Specialized in creative
                  industries with comprehensive production field as well as film,
                  animation, company profile, and advertisement.
                  <img src={IconStar} alt="icon-start" width={96} className="absolute right-0 top-[-158px]" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-[25px] mt-[123px]">
              <div className="bg-[#FFFF00] min-w-[545px] min-h-[208px] max-w-[545px] max-h-[208px] relative">
                <div className="bg-sky-500 min-w-[545px] min-h-[208px] absolute top-[-12px] left-[-13px]" />
              </div>
              <div className="bg-[#FFFF00] min-w-[545px] min-h-[208px] max-w-[545px] max-h-[208px] relative">
                <div className="bg-sky-500 min-w-[545px] min-h-[208px] absolute top-[-12px] left-[-13px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
