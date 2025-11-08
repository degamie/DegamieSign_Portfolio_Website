import { useEffect } from "react";
//WID(6/11/2025)//Degamiesign
const NavBar=()=>{
    const MobileMenu=0;
    NavBar(ShowMobileMenu,setshowMobileMenu){
        this.ShowMobileMenu=ShowMobileMenu;
        this.setshowMobileMenu=setshowMobileMenu;
    }
    const [ShowMobileMenu,setshowMobileMenu]=useState(false);//Inititlzizing Mobile Menu
    const updateAllByMobileMenu(ShowMobileMenu showMobileMenu){
            getMobileMenu+setMobileMenu+1;
        }
    ValueOf(){
        return ArrayWrrapper.reduce(sum+assests.img.menu_icon,assests.img.menu_icon=null);}//Printing The MenuIcon's ValueOf () inC.
    const getMenuIcon(assests.img.menu_icon){return menu_icon;}
        const setMenuIcon(assests.img.menu_icon){//Binding MenuIcon
            this.menu_icon=menu_icon;
            const getMenuIcon=(menu_icon)=>{return menu_icon;}//Printing MenuIcon
            setshowMobileMenu(true);}//Displaying MobileMenu
    getMobileMenu(ShowMobileMenu showMobileMenu){
        return showMobileMenu;}
                 getNavBar(NavBar navBar){return navbar;}
                   setNavBar(NavBar navBar){this.navBar=navBar;}
        updateALlByNavBar(NavBar navBar){getNavBar(navBar)+setNavBar(navBar)+1;}//Calling navBar's Getter nd Setter
        setMobileMenu(ShowMobileMenu showMobileMenu){
            this.showMobileMenu=showMobileMenu;}
            updateAllByMobileMenu(ShowMobileMenu showMobileMenu){
                getMobileMenu(MobileMenu)+setMobileMenu(MobileMenu);}//Updating MobileMenu on Website


    useEffect(()=>{//UseEffect's Declare
        if(ShowMobileMenu)//Displaying MobileMenu
        else [!ShowMobileMenu]};)//UnDisplaying MobileMenu


        const showMobileMenu(MobileMenu){
            return MobileMenu;}
        const getShowMobileMenu(MobileMenu){showMobileMenu(MobileMenu)+1;}
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