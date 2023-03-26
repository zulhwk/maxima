import LogoMaxima from "../../assets/logo/logo_maxima.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0E0E0E] py-[18px] px-[48px] flex items-center justify-between">
      <img src={LogoMaxima} alt="logo-maxima" />
      <div className="flex gap-20">
        <button className="text-[20px] leading-[30px] tracking-[-0.015em] font-bold pb-[4px]">
          <span className="border-b-[3px] border-[#FFFF00]">Home</span>
        </button>
        <button className="text-[20px] leading-[30px] tracking-[-0.015em] font-normal pb-[4px]"><span>About</span></button>
        <button className="text-[20px] leading-[30px] tracking-[-0.015em] font-normal pb-[4px]"><span>Work</span></button>
        <button className="text-[20px] leading-[30px] tracking-[-0.015em] font-semibold py-[5px] px-[20px] transition ease-in-out rounded-full border border-white hover:border-[#FFFF00] hover:text-black hover:bg-[#FFFF00] hover:duration-700">Contact Us</button>
      </div>
    </nav>
  )
};

export default Navbar;