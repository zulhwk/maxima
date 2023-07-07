const ContactPage = () => {
  return (
    <div>
      <div className="min-h-[944px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 mt-[94px]">
            <div>
              <div className="mb-[60px]">
                <span className="block mb-[10px] text-[20px]">Name</span>
                <input type="text" className="py-[13px] px-[30px] w-full rounded-full text-black" />
              </div>
              <div className="mb-[60px]">
                <span className="block mb-[10px] text-[20px]">Email</span>
                <input type="email" className="py-[13px] px-[30px] w-full rounded-full text-black" />
              </div>
              <div className="mb-[60px]">
                <span className="block mb-[10px] text-[20px]">Message</span>
                <textarea cols={10} rows={10} className="py-[13px] px-[30px] w-full rounded-lg text-black" />
              </div>
              <div className="flex justify-end">
                <button className="bg-[#FFFF00] text-black p-4 font-bold rounded-full min-w-[100px]">Submit</button>
              </div>
            </div>
            <div className="flex justify-end">
              <h4 className="text-[96px] font-bold">Tell Us<br /> What You<br /> Want!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
