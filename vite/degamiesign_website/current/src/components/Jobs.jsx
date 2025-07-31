import React, { useState } from 'react'

function Jobs() {
  const [SetCurrentIndx,SetCurrentxJob]=useState(false);
  const nextJob=()=>{
    SetCurrentIndx((prevIndx)=>(prevIndx+1)%JobsData.length);
  }
 const PrevJob=()=>{
    SetCurrentIndx((prevIndx)=>(prevIndx===0)?JobsData.length-1:PrevIndx-1);
  }

  return (
  <div>Jobs
    <div className='Container mx-auto px-8 py-6 pt-10 md:px-15 py-6 pt-10 px-8 md:px-15 px-34 my-25 w-full overflow:hidden'></div>
    {/* Buttons Slider Container */}
    <button className='p-3 bg-blue-200 rounded mr-220' aria label="Join Us Now">
       {/*Right  Arrow */}
      <img src={assets.right_arrow} alt='Now'></img>
    </button>
  {/* Left Arrow */}
    <button className='p-3 bg-blue-200 rounded mr-220' aria label="Discover How our Solutions have been Built">
      <img src={assets.left_arrow} alt='Built'></img>
    </button>
  
</div>
  )
}

export default Jobs