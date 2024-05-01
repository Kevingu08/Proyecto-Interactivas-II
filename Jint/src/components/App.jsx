import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Sidebar } from "./Sidebar.jsx";
import { Tasks } from "./Tasks.jsx";
import { Card } from "./Card.jsx";
import { WelcomeCard } from "./WelcomeCard.jsx";
import { HorizontalCard } from "./HorizontalCard.jsx";
import { Slider } from "./Slider.jsx";
import { Calendar } from "./Calendar.jsx";
import { Search } from "./Search.jsx";
import { Filter } from "./Filter.jsx";
import { Login } from "./Login.jsx";
import { SingUp } from "./SingUp.jsx";
import { Welcome } from "./Welcome.jsx";


function App() {
    return (
        <>
            {/* <Login/> */}
            <Welcome/>
            {/* <SingUp/> */}

            {/* <Sidebar /> */}
            {/* LandingPage */}
            {/* <section className="grid grid-cols-1 lg:grid-cols-4  xl:ml-[15rem] px-4 gap-6">
                <div className="grid col-span-3 mt-5 lg:col-span-4 xl:col-span-3">
                    <WelcomeCard />
                    <h2 className="font-bold text-xl mt-5">My task Today</h2>

                    <div className="w-full mt-5 overflow-hidden">
                        <Slider />
                    </div> 
                    
                    <h2 className="font-bold text-xl mt-5">My Courses</h2>
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] mt-5 gap-8">
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                        <HorizontalCard />
                    </div>
                </div>

                <div className="flex flex-col mt-5 gap-4 col-span-4 xl:col-auto">
                    <section className="grid gap-5">
                        <div className="shadow-main rounded-xl grid gap-4 p-4">
                            <h3 className="font-bold text-lg">Pendings of the week</h3>
                            <p className="font-bold">Task: <span className="text-primary ml-4 text-xl">7</span></p>
                            <p className="font-bold">Event: <span className="text-primary ml-4 text-xl">2</span></p>
                        </div>
                        <div className="shadow-main rounded-xl grid gap-4 p-4">
                            <h3 className="font-bold text-lg">Week's tasks completed</h3>
                            <p className="font-bold">Task: <span className="text-primary ml-4 text-xl">3</span></p>
                            <p className="font-bold">Event: <span className="text-primary ml-4 text-xl">0</span></p>
                        </div>
                    </section>
                    <Calendar/>
                </div>
            </section> */}

            {/* TaskPage */}
            {/* <section className="md:ml-[15rem] p-4">
                <h2 className="font-bold text-xl">My Tasks</h2>
                <div className="flex flex-col sm:flex-row gap-4  mt-5">
                    <Search/>
                    <Filter/>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 mt-5">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Card key={i} />
                    ))}
                </div>
            </section> */}
            
            {/* <Tasks/> */}
        </>
    );
}

export default App;
