import React from 'react'
import Navbar from './Navbar'

function Header() {
  return ( <div className ='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'style={{backgroundImage:"url('/Website_header.png'"}}id='Header'>
    <Navbar/>
      <h2>
        We Empower Innovation!
      </h2>
      <div className="grid 2">
        <div>
          <button className='md-85 blue-color px-5 py-6'>Header</button>
        </div>
      </div>
      <a href="">Jobs</a>
      <a href="">Contact Us</a>   
    </div>
  )
}

export default Header