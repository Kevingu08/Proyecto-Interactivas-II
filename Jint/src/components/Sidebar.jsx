import "./index.css";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { Notification } from "./Notification.jsx";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);

    };
    
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'light') {
            document.querySelector('html').classList.remove('dark');
        } else {
            document.querySelector('html').classList.add('dark');
        }
    }, [theme]);



 
    return (
        <>
            <div className="flex">
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={`translate-x-5 p-2 md:hidden`}>
                    <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>

                    </button>
                </div>
                <div onClick={() => setShowNotifications(!showNotifications)} className="md:hidden">
                    <button className={`translate-x-5 p-2 md:hidden`}>
                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                    </svg>

                    </button>
                </div>
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'block' : 'hidden'} bg-black/30 h-screen w-screen fixed z-10 top-0 left-0 right-0 backdrop-blur-sm md:hidden`}></div>

            <nav className={`${isOpen ? 'translate-x-0' : 'translate-x-[-50rem]'} top-0  z-50 xl:translate-x-0 bg-gradient-light fixed h-screen rounded-r-xl flex flex-col justify-between items-center transition-all duration-200 dark:bg-gradient-dark`}>
                
                <div className="relative">
                <button onClick={() => setIsOpen(!isOpen)} className="p-4 absolute translate-x-[14rem] md:hidden">
                <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>


                </button>
                    <div className="grid mb-6 gap-2 items-center text-center mt-4">
                        <img
                            className="w-16 m-auto rounded-full"
                            src="https://unavatar.io/Kevingu08"
                            alt=""
                        />
                        <p className="dark:text-white">Kevin Guido</p>
                        <p className="text-xs dark:text-white">kevinguidou@gmail.com</p>
                        <a className="m-auto" href="#">
                        <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>

                        </a>
                    </div>
                    <ul className="flex flex-col m-auto text-start">
                        <li>
                            <Link
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                                </svg>

                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/task"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
                                </svg>
                                Task
                            </Link>
                        </li>
                        <li>
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
                                </svg>
                                Calendar
                            </a>
                        </li>
                        <li className="hidden md:flex">
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                                </svg>
                                Notifications
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                                </svg>
                                Statistics
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg>
                                Configuration
                            </a>
                        </li>
                        <span className="block h-[1.2px] w-[80%] m-auto my-2 bg-white"></span>
                        <li>
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                                onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light') }
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                                </svg>
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>

                <img
                    className="w-[32px] h-[32px] mb-4"
                    src="../../src/assets/imgs/Jint-logo.svg"
                    alt=""
            
                />

            {/* NOTIFICATIONS */}
            
                
            </nav>

            <div className={`notification-panel ${showNotifications ? 'active' : ''}   `}>
                    <div className='cont-notifications gap-5 bg-slate-50 dark:bg-dark-secondary overflow-y-auto'> 
                        <nav className='grid justify-center'>
                        <div className="grid grid-cols-2 gap-72">
                            <h1 className='font-bold text-2xl p-2 mt-4 dark:text-white'>Notifications</h1>
                            <div onClick={toggleNotifications} className="cursor-pointer">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white mt-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            </div> 
                        </div>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>
                            <Notification/>  
                        </nav>
                       
                    </div>
                    
                </div>

            
            
            
            
        </>
    )}