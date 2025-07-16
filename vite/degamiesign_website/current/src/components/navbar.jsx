const NavBar=()=>{
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <img src={assets.log}>Degamiesign Header_Bckg</img>
            <ul className="container mx-auto flex">
                <a href="#Header" className='cursor-pointer hover:text-blue-400'>About Us</a>
                <a href="#Header" className='cursor-pointer hover:text-blue-400'>
                <h2 className='text-5xl sm:text-6xl md:text-82[px] inline-block,max-ul-3xl font-semibold-pt-20'>jobs Us</h2></a>{/*Jobs Btn Styling*/}
                <a href="#Header" className='cursor-pointer hover:text-blue-400  bg-blue -500 px-8 py-3 rounded'>Contact Us</a>{/*Contact US Btn Styling*/}
                <button className='hidden/md;block bg:blue px-12 py-5'>Contact Us</button>
                
            </ul>
        </div>
    )
}