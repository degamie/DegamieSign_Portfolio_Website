const NavBar=()=>{
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <img src={assets.log}></img>
            <ul className="container mx-auto flex">
                <a href="#Header" className='cursor-pointer hover:text-blue-400'>About Us</a>
                <a href="#Header" className='cursor-pointer hover:text-blue-400'>jobs Us</a>
                <a href="#Header" className='cursor-pointer hover:text-blue-400'>Contact Us</a>
                <button className='hidden/md;block bg:blue px-12 py-5'></button>
            </ul>
        </div>
    )
}