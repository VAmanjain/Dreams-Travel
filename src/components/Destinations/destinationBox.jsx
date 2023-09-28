import React from 'react'
import Data from './destinationData'

function destinationBox() {
  return (
    <div className='destination section container ' >
      <div className='secContainer' >
{Data.map((desination , index)=>{
    Key={index}
    desination={desination}
    index={index}
    desinationData={Data}
})
}
      </div>
    </div>
  )
}

export default destinationBox;
