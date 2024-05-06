import { Calendar } from './Calendar';
import Dropdown from './Dropdown';
import './index.css'
import './Sidebar'
import { Sidebar } from './Sidebar';

export function AdminView() {
    return (
        <>
            <Sidebar />
            <div className='h-screen flex flex-row justify-center items-center gap-9 '>
                <div className='container rounded-2xl m-12 w-[910px] text-justify '>
                    <Calendar />
                </div>
                <div className='container m-6 rounded-2xl max-w-[600px] h-[1000px] shadow-2xl flex flex-col items-center justify-center pt-6 p-auto '>
                    <h1 className='font-semibold text-balck text-4xl'>ASSIGN NEW TASK</h1>
                    <div>
                        <div class="container m-3 grid grid-cols-2 gap-10 mt-16">
                            <div className='flex flex-col items-center justify-center'>
                                <h2 class="text-3xl font-bold">Specifications</h2>
                                <div className='flex flex-col justify-center items-center font- text-3xl gap-5 mt-3'>
                                <Dropdown name="Group" options={['Option 1', 'Option 2', 'Option 3']} />
                                <Dropdown name="Course" options={['Option 1', 'Option 2', 'Option 3']} />
                                <Dropdown name="Filter" options={['Option 1', 'Option 2', 'Option 3']} />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h2 class="text-3xl font-bold">Date</h2>
                                <div className='flex flex-col justify-center items-center font- text-3xl gap-5 mt-3'>
                                <Dropdown name="Hour" options={['Option 1', 'Option 2', 'Option 3']} />
                                <Dropdown name="Day" options={['Option 1', 'Option 2', 'Option 3']} />
                                <Dropdown name="Month" options={['Option 1', 'Option 2', 'Option 3']} />
                                </div>
                                
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