import Destinations from "../Destinations/destinations";
import Questions from "../Questions/Questions";
import About from "../AboutUs/about";
import Footer from "../Footer/footer";
import Main from "../home/Main";

const Content = () => {
  return (
    <div id="mainContent">
      <Main/>
      <Destinations />
      <Questions />
      <About />
      <Footer />
    </div>
  );
};
export default Content;
