import './index.css'

export function Task({image, title, description, time, status}){
    return(
        <div className='grid grid-cols-2 gap-96 bg-white w-2/5 h-32  shadow-md ml-96 rounded-2xl p-3'>
            <div className='grid grid-cols-2 mt-2'>
                <img className="w-16 rounded-full m-4" src={`${image}`} alt="" />
                    <div className='m-5'>
                        <span className='font-semibold'>{title}</span>
                        <p className='w-96'>{description}</p>
                    </div>
            </div>
            <div className='grid ml-44'>
                 <span className='ml-12'>{time}</span>
                 <img className='mt-9' src={`${status}`} alt="" />
            </div>
        </div>
    )
}