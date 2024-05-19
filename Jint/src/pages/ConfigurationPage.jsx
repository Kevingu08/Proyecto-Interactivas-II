import { useState } from 'react'
import { HealthCard } from '../components/HealthCard'   
import { MedCard } from '../components/MedCard'


export function ConfigurationPage() {
    const [showTheme, setShowTheme] = useState(false)

    const toggleTheme = () => {
        setShowTheme(!showTheme)
    }

    return (
        <>
            {/* CONFIGURATION */}
            <section className="grid p-14 ml-60 text-2xl font-semibold text">
                <div className="grid gap-7 ">
                    <sub>Profile</sub>
                    <img src="/line.png" alt="" />
                    <section className="flex flex-wrap gap-16">
                        <div>
                            <img
                                className="w-32 h-32 rounded-full bg-black"
                                src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                                alt=""
                            />
                            <span className="text-lg font-thin ml-3">
                                Your Picture
                            </span>
                        </div>
                        <div className="text-base font-thin grid gap-4">
                            <div className="flex flex-wrap gap-9">
                                <div className="grid">
                                    <span>First Name</span>
                                    <input
                                        type="text"
                                        className="w-40 h-7 bg-zinc-50 rounded-lg border border-slate-400"
                                    />
                                </div>
                                <div className="grid">
                                    <span>Last Name</span>
                                    <input
                                        type="text"
                                        className="w-40 h-7 bg-zinc-50 rounded-lg border border-slate-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="grid">
                                    <span>Phone Number</span>
                                    <input
                                        type="text"
                                        className="w-40 h-7 bg-zinc-50 rounded-lg border border-slate-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="grid p-14 ml-60 text-2xl gap-7 font-semibold">
                <div className="grid gap-7">
                    <sub>My Account</sub>
                    <img src="/line.png" alt="" />
                    <div className="text-base font-thin grid gap-2">
                        <span>Email</span>
                        <div className="grid gap-5">
                            <input
                                type="text"
                                className="w-80 h-7 bg-zinc-50 rounded-lg border border-slate-400"
                                placeholder="Email"
                            />
                            <button className="w-48 h-7 bg-white rounded-lg border border-sky-600 text-xs font-semibold grid justify-center items-center">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid p-14 ml-60 text-2xl gap-7 font-semibold">
                <div className="grid gap-7">
                    <sub>Personal Data</sub>
                    <img src="/line.png" alt="" />
                    <div className="flex gap-24">
                        <div className="text-base font-thin grid gap-2">
                            <span>Age</span>
                            <div className="grid gap-5">
                                <input
                                    type="text"
                                    className="w-28 h-7 bg-slate-50 rounded-lg border border-slate-400 "
                                />
                            </div>
                        </div>
                        <div className="text-base font-thin grid gap-2">
                            <span>Gender</span>
                            <div className="grid gap-5">
                                <input
                                    type="text"
                                    className="w-28 h-7 bg-slate-50 rounded-lg border border-slate-400 "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-base font-thin grid gap-2">
                        <span>Sleep Range</span>
                        <div className="grid gap-5">
                            <input
                                type="text"
                                className="w-28 h-7 bg-slate-50 rounded-lg border border-slate-400 "
                            />
                        </div>
                    </div>

                    <button className="w-48 h-7 bg-violet-400 rounded-lg border border-sky-600 text-xs font-semibold grid justify-center items-center text-white">
                        Update Profile
                    </button>
                </div>
            </section>

            <HealthCard healthTitle="Sleep Schedule" healthText="Input the number of hours slept, and save for daily monitoring of your sleep patterns"/>
            <HealthCard healthTitle="Exercise" healthText="Log your exercise duration, and save to monitor your daily exercise regimen."/>
            <MedCard medTitle="Medical Information" medText="Add your Medical Information here, and save to monitor your Conditions."/>



            <section className="grid p-14 ml-60 text-2xl gap-7 font-semibold mb-16">
                <div className="grid gap-7">
                    <sub>Preferences</sub>
                    <img src="/line.png" alt="" />
                    <div className="flex text-base font-thin gap-28">
                        <div className="grid gap-1">
                            <span>Theme</span>
                            <p className="font-thin text-slate-500 text-xs">
                                Customize how Jint looks on your device
                            </p>
                        </div>
                        <div className="ml-96 grid grid-cols-2">
                            <span>Light</span>
                            <div
                                className="cursor-pointer"
                                onClick={toggleTheme}
                            >
                                <img src="/arrow-down.png" alt="" />
                            </div>
                            <ul
                                className={`w-24 h-16 shadow grid items-center rounded-lg absolute mt-8 ${
                                    showTheme ? 'block' : 'hidden'
                                }`}
                            >
                                <li className="ml-2 cursor-pointer">Light</li>
                                <li className="ml-2 cursor-pointer">Dark</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONFIGURATION */}
        </>
    )
}
