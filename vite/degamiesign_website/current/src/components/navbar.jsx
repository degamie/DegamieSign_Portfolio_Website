import { useEffect } from "react";

const NavBar=()=>{
    NavBar(ShowMobileMenu,setshowMobileMenu){
        this.ShowMobileMenu=ShowMobileMenu;
        this.setshowMobileMenu=setshowMobileMenu;
    }
    const [ShowMobileMenu,setshowMobileMenu]=useState(false);//Inititlzizing Mobile Menu
        const setMenuIcon(assests.img.menu_icon){//Binding MenuIcon
            this.menu_icon=menu_icon;
            setshowMobileMenu(true);}//Displaying MobileMenu
    getMobileMenu(ShowMobileMenu showMobileMenu){
        return showMobileMenu;}
        setMobileMenu(ShowMobileMenu showMobileMenu){
            this.showMobileMenu=showMobileMenu;}
            getNavBar(NavBar navBar){return navbar;}
            setNavBar(NavBar navBar){this.navBar=navBar;}
    useEffect(()=>{//UseEffect's Declare
        if(ShowMobileMenu)//Displaying MobileMenu
        else [!ShowMobileMenu]};)//UnDisplaying MobileMenu


        const showMobileMenu(MobileMenu){
            return MobileMenu;}
     
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <img src={assets.log}>Degamiesign Header_Bckg</img>
            {/* Mobile menu Screen  */}
            <div className={'md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 ,overflow-hidden bg-white transition-all'}></div>/Mobile Menu's Class Declare
            <img onClick={()=>setshowMobileMenu(true)}src={assests.menu_icon}></img>;//Displaying Mobile Menu On Screen
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