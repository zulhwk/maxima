import { useLocation, useNavigate } from "react-router-dom";
import LogoMaxima from "../../assets/logo/logo_maxima.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  const isActivedMenu = (path: string) => {
    if (path === location.pathname)
      return `border-b-[3px] border-[#FFFF00] font-bold`;
    else return ``;
  };

  return (
    <nav className="w-full bg-[#0E0E0E] py-[18px] px-[48px] flex items-center justify-between fixed top-0 z-[10000]">
      <img src={LogoMaxima} alt="logo-maxima" />
      <div className="flex gap-20">
        <button
          onClick={() => navigateTo("/")}
          className="text-[20px] leading-[30px] tracking-[-0.015em] font-normal pb-[4px]"
        >
          <span className={isActivedMenu("/")}>Home</span>
        </button>
        <button
          onClick={() => navigateTo("/about")}
          className="text-[20px] leading-[30px] tracking-[-0.015em] font-normal pb-[4px]"
        >
          <span className={isActivedMenu("/about")}>About</span>
        </button>
        <button
          onClick={() => navigateTo("/work")}
          className="text-[20px] leading-[30px] tracking-[-0.015em] font-normal pb-[4px]"
        >
          <span className={isActivedMenu("/work")}>Work</span>
        </button>
        <button
          onClick={() => navigateTo("/contact")}
          className="text-[20px] leading-[30px] tracking-[-0.015em] font-semibold py-[5px] px-[20px] transition ease-in-out rounded-full border border-white hover:border-[#FFFF00] hover:text-black hover:bg-[#FFFF00] hover:duration-700"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
