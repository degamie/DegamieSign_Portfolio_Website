// WID(04/03/2026)//(Sarthak Mittal)#1.1.1.1
import React, { useState, useEffect } from "react";
import './navBar.css';
// Assuming you import assets from your asset bundle file
// Modify the import path below according to your project structure
// import { assets } from "../assets/assets"; 
export default function NavBar(){
const NavBar = () => {
    // 1. Initializing Mobile Menu State properly using React Hooks
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // 2. Optional: Side-effect management (Handling background scroll lock when menu opens)
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden'; // Prevents background scrolling
        } else {
            document.body.style.overflow = 'auto';
        }
        
        // Clean up effect on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <div className="absolute top-0 left-0 w-full z-10 bg-transparent">
            {/* Header Background Image / Logo Wrapper */}
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Fixed self-closing img tag syntax & corrected assets spelling */}
                <img src={assets?.logo || ""} alt="Design Header Logo" className="w-32 cursor-pointer" />
                
                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-6 items-center text-white font-medium">
                    <li><a href="#About" className="cursor-pointer hover:text-blue-400 transition">About Us</a></li>
                    <li><a href="#Jobs" className="cursor-pointer hover:text-blue-400 transition">Jobs</a></li>
                    <li><a href="#Contact" className="cursor-pointer hover:text-blue-400 bg-blue-500 px-6 py-2 rounded-full transition">Contact Us</a></li>
                </ul>

                {/* Mobile Menu Icon (Hamburger Button) - Visible on small screens only */}
                <img 
                    onClick={() => setShowMobileMenu(true)} 
                    src={assets?.menu_icon || ""} 
                    alt="Open Menu" 
                    className="md:hidden w-7 cursor-pointer filter invert" // 'invert' used if your icon needs color correction
                />
            </div>

            {/* --- Mobile Menu Overlay Screen --- */}
            <div className={`md:hidden fixed top-0 right-0 bottom-0 left-0 z-20 bg-white transition-all duration-300 transform ${showMobileMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                {/* Close Button Inside Mobile Menu */}
                <div className="flex justify-end p-6">
                    <img 
                        onClick={() => setShowMobileMenu(false)} 
                        src={assets?.cross_icon || ""} 
                        alt="Close Menu" 
                        className="w-6 cursor-pointer"
                    />
                </div>
                
                {/* Mobile Navigation Links List */}
                <ul className="flex flex-col items-center justify-center space-y-8 mt-10 text-xl font-semibold text-gray-800">
                    <li><a onClick={() => setShowMobileMenu(false)} href="#About" className="hover:text-blue-500 transition">About Us</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#Jobs" className="hover:text-blue-500 transition">Jobs</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#Contact" className="hover:text-blue-500 bg-blue-500 text-white px-8 py-3 rounded-md transition">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

}

