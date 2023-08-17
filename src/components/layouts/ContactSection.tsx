import {
  PhoneIcon,
  EnvelopeIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import IconBubbleStar from "../../assets/img/icon_bubble_star.png";

const ContactSection = () => {

  const handleClick = (name:any) => {
    // @ts-ignore
    window.gtag('event', name);
  }

  return (
    <section className="pt-[80px] pb-[167px] text-center">
      <div>
        <span className="relative text-[60px] leading-[90px] font-bold">
          <img
            src={IconBubbleStar}
            alt="icon-bubble-star"
            className="absolute inset-0 left-[-67.46px] top-[-20.5px]"
          />
          SAY HELLO TO US !
        </span>
      </div>
      <p>
        We are always happy to work with you as a partner to create memorable
        creative experiences, if you have new project or any idea in mind please
        say hello to us!
      </p>
      <div className="mt-[56px] flex gap-[24px] justify-center">
        <a href="https://instagram.com/mxm.post" target="blank" onClick={() => handleClick('button_instagram')} className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#A086BD] rounded-full px-[20px] py-[5px]">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.25 0H17.75C21.75 0 25 3.25 25 7.25V17.75C25 19.6728 24.2362 21.5169 22.8765 22.8765C21.5169 24.2362 19.6728 25 17.75 25H7.25C3.25 25 0 21.75 0 17.75V7.25C0 5.32718 0.763837 3.48311 2.12348 2.12348C3.48311 0.763837 5.32718 0 7.25 0ZM7 2.5C5.80653 2.5 4.66193 2.97411 3.81802 3.81802C2.97411 4.66193 2.5 5.80653 2.5 7V18C2.5 20.4875 4.5125 22.5 7 22.5H18C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18V7C22.5 4.5125 20.4875 2.5 18 2.5H7ZM19.0625 4.375C19.4769 4.375 19.8743 4.53962 20.1674 4.83265C20.4604 5.12567 20.625 5.5231 20.625 5.9375C20.625 6.3519 20.4604 6.74933 20.1674 7.04235C19.8743 7.33538 19.4769 7.5 19.0625 7.5C18.6481 7.5 18.2507 7.33538 17.9576 7.04235C17.6646 6.74933 17.5 6.3519 17.5 5.9375C17.5 5.5231 17.6646 5.12567 17.9576 4.83265C18.2507 4.53962 18.6481 4.375 19.0625 4.375ZM12.5 6.25C14.1576 6.25 15.7473 6.90848 16.9194 8.08058C18.0915 9.25268 18.75 10.8424 18.75 12.5C18.75 14.1576 18.0915 15.7473 16.9194 16.9194C15.7473 18.0915 14.1576 18.75 12.5 18.75C10.8424 18.75 9.25268 18.0915 8.08058 16.9194C6.90848 15.7473 6.25 14.1576 6.25 12.5C6.25 10.8424 6.90848 9.25268 8.08058 8.08058C9.25268 6.90848 10.8424 6.25 12.5 6.25ZM12.5 8.75C11.5054 8.75 10.5516 9.14509 9.84835 9.84835C9.14509 10.5516 8.75 11.5054 8.75 12.5C8.75 13.4946 9.14509 14.4484 9.84835 15.1517C10.5516 15.8549 11.5054 16.25 12.5 16.25C13.4946 16.25 14.4484 15.8549 15.1517 15.1517C15.8549 14.4484 16.25 13.4946 16.25 12.5C16.25 11.5054 15.8549 10.5516 15.1517 9.84835C14.4484 9.14509 13.4946 8.75 12.5 8.75Z"
              fill="#F4F4F4"
            />
          </svg>
          <span>MXM.POST</span>
        </a>
        <a
          href="tel:+6285171554425"
          className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#0D9D9F] rounded-full px-[20px] py-[5px]"
          target="blank" 
          onClick={() => handleClick('button_telp')}
        >
          <PhoneIcon width={20} />
          <span>+62 851 7155 4425</span>
        </a>
        <a
          href="mailto:18103094@ittelkom-pwt.ac.id"
          className="flex items-center gap-3 text-[20px] leading-[30px] tracking-[-0.015em] font-normal bg-[#007337] rounded-full px-[20px] py-[5px]"
          target="blank" 
          onClick={() => handleClick('button_email')}
        >
          <EnvelopeIcon width={20} />
          <span>CONTACT@MXMPOST.COM</span>
        </a>
        <div className="flex gap-[22px] items-center">
          <ArrowLongLeftIcon width={35} />
          <ArrowLongLeftIcon width={57} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
