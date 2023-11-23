import React from "react";
import "./About.css";

import AboutImg from "../../Assest/Adventure.jpg";

const features =[
{
  id:1,
  title:"Personalized Trip Planning",
  desc:"We understand that no two travelers are the same. That's why we provide a unique platform that allows you to tailor your journey according to your preferences. Whether you seek serene mountain getaways, lush forest retreats, or breathtaking coastal escapades, our tools make it easy to plan the perfect itinerary.",
},
{
  id:2,
  title:"Discover Nature's Treasures",
  desc:" Explore our curated collection of destinations that celebrate the wonders of nature. From majestic waterfalls to secluded hiking trails, we handpick hidden gems that promise awe-inspiring experiences.",
},
{
  id:3,
  title:"Expert Guidance",
  desc:"Our team of experienced travelers and local experts are here to guide you every step of the way. Need recommendations? Seeking insider tips? We've got you covered",
},
{
  id:4,
  title:"Seamless Booking Experience",
  desc:"Experience: Booking your dream trip should be effortless. With our user-friendly interface, you can easily book accommodations, activities, and transportation, ensuring a hassle-free experience..",
},
// {
//   id:5,
//   title:"Community and Reviews",
//   desc:"Join a vibrant community of fellow travelers sharing their experiences, tips, and stories. Read authentic reviews to help you make informed decisions and discover off-the-beaten-path adventures.",
// },
]

const about = () => {
  return (
    <div className="about container ">
      <div className="  section">
        <h1>Welcome to Dreams Travel</h1>
        <div className="grid">
          <div className="secHeading">
            At Dreams Travel, we believe that every journey is an opportunity to
            live out your dreams. Our passion for exploration, coupled with a
            commitment to delivering exceptional experiences, drives us to
            curate unforgettable adventures in nature's finest landscapes.
          </div>
          <div className="imgDiv">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
      <div className="section offer">
        <h2>What We Offer</h2>
<div className="feature">

{features.map((feature)=>(
   
   <div className="box">
     <img src={AboutImg} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} />
     <span className="title">{feature.title}</span>
     <p className="desc">{feature.desc}</p>
   </div>
  

))}
</div>


       
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default about;
