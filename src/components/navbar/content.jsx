import Destinations from "../Destinations/destinations";
import Questions from "../Questions/Questions";
import Maint from "../home/Maint";
import Travel from "../DreamDestination/travel";
import Count from "../Count/Count";
import Protfolio from "../Profolio/protfolio";

import Subscribe from "../Subscribe/subscribe";

const Content = () => {
  return (
    <div id="mainContent">
      <Maint/>
      <Count/>
      <Destinations />
     <Travel/>
      <Questions />
      <Protfolio/>
      <Subscribe/>
     
    </div>
  );
};
export default Content;
