import { Calendar } from './Calendar';
import Dropdown from './Dropdown';
import './index.css'
import './Sidebar'
import { Sidebar } from './Sidebar';

export function AdminView() {
    return (
        <>
        <div>
        <Sidebar />
        </div>
            <div className='h-screen flex flex-row justify-center items-center gap-9 '>
                <div className='container rounded-2xl m-12 w-[910px] text-justify '>
                    <Calendar />
                </div>
                <div className='container m-6 rounded-2xl max-w-[600px] h-[1000px] shadow-2xl flex flex-col items-center justify-center pt-6 p-auto '>
                    <h1 className='font-semibold text-balck text-4xl'>ASSIGN NEW TASK</h1>
                    <div>
                        <div class="container m-3 grid grid-cols-2 gap-8 mt-16">
                            <div className='flex flex-col items-center justify-center'>
                                <h2 class="text-3xl font-bold">Specifications</h2>
                                <div className='flex flex-col justify-center items-center font- text-3xl gap-5 mt-3'>
                                <Dropdown name="Group" options={['Option 1', 'Option 2', 'Option 3']} fontSize="text-xl"/>
                                <Dropdown name="Course" options={['Option 1', 'Option 2', 'Option 3']} fontSize="text-xl"/>
                                <Dropdown name="Filter" options={['Option 1', 'Option 2', 'Option 3']} fontSize="text-xl"/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center  justify-center'>
                                <h2 class="text-3xl font-bold">Date</h2>
                                <div className='container m-auto flex flex-col justify-center  items-center font- text-3xl gap-5 mt-3'>
                                <Dropdown name="Hour" options={['Option 1', 'Option 2', 'Option 3','5']} fontSize="text-xl"/>
                                <Dropdown name="Day" options={['Option 1', 'Option 2', 'Option 3']} fontSize="text-xl"/>
                                <Dropdown name="Month" options={['Option 1', 'Option 2', 'Option 3']} fontSize="text-xl"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='container rounded-2xl max-w-[500px] min-w-2 max-h-96 min-h-[300px] shadow-2xl text-justify p-4 m-12'>
                        <h2 className='text-sm font-regular text-gray'>Add a description:</h2>
                    </div>
                </div>
            </div>
        </>
    )
}