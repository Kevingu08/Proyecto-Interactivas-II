import { Calendar } from './Calendar';
import { Dropdown } from './Dropdown';
import svgImage from "../assets/imgs/elipse.svg";
import './index.css'

export function AdminView() {
    return (
        <>
            <section className=' grid grid-cols-2 sm:grid-cols-2  xl:ml-[15rem] gap-2  dark:bg-dark-primary dark:text-white'>
                <div className='m-12'>
                    <h1 className='text-4xl font-medium'>ASSAIGN NEW TASK</h1>
                    <div >
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mr-80 mb-4 '>Description</h2>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Title</h1>
                                <input type="text" class="w-80 py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md  dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Description</h1>
                                <input type="text" class="w-80 py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md  dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mr-80 mb-4 '>Specifications</h2>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Group</h1>
                                <input type="text" class="w-80 py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white " placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Course</h1>
                                <input type="text" class="w-80 py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md  dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Filter</h1>
                                <input type="text" class="w-80 py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md  dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mr-80 mb-4 '>Date</h2>
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Day</h1>
                                <div>
                                    <Dropdown />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Month</h1>
                                <div>
                                    <Dropdown />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Hour</h1>
                                <div>
                                    <Dropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-24'>
                    <Calendar />
                </div>

            </section>

        </>
    )
}