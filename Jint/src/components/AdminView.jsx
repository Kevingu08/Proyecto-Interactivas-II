import { Calendar } from './Calendar';
import { Dropdown } from './Dropdown';


//responsive prueba

export function AdminView() {
    return (
            <section className='grid xl:grid-cols-2 xl:ml-[15rem] sm:p-10 sm:grid-cols-1  gap-2 dark:bg-dark-primary dark:text-white'>
                <div className='m-4 sm:m-12'>
                    <h1 className='text-4xl font-medium'>ASSIGN NEW TASK</h1>
                    <div>
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4'>Description</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4'>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Title</h1>
                                <input type="text" className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Description</h1>
                                <input type="text" className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4'>Specifications</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4'>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Group</h1>
                                <input type="text" className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Course</h1>
                                <input type="text" className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium m-4'>Filter</h1>
                                <input type="text" className="w-full py-3 px-3 border bg-input-bg bg-opacity-50 border-black border-opacity-25 rounded-md dark:bg-white" placeholder="Escribe aquí..." />
                            </div>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <h2 className='text-xl font-bold mt-10 border-b border-gray border-opacity-90 pb-3 mb-4'>Date</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4'>
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
                <div className='p-4 sm:p-24'>
                    <Calendar />
                </div>

            </section>

    )
}