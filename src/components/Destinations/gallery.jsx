// import React from 'react'
// import Data from './destinationData'
// import { useParams } from 'react-router-dom'
// import { TiLocation } from "react-icons/ti";


// const Gallery = () => {
//   const {id} = useParams();
//   const data = Data.find((item) => item.id === parseInt(id));

  
//   return (
//     <div name="destination" className="destination section conatiner">
//       <div className="secContainer">
// <div className="destinationContainer grid">
//           {Data.map((Data) => {
//             return (
//                 <div className="singleDestination" key={Data.id}>
//                   <div className="imgDiv">
//                     <img src={Data.img} alt="" />

//                     <div className="descInfo flex">
//                       <div className="text">
//                       </div>
//                       <span className="rating">{Data.rating}</span>
//                     </div>
//                     <div className="descInfo flex">
//                     <div className="text">
//                       <span className="name">{Data.name}</span>
//                       <p className="flex">
//                         <TiLocation className="icon" />
//                         {Data.location}
//                       </p>
//                     </div>
   
//                   </div>
//                   </div>
//                 </div>
            
//             );
//           })}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Gallery
import React from 'react';
import Data from './destinationData';
import { useParams } from 'react-router-dom';
import { TiLocation } from 'react-icons/ti';
import Destinations from './destinations';

const Gallery = () => {
  const { id } = useParams();
  const selectedDestination = Data.find((item) => item.id === parseInt(id));

  if (!selectedDestination) {
    // Handle the case when the destination with the specified ID is not found.
    return <div>Destination not found</div>;
  }

  return (
    <div name="destination" className="destination section container">
      <div className="secTitle mt-[2rem] hero ">
          
          <h1>{selectedDestination.location}</h1>
          <span className="redText ">Popular Places </span>
        </div>
      <div className="secContainer">
        <div className="destinationContainer grid">
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img1} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title1}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img2} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title2}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img3} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title3}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img4} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title4}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img5} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title5}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
          <div className="singleDestination" key={selectedDestination.id}>
            <div className="imgDiv">
              <img src={selectedDestination.img6} alt="" />

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{selectedDestination.name}</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    {selectedDestination.title6}
                  </p>
                </div>
                <span className="rating">{selectedDestination.rating}</span>
              </div>
            </div>
          </div>
        </div>



      </div>
        {/* <div className="secTitle mt-[4rem] hero ">
          
          <h1>OUR Trips</h1>
          <span className="redText ">Popular Places </span>
        </div>
        <div className="secContainer book ">
          <div className='mt-[4rem]'>
            <h1>Decemeber,2023</h1>
          <h4>Tour duration: 15days </h4>
          <span></span>
          </div>
        </div> */}
    </div>
  );
};

export default Gallery;
