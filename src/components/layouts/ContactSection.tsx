import { PhoneIcon, EnvelopeIcon, ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import IconBubbleStar from "../../assets/img/icon_bubble_star.png";

const ContactSection = () => {
  return (
    <section className="pt-[80px] pb-[167px] text-center">
      <div>
        <span className="relative text-[60px] leading-[90px] font-bold">
          <img src={IconBubbleStar} alt="icon-bubble-star" className="absolute inset-0 left-[-67.46px] top-[-20.5px]" />
          SAY HELLO TO US !
        </span>
      </div>
      <p>We are always happy to work with you as a partner to create memorable creative experiences, if you have new project or any idea in mind please say hello to us!</p>
      <div className="mt-[56px] flex gap-[24px] justify-center">
        <button className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#A086BD] rounded-full px-[20px] py-[5px]"><PhoneIcon width={20} /><span>MXM.POST</span></button>
        <button className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#0D9D9F] rounded-full px-[20px] py-[5px]"><PhoneIcon width={20} /><span>+62 851 7155 4425</span></button>
        <button className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#007337] rounded-full px-[20px] py-[5px]"><EnvelopeIcon width={20} /><span>CONTACT@MXMPOST.COM</span></button>
        <div className="flex gap-[22px] items-center">
          <ArrowLongLeftIcon width={35} />
          <ArrowLongLeftIcon width={57} />
        </div>
      </div>
    </section>
  )
};

export default ContactSection;