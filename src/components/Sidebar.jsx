import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiBarChartGroupedFill, RiEarthFill, RiMessage2Line, RiCalendar2Line, RiLogoutBoxRLine, RiArrowRightCircleLine} from "react-icons/ri";

const Sidebar = () => {
    const [showSubmenu, setShowSubmenu] = useState(false);
    return (
        <>
            <div className={`xl:h-[100vh] xl:static fixed w-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 -left-full transition-all`}>
                <div>
                    <h1 className='text-center text-2xl font-bold text-secondary-300 mb-10 hov'>
                        Admin
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                                    <RiBarChartGroupedFill /> Analitycs
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => setShowSubmenu(!showSubmenu)} to="/" className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors w-full'>
                                    <span className='flex items-center gap-4 justify-between'>
                                        <RiEarthFill /> Social Media
                                    </span>
                                    <RiArrowRightCircleLine className={`mt-1 ${showSubmenu && "rotate-90"} transition-all`} />
                                </button>
                                <ul className={`mt-1 ${!showSubmenu && "hidden"}`} >
                                    <li>
                                        <Link to="/" className='py-2 px-4 border-l border-secondary-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-[3px] before:border-2 before:border-secondary-100 text-gray-500 hover:text-black transition-colors'>
                                            Posts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='py-2 px-4 border-l border-secondary-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-secondary-300 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-[3px] before:border-2 before:border-secondary-100'>
                                            Stadistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='py-2 px-4 border-l border-secondary-200 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-[3px] before:border-2 before:border-secondary-100 text-gray-500 hover:text-black transition-colors'>
                                            Profiles
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                                    <RiMessage2Line /> Messages
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                                    <RiCalendar2Line /> Calendar
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <Link to="/" className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-200 transition-colors'>
                        <RiLogoutBoxRLine /> LogOut
                    </Link>
                </nav>
            </div>
            
        </>
    )
}

export default Sidebar;