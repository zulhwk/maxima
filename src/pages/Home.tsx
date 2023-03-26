import Jumbotron from "../components/home/Jumbotron";
import AboutSection from "../components/home/AboutSection";
import ShowreelSection from "../components/home/ShowreelSection";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <div>
        <AboutSection />
        <ShowreelSection />
      </div>
      {/* <div className="relative">
        <div className="absolute top-[-187px]">
          <AboutSection />
          <ShowreelSection />
        </div>
      </div> */}
    </div>
  )
};

export default Home;