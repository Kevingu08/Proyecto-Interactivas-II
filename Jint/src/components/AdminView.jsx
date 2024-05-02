import './index.css'
import './Sidebar'

export function AdminView() {
    return (
        <div className='h-screen bg-white m-auto border'>
            <div className='container  rounded-2xl max-w-[600px] h-auto shadow-lg flex flex-col items-center justify-center pt-14'>
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
                <div className='container rounded-2xl w-[500px] h-[200px] shadow-2xl text-justify p-4 m-16'>
                    <h2 className=''>Add a description:</h2>
                </div>
            </div>
        </div>

    )
}