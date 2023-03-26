import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {
  return (
    <section className="bg-[#FFFF00] text-black py-[115px] px-[161px]">
      <p className="text-[20px] leading-[30px] tracking-[-0.015em] mb-[29px]"><b>Maxima Post Production Studio</b> is a Jakarta based company that provides visual material needs service since 2019, committed to give maximum result to every projects. Specialized in creative industries with comprehensive production field as well as film, animation, company profile, and advertisement.</p>
      <button className="group grid grid-cols-1 hover:grid-cols-3 gap-4 items-center text-[20px] leading-[30px] tracking-[-0.015em] font-semibold py-[5px] px-[20px] transition transform rounded-full border-2 border-black hover:duration-700">
        <span className="col-span-2">About Us</span>
        <ArrowLongRightIcon className="hidden group-hover:block group-hover:duration-700" width={30} />
      </button>
    </section>
  )
};

export default AboutSection;