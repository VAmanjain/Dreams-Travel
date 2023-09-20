import Destinations from "../Destinations/destinations";
import Questions from "../Questions/Questions";
import About from "../AboutUs/about";
import Footer from "../Footer/footer";
import Maint from "../home/Maint";

const Content = () => {
  return (
    <div id="mainContent">
      <Maint/>
      <Destinations />
      <Questions />
      <About />
      <Footer />
    </div>
  );
};
export default Content;
