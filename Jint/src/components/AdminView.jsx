import './index.css'
import './Sidebar'
import { Calendar } from "./Calendar.jsx";
import { Sidebar } from './Sidebar';

export function AdminView() {
    return (
        <>
            <Sidebar />
            <div className='h-screen flex flex-row justify-center items-center gap-6 '>
                <div className='rounded-2xl m-12 w-[910px] h-96 text-justify '>
                    <Calendar />
                </div>
                <div className='container m-6 rounded-2xl max-w-[600px] h-auto shadow-2xl flex flex-col items-center justify-center pt-6 p-auto '>
                    <h1 className='font-semibold text-balck text-xl'>ASSIGN NEW TASK</h1>
                    <div>
                        <div class="container m-3 grid grid-cols-2 gap-10 mt-16">
                            <div className='flex flex-col items-center justify-center'>
                                <h2 class="text-xl font-bold">Specifications</h2>
                                <div class="bg-gray-200 p-4">Slider 1</div>
                                <div class="bg-gray-200 p-4">Slider 2</div>
                                <div class="bg-gray-200 p-4">Slider 3</div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h2 class="text-xl font-bold">Date</h2>
                                <div class="bg-gray-200 p-4">Slider 1</div>
                                <div class="bg-gray-200 p-4">Slider 2</div>
                                <div class="bg-gray-200 p-4">Slider 3</div>
                            </div>
                        </div>
                    </div>
                    <div className='container rounded-2xl max-w-[400px] min-w-2 max-h-96 min-h-[200px] shadow-2xl text-justify p-4 m-16'>
                        <h2 className='text-sm font-regular text-gray'>Add a description:</h2>
                    </div>
                </div>
            </div>
        </>





    )
}