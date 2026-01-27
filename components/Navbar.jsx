'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaBars } from 'react-icons/fa';

// Assets
import Logo from '@/assets/images/logo-white.png';
import Profile from '@/assets/images/profile.png';

// Components
import MobileDropdown from './MobileDropdown';
import ProfileMiniDropdown from './ProfileMiniDropdown';

const Navbar = () => {
  // STATE: Controls whether menus are open (true) or closed (false)
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(true)

  // HOOKS: Get current URL path to highlight active links
  const pathname = usePathname();

  // REF: Creates a reference point to the Profile Menu container
  const profileMenuRef = useRef(null);

  // EFFECT: Handle "Click Outside" logic
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Logic: If menu is OPEN, and the click target is NOT inside our Ref container
      if (
        isProfileMenu &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setIsProfileMenu(false); // Close the menu
      }
    };

    // Listen for mouse clicks anywhere on the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup: Remove listener when component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenu]);

  return (
    <nav className="bg-blue-700 border-b border-blue-500 mx-auto relative z-50">
      <div className="md:px-12 px-6 py-4 flex justify-between items-center">
        
        {/* MOBILE HAMBURGER BUTTON 
            - Hidden on desktop (md:hidden)
            - Toggles mobile menu state
        */}
        <button
          type="button"
          className="md:hidden hover:bg-gray-700 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setIsMobileMenu((prev) => !prev)}
        >
          <FaBars className="text-white text-xl" />
        </button>

        {/* LOGO & DESKTOP NAVIGATION */}
        <div className="flex gap-3 items-center">
          <Link href="/public">
            <Image src={Logo} className="w-9 h-9 animate-imageshadow rounded-full" alt="PropertyPulse Logo" />
          </Link>

          <div className="hidden gap-4 text-white items-center md:flex">
            <h2 className="text-2xl font-bold  flex shrink-0 ">
              <Link href="/public" className='animate-glow'>PropertyPortal</Link>
            </h2>

            {/* NAV LINKS
                - We check `pathname === '/public/url'` to conditionally add the 'bg-black' class 
            */}
            <Link
              href="/public"
              className={`${pathname === '/public' ? 'bg-black' : ''} nav-btn`}
            >
              Home
            </Link>
            <Link
              href="/public/properties"
              className={`${pathname === '/public/properties' ? 'bg-black' : ''} nav-btn`}
            >
              Properties
            </Link>

            {isLoggedIn&&(
                 <Link
              href="/public/properties/add"
              className={`${pathname === '/public/properties/add' ? 'bg-black' : ''} nav-btn`}
            >
              Add property
            </Link>
            )}
         
          </div>
        </div>

        {/* RIGHT SIDE (LOGIN & PROFILE) */}
        <div className="flex gap-3">
          {/* LOGIN BUTTON (Example placeholder) (if not logged in) */}
          {!isLoggedIn&&(
             <div className="bg-gray-600 hover:bg-gray-800 px-3 py-2 hidden gap-2 items-center rounded-lg md:flex cursor-pointer">
            <FaGoogle className="text-white" />
            <span className="text-lg text-white">Login or Register</span>
          </div>

          )}
         
        {/* if logged in */}
        {isLoggedIn&&(
             <div className="flex gap-4  items-center">
            {/* NOTIFICATION BELL */}
            <div className="relative bg-gray-800 w-8 h-8 p-1 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 stroke-gray-400 hover:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              {/* Notification Badge */}
              <div className="absolute bg-red-500 -top-1 -right-1 h-4 w-4 rounded-full flex items-center justify-center text-[10px] text-white">
                3
              </div>
            </div>

            {/* PROFILE DROPDOWN CONTAINER
               - We attach the 'ref' here so the logic knows this is the "Safe Zone".
               - 'relative' is crucial so the absolute dropdown positions correctly.
            */}
            <div className="relative" ref={profileMenuRef}>
              <button
                type="button"
                className="h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setIsProfileMenu((prev) => !prev)}
              >
                <Image
                  src={Profile}
                  className="h-8 w-8 object-cover hover:scale-105 "
                  alt="User Profile"
                />
              </button>

              {/* DROPDOWN MENU 
                  - Only shows if isProfileMenu is TRUE
                  - Positioned absolute to the right
              */}
              {isProfileMenu && (
                <div className="absolute right-0 top-0  w-sm bg-white shadow-lg rounded-md ">
                  <ProfileMiniDropdown />
                </div>
              )}
            </div>
          </div>

        )}
       
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN 
          - Rendered outside the flex container to stack vertically
      */}
      {isMobileMenu && (
        <div className="md:hidden">
          <MobileDropdown isLoggedIn={isLoggedIn}/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;