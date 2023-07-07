import IconStar from "../assets/img/icon_bubble_star.png";
import IconArrowBottomRec from "../assets/img/arrow-bottom-rec.png";
import unsplashWorking from "../assets/img/unsplash_working.png";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const wrapperPhotoRef = useRef<HTMLDivElement>(null);
  const [widthPhotos, setWidthPhotos] = useState(300);
  useEffect(() => {
    if (wrapperPhotoRef.current) {
      setWidthPhotos(wrapperPhotoRef.current.offsetWidth / 4);
    }
  }, []);
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
          <div>
            <div className="flex justify-center mx-[100px]">
              <div className="grid grid-cols-3 gap-4 mt-[90px]">
                <div className="col-span-2 flex flex-col-reverse text-[20px]">
                  <p className="relative">
                    Maxima Post Production Studio focus is not only to realize brand or company briefs but also to make them stand out through visual and audio that worth to talk about. Consist of young, creative, and skilled team who believe in openness and collaboration are the fuel of creative works.
                    <img src={IconStar} alt="icon-start" width={96} className="absolute left-0 top-[-158px]" />
                  </p>
                </div>
                <div className="relative">
                  <h4 className="text-[130px] leading-[123px] max-w-[300px]">
                    What We Focus On?
                  </h4>
                  <img src={IconArrowBottomRec} alt="icon-arrow-bottom-rec" className="absolute left-[-270px] top-[29px]" style={{ transform: 'scaleX(-1)'}} />
                </div>
              </div>
            </div>
            <div className="text-center mb-[71px]">
              <h3 className="text-[40px] font-bold mb-[13px]">Services</h3>
              <p>We are always open for any possible project but our main focuses are:</p>
            </div>
            <div className="mb-[145px]">
              <div className="flex gap-[32px] justify-center">
                <div className="bg-[#D9D9D9] max-w-[194px] rounded-xl">
                  <img className="w-full h-[150px]" src={unsplashWorking} alt="unsplash-working" />
                  <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                    Offline Editing
                  </div>
                </div>
                <div className="bg-[#D9D9D9] max-w-[194px] rounded-xl">
                  <img className="w-full h-[150px]" src={unsplashWorking} alt="unsplash-working" />
                  <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                    Motion Graphic
                  </div>
                </div>
                <div className="bg-[#D9D9D9] max-w-[194px] rounded-xl">
                  <img className="w-full h-[150px]" src={unsplashWorking} alt="unsplash-working" />
                  <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                    Color Grading
                  </div>
                </div>
                <div className="bg-[#D9D9D9] max-w-[194px] rounded-xl">
                  <img className="w-full h-[150px]" src={unsplashWorking} alt="unsplash-working" />
                  <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                    Visual Composition
                  </div>
                </div>
                <div className="bg-[#D9D9D9] max-w-[194px] rounded-xl">
                  <img className="w-full h-[150px]" src={unsplashWorking} alt="unsplash-working" />
                  <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                    Visual Effect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFF00] py-[85px]">
          <div className="container mx-auto text-black flex justify-center">
            <div>
              <span className="text-[64px]"><b>Let’s</b> Meet<br /> <b>Behind</b> the <b>magic!</b></span>
            </div>
          </div>
        </div>
        <div ref={wrapperPhotoRef}>
          <div className="flex">
            <div className="bg-gray-500 min-h-[500px] max-w-[360px] min-w-[360px]" style={{ minWidth: `${widthPhotos}px`, maxWidth: `${widthPhotos}px`}}>
              PHOTO 1
            </div>
            <div className="bg-gray-500 min-h-[500px] max-w-[360px] min-w-[360px]" style={{ minWidth: `${widthPhotos}px`, maxWidth: `${widthPhotos}px`}}>
              PHOTO 2
            </div>
            <div className="bg-gray-500 min-h-[500px] max-w-[360px] min-w-[360px]" style={{ minWidth: `${widthPhotos}px`, maxWidth: `${widthPhotos}px`}}>
              PHOTO 3
            </div>
            <div className="bg-gray-500 min-h-[500px] max-w-[360px] min-w-[360px]" style={{ minWidth: `${widthPhotos}px`, maxWidth: `${widthPhotos}px`}}>
              PHOTO 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
