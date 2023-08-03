import { useRef, useState } from "react";

const ContactPage = () => {
  const aLink = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<any>({
    name: '',
    email: '',
    messages: '',
  });

  const submitEmail = () => {
    if (aLink.current) {
      aLink.current.click();
    }
  }
  return (
    <div>
      <div className="min-h-[944px]">
        <div className="container mx-auto pb-[295px]">
          <div className="grid grid-cols-2 mt-[94px]">
            <div>
              <form>
                <div className="mb-[60px]">
                  <span className="block mb-[10px] text-[20px]">Name</span>
                  <input type="text" className="py-[13px] px-[30px] w-full rounded-full text-black" onChange={(e) => setForm((old:any) => ({...old, name: e.target.value}))} />
                </div>
                <div className="mb-[60px]">
                  <span className="block mb-[10px] text-[20px]">Email</span>
                  <input type="email" className="py-[13px] px-[30px] w-full rounded-full text-black" onChange={(e) => setForm((old:any) => ({...old, email: e.target.value}))} />
                </div>
                <div className="mb-[60px]">
                  <span className="block mb-[10px] text-[20px]">Message</span>
                  <textarea cols={10} rows={10} className="py-[13px] px-[30px] w-full rounded-lg text-black" onChange={(e) => setForm((old:any) => ({...old, messages: e.target.value}))} />
                </div>
                <div className="flex justify-end">
                  <a href={`mailto:18103094@ittelkom-pwt.ac.id?subject=Maxima Contact Us&body=${form.messages}`} className="bg-[#FFFF00] text-black p-4 font-bold rounded-full min-w-[100px]">Submit</a>
                </div>
              </form>
            </div>
            <div className="flex justify-end relative">
              <h4 className="text-[96px] font-bold">Tell Us<br /> What You<br /> Want!</h4>
              <div className="absolute bottom-0">
                <div className="text-2xl relative">
                  Or if you look different option,<br /> check link below :)
                  <svg className="absolute right-0 top-[47px]" width="66" height="100" viewBox="0 0 66 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.5 2H56V0.5H54.5V2ZM53.4393 90.0607C54.0251 90.6464 54.9749 90.6464 55.5607 90.0607L65.1066 80.5147C65.6924 79.9289 65.6924 78.9792 65.1066 78.3934C64.5208 77.8076 63.5711 77.8076 62.9853 78.3934L54.5 86.8787L46.0147 78.3934C45.4289 77.8076 44.4792 77.8076 43.8934 78.3934C43.3076 78.9792 43.3076 79.9289 43.8934 80.5147L53.4393 90.0607ZM0 3.5H54.5V0.5H0V3.5ZM53 2V89H56V2H53Z" fill="#F4F4F4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path width="20" d="M720.5 100L0 0H1440L720.5 100Z" fill="#FFFF00"/>
        </svg>
      </div>
    </div>
  );
};

export default ContactPage;
