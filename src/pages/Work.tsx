import { useEffect } from "react";

const WorkPage = () => {

  const handleSendGA = (event:any) => {
    if (event.data === 'video_played') {
      // @ts-ignore
      window.gtag('event', 'playing_video_showreel');
    }
  }

  useEffect(() => {
    window.parent.postMessage('video_played', '*');
    window.addEventListener('message', handleSendGA, false);
    return () => {
      window.removeEventListener('message', handleSendGA, false);
    }
  }, []);
  return (
    <div>
      <div className="min-h-[944px]">
        <div className="container mx-auto flex justify-center items-center">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/T528DyPdjf8?controls=0"
            title="Maxima Post Production"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="bg-[#FFFF00]">
          <div className="text-black container mx-auto py-[119px]">
            <span className="text-[45px] font-semibold mb-[161px] block relative">
              We’ve had the pleasure working with brands,
              <br /> agencis and studio{" "}
              <span className="relative">
                such as :
                <svg
                  className="absolute right-[-200px] top-[30px]"
                  width="73"
                  height="93"
                  viewBox="0 0 73 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.5 3H57V0.5H54.5V3ZM52.7322 91.7678C53.7085 92.7441 55.2915 92.7441 56.2678 91.7678L72.1777 75.8579C73.154 74.8816 73.154 73.2986 72.1777 72.3223C71.2014 71.346 69.6184 71.346 68.6421 72.3223L54.5 86.4645L40.3579 72.3223C39.3816 71.346 37.7986 71.346 36.8223 72.3223C35.846 73.2986 35.846 74.8816 36.8223 75.8579L52.7322 91.7678ZM0 5.5H54.5V0.5H0V5.5ZM52 3V90H57V3H52Z"
                    fill="#0E0E0E"
                  />
                </svg>
              </span>
            </span>
            <p className="text-[40px]">
              Ajinamoto - Gojek - Panasonic - Camel - Pronas - Glico -
              Hansaplast - Ternakuang - Bapebbti - Digdaya Selaras - Imigrasi -
              Kemendikbud - Lampu Creative - Miura Films - Folklore Media -
              Niice CG and others.
            </p>
          </div>
        </div>
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path width="20" d="M720.5 100L0 0H1440L720.5 100Z" fill="#FFFF00"/>
        </svg>
      </div>
    </div>
  );
};

export default WorkPage;
