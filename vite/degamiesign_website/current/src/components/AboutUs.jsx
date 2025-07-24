import React from 'react'

function AboutUs() {
  return (
  <div> AboutUs
    <h2>Welcome,We Provide High End Business Solutions Globally </h2>
    <div className='flex flex-col items-center container mx-auto p-14 md:px-20 lg:px-35 w-full overflow-display 'id='About Us'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'></h1>
       <h2> Mobile App Dev
        <div>Design,Build and Develop Most PowerFull App Dev Integrably   </div></h2>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'></div>
        <img src={assets}alt=""></img>
    </div>

    </div>
  )
}

export default AboutUs