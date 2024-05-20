import { useState, useEffect } from 'react'
import { Notification } from './Notification.jsx'
import { NavLink } from 'react-router-dom'
import { HamburgerMenuIcon } from './Icons/HamburgerMenuIcon.jsx'
import { NotificationIcon } from './Icons/NotificationIcon'
import { ExitIcon } from './Icons/ExitIcon'
import { HomeIcon } from './Icons/HomeIcon'
import { TaskIcon } from './Icons/TaskIcon'
import { CalendarIcon } from './Icons/CalendarIcon'
import { StatisticsIcon } from './Icons/StatisticsIcon'
import { ConfigurationIcon } from './Icons/ConfigurationIcon'
import { LogOutIcon } from './Icons/LogOutIcon'

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    const [showNotifications, setShowNotifications] = useState(false)

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications)
    }

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'light') {
            document.querySelector('html').classList.remove('dark')
        } else {
            document.querySelector('html').classList.add('dark')
        }
    }, [theme])

    return (
        <>
            <div className="flex px-8">
                <div className="xl:hidden w-full flex justify-end">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className={`translate-x-5 p-2 sm:hidden`}
                    >
                        <NotificationIcon width="24" height="24" />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`translate-x-5 p-2`}
                    >
                        <HamburgerMenuIcon width="28" height="28" />
                    </button>
                </div>
            </div>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                    isOpen ? 'block' : 'hidden'
                } bg-black/30 h-screen w-screen fixed z-10 top-0 left-0 right-0 backdrop-blur-sm xl:hidden`}
            ></div>

            <nav
                className={`${
                    isOpen ? 'translate-x-0' : 'translate-x-[-50rem]'
                } top-0  z-40 xl:translate-x-0 bg-gradient-light fixed h-screen rounded-r-xl flex flex-col justify-between items-center transition-all duration-200 dark:bg-gradient-dark`}
            >
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-4 absolute translate-x-[14rem] md:hidden"
                    >
                        <ExitIcon width="24" height="24" />
                    </button>
                    <div className="grid mb-6 gap-2 items-center text-center mt-8">
                        <img
                            className="w-16 m-auto rounded-full"
                            src="https://unavatar.io/Kevingu08"
                            alt=""
                        />
                        <p className="dark:text-white">Kevin Guido</p>
                        <p className="text-xs dark:text-white">
                            kevinguidou@gmail.com
                        </p>
                    </div>
                    <ul className="flex flex-col m-auto text-start">
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/"
                            >
                                <HomeIcon width="24" height="24" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/task"
                            >
                                <TaskIcon width="24" height="24" />
                                Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/AdminView"
                            >
                                <CalendarIcon width="24" height="24" />
                                Calendar
                            </NavLink>
                        </li>
                        <li className="hidden md:block">
                            <a
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                href="#"
                                onClick={() =>
                                    setShowNotifications(!showNotifications)
                                }
                            >
                                <NotificationIcon width="24" height="24" />
                                Notifications
                            </a>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/statistics"
                            >
                                <StatisticsIcon width="24" height="24" />
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white"
                                to="/configuration"
                            >
                                <ConfigurationIcon width="24" height="24" />
                                Configuration
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <span className="block h-[1.2px] w-[80%] m-auto my-2 bg-white"></span>
                    <a
                        className="flex gap-6 px-8 py-5 hover:bg-gradient-light-li dark:text-white rounded-br-xl"
                        href="#"
                    >
                        <LogOutIcon width="24" height="24" />
                        Log Out
                    </a>
                </div>

                {/* NOTIFICATIONS */}
            </nav>

            <div
                className={`notification-panel ${showNotifications ? 'active' : ''}   `}
            >
                <div className="cont-notifications gap-5 bg-slate-50 dark:bg-dark-secondary overflow-y-auto">
                    <nav className="grid justify-center">
                        <div className="flex items-center justify-between px-4 pt-6 pb-4">
                            <h1 className="font-bold text-2xl  dark:text-white">
                                Notifications
                            </h1>
                            <div
                                onClick={toggleNotifications}
                                className="cursor-pointer"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                        <Notification />
                    </nav>
                </div>
            </div>
        </>
    )
}
