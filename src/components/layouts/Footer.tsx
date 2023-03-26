import ContactSection from "./ContactSection";

const Footer = () => {
  return (
    <div>
      <ContactSection />
      <footer className="bg-[#FFFF00] py-[35px] text-center" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
        © Maxima Post Production Studio
      </footer>
    </div>
  )
};

export default Footer;