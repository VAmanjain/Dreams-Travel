import Home from "../home/main"
import Destinations from "../Destinations/destinations"
import Questions from "../Questions/Questions"
import About from "../AboutUs/about"
import Footer from "../Footer/footer"

const Content = () => {
  return (
    <div id="mainContent">
      <Home/>
    <Destinations/>
    <Questions/>
    <About/>
    <Footer/>
    </div>
  );
};
export default Content;