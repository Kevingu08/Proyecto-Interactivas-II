import '../../index.css'

export function TaskCard({}){
    return(
        <>
   <div className="flex mb-6 h-32 bg-slate-400 rounded-lg shadow-md w-3/4">
       <img className="w-24 h-24 rounded-full m-4" src="https://unavatar.io/Kevingu08" alt="" />
       <div className='flex  w-full p-4'>
          <div>
             <span className='font-semibold'>TaskName</span>
             <p>Description of the event Description of the event Description of the event Description of the event</p>
          </div>
          <div className='grid'>
            <span className=' ml-8'>23:59</span>
            <img className='mt-9 w-36' src="../../src/assets/imgs/finished.png" alt="" />
       </div>
       </div>
   </div>

        </>
    )
}