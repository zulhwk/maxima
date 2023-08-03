import { useEffect, useRef, useState } from "react";
import IconStar from "../assets/img/icon_bubble_star.png";
import IconArrowBottomRec from "../assets/img/arrow-bottom-rec.png";
import BgAboutOne from "../assets/bg_about_1.jpg";
import BgAboutTwo from "../assets/bg_about_2.png";

const AboutPage = () => {
  const wrapperPhotoRef = useRef<HTMLDivElement>(null);
  const [widthPhotos, setWidthPhotos] = useState(300);
  const [dataServices] = useState<any>([
    { title: "Offline Editing", images: "pexels-4.jpg" },
    { title: "Motion Graphic", images: "pexels-2.jpg" },
    { title: "Color Grading", images: "pexels-5.jpg" },
    { title: "Visual Compositing", images: "pexels-1.jpg" },
    { title: "Visual Effect", images: "pexels-3.jpg" },
  ]);
  const [dataKaryawan] = useState<any>([
    {
      name: "Furqon Syiva Handoko",
      role: "Leader, VFX Supervisor, & Motion Designer.",
      img: "karyawan_1.png",
    },
    {
      name: "Dzikri Auliya Yahya",
      role: "Color Grading Supervisor",
      img: "karyawan_2.png",
    },
    {
      name: "M Husein Fadlullah",
      role: "Online Editing Supervisor",
      img: "karyawan_3.png",
    },
    {
      name: "Nakisha Alfadda",
      role: "Offline Editing Supervisor",
      img: "karyawan_4.png",
    },
  ]);
  useEffect(() => {
    if (wrapperPhotoRef.current) {
      setWidthPhotos(wrapperPhotoRef.current.offsetWidth / 4);
    }
  }, []);

  const [hideEmployeDetail, setHideEmployeDetail] = useState<any>(new Array(dataKaryawan.length).fill(false));

  const showEmploye = (key:number) => {
    let oldValue = hideEmployeDetail;
    oldValue[key] = true;
    console.log(oldValue);
    setHideEmployeDetail(oldValue);
  };

  const hideEmplye = (key:number) => {
    let oldValue = hideEmployeDetail;
    oldValue[key] = false;
    setHideEmployeDetail(oldValue);
  };

  return (
    <div>
      <div className="min-h-[944px]">
        <div>
          <div
            className="pb-[144px]"
            style={{
              backgroundImage: `url(${BgAboutOne})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: "100%",
            }}
          >
            <div
              style={{
                background: `linear-gradient(270deg, #000000 -1.47%, rgba(17, 17, 17, 0.645183) 69.09%, rgba(0, 0, 0, 0) 100%)`,
              }}
            >
              <div className="container mx-auto">
                <div className="flex justify-center mx-[100px]">
                  <div className="grid grid-cols-3 gap-4 mt-[90px]">
                    <div className="relative">
                      <h4 className="text-[130px] leading-[123px] max-w-[300px]">
                        Who We Are?
                      </h4>
                      <img
                        src={IconArrowBottomRec}
                        alt="icon-arrow-bottom-rec"
                        className="absolute right-[-102px] top-[29px]"
                      />
                    </div>
                    <div className="col-span-2 flex flex-col-reverse text-[20px]">
                      <p className="relative">
                        Maxima Post Production Studio is a Jakarta based company
                        that provides visual material needs service since 2019,
                        committed to give maximum result to every projects.
                        Specialized in creative industries with comprehensive
                        production field as well as film, animation, company
                        profile, and advertisement.
                        <img
                          src={IconStar}
                          alt="icon-start"
                          width={96}
                          className="absolute right-0 top-[-158px]"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 gap-[25px] mt-[123px]">
                    <div className="bg-[#FFFF00] min-w-[545px] min-h-[208px] max-w-[545px] max-h-[208px] relative">
                      <div
                        className="bg-sky-500 min-w-[545px] min-h-[208px] absolute top-[-12px] left-[-13px]"
                        style={{
                          backgroundImage: `url(${require(`../assets/tante_minum_es.jpg`)})`,
                        }}
                      />
                    </div>
                    <div className="bg-[#FFFF00] min-w-[545px] min-h-[208px] max-w-[545px] max-h-[208px] relative">
                      <div
                        className="bg-sky-500 min-w-[545px] min-h-[208px] absolute top-[-12px] left-[-13px]"
                        style={{
                          backgroundImage: `url(${require(`../assets/abang_presentasi.png`)})`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${BgAboutTwo})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: "100%",
            }}
          >
            <div
              className="pb-[145px]"
              style={{
                background: `linear-gradient(270deg, #000000 -1.47%, rgba(17, 17, 17, 0.645183) 69.09%, rgba(0, 0, 0, 0) 100%)`,
              }}
            >
              <div className="container mx-auto">
                <div>
                  <div className="flex justify-center mx-[100px]">
                    <div className="grid grid-cols-3 gap-4 mt-[90px]">
                      <div className="col-span-2 flex flex-col-reverse text-[20px]">
                        <p className="relative">
                          Maxima Post Production Studio focus is not only to
                          realize brand or company briefs but also to make them
                          stand out through visual and audio that worth to talk
                          about. Consist of young, creative, and skilled team
                          who believe in openness and collaboration are the fuel
                          of creative works.
                          <img
                            src={IconStar}
                            alt="icon-start"
                            width={96}
                            className="absolute left-0 top-[-158px]"
                          />
                        </p>
                      </div>
                      <div className="relative">
                        <h4 className="text-[130px] leading-[123px] max-w-[300px]">
                          What We Focus On?
                        </h4>
                        <img
                          src={IconArrowBottomRec}
                          alt="icon-arrow-bottom-rec"
                          className="absolute left-[-270px] top-[29px]"
                          style={{ transform: "scaleX(-1)" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-[71px]">
                    <h3 className="text-[40px] font-bold mb-[13px]">
                      Services
                    </h3>
                    <p>
                      We are always open for any possible project but our main
                      focuses are:
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-[32px] justify-center">
                      {dataServices.map((data: any, key: any) => {
                        return (
                          <div
                            className="bg-[#D9D9D9] max-w-[194px] rounded-xl"
                            key={key}
                          >
                            <img
                              className="w-[194px] h-[150px]"
                              src={require(`../assets/${data.images}`)}
                              alt="unsplash-working"
                            />
                            <div className="bg-[#FFFF00] text-black py-[16px] px-[10px] text-[16px] text-center">
                              {data.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFF00] py-[85px]">
          <div className="container mx-auto text-black flex justify-center">
            <div>
              <span className="text-[64px]">
                <b>Let’s</b> Meet
                <br /> <b>Behind</b> the{" "}
                <b className="relative">
                  magic!{" "}
                  <img
                    src={require("../assets/stars.png")}
                    alt="stars"
                    className="absolute right-0 top-[-22px]"
                  />
                </b>
              </span>
            </div>
          </div>
        </div>
        <div ref={wrapperPhotoRef}>
          <div className="flex">
            {dataKaryawan.map((data: any, key: number) => {
              return (
                <div
                  key={key}
                  className="bg-gray-500 min-h-[500px] max-w-[360px] min-w-[360px] relative parent-employe"
                  style={{
                    minWidth: `${widthPhotos}px`,
                    maxWidth: `${widthPhotos}px`,
                    backgroundImage: `url(${require(`../assets/${data.img}`)})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `100% 100%`,
                  }}
                  onMouseEnter={() => showEmploye(key)}
                  onMouseLeave={() => hideEmplye(key)}
                >
                  <div
                    className="absolute bottom-0 w-100 flex-col justify-end hidden child-employe transition-all ease-in-out duration-700"
                    style={{
                      background: `linear-gradient(180deg, rgba(255, 255, 0, 0.00) 0%, rgba(255, 255, 0, 0.06) 22.92%, rgba(255, 255, 0, 0.62) 46.35%, rgba(255, 255, 0, 0.90) 65.63%)`,
                      minWidth: `${widthPhotos}px`,
                      maxWidth: `${widthPhotos}px`,
                      minHeight: `255px`,
                    }}
                  >
                    <div className="pb-[34px] pl-[30px]">
                      <h2 className="text-black text-[20px] font-bold">{ data.name }</h2>
                      <span className="text-[12px] text-black italic">{ data.role }</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path width="20" d="M720.5 100L0 0H1440L720.5 100Z" fill="#FFFF00" />
        </svg>
      </div>
    </div>
  );
};

export default AboutPage;
