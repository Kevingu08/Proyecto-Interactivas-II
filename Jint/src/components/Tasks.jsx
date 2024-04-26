import './index.css'

import { Task } from "./Task.jsx";

export function Tasks(){
    return(
        <>
        <section>
        {/* EVENTS */}
        <section className='grid grid-rows-2 place-content-around'>
          {/* EVENTS OF THE DAY */}
          <section>
              <h1 className='font-bold text-5xl ml-60 p-14'>Events of the day</h1>
              <div className='grid grid-flow-row absolute gap-6'>
                <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                    <div className='grid grid-cols-2 mt-2'>
                      <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                      <div className='m-5'>
                        <span className='font-semibold'>TaskName</span>
                        <p className='w-96'>Description of the event Description of the event Description of the event Description of the event</p>
                      </div>
                    </div>

                    <div className='grid'>
                      <span className='ml-12'>23:59</span>
                      <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                    </div>
                </div>
                <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                    <div className='grid grid-cols-2 mt-2'>
                      <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                      <div className='m-5'>
                        <span className='font-semibold'>TaskName</span>
                        <p className='w-96'>Description of the event Description of the event Description of the event Description of the event</p>
                      </div>
                    </div>

                    <div className='grid'>
                      <span className='ml-12'>23:59</span>
                      <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                    </div>
                </div>
                <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                    <div className='grid grid-cols-2 mt-2'>
                      <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                      <div className='m-5'>
                        <span className='font-semibold'>TaskName</span>
                        <p className='w-96'>Description of the event Description of the event Description of the event Description of the event</p>
                      </div>
                    </div>

                    <div className='grid'>
                      <span className='ml-12'>23:59</span>
                      <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                    </div>
                </div>
                
                
               
              </div>
            </section>

          {/* EVENTS OF THE WEEK */}
          <section>
              <h1 className='font-bold text-5xl ml-60 p-14'>Events of the week</h1>
              
              <div className='grid gap-6'>
                
              <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                  <div className='grid grid-cols-2 mt-2'>
                    <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                    <div className='m-5'>
                       <span className='font-semibold'>TaskName</span>
                       <p className='w-96'>Description of the event Description of the event</p>
                    </div>
                  </div>

                  <div className='grid'>
                    <span className='ml-12'>23:59</span>
                    <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                  </div>
              </div>

              <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                  <div className='grid grid-cols-2 mt-2'>
                    <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                    <div className='m-5'>
                       <span className='font-semibold'>TaskName</span>
                       <p className='w-96'>Description of the event Description of the event</p>
                    </div>
                  </div>

                  <div className='grid'>
                    <span className='ml-12'>23:59</span>
                    <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                  </div>
              </div>

              <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                  <div className='grid grid-cols-2 mt-2'>
                    <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                    <div className='m-5'>
                       <span className='font-semibold'>TaskName</span>
                       <p className='w-96'>Description of the event Description of the event</p>
                    </div>
                  </div>

                  <div className='grid'>
                    <span className='ml-12'>23:59</span>
                    <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                  </div>
              </div>

              <div className='flex place-content-around gap-96 bg-white w-2/5 h-36  shadow-md ml-72 rounded-2xl p-3'>
                  <div className='grid grid-cols-2 mt-2'>
                    <img className="w-16 rounded-full m-4"src="https://unavatar.io/Kevingu08" alt="" />
                    <div className='m-5'>
                       <span className='font-semibold'>TaskName</span>
                       <p className='w-96'>Description of the event Description of the event</p>
                    </div>
                  </div>

                  <div className='grid'>
                    <span className='ml-12'>23:59</span>
                    <img className='mt-9' src="../../src/assets/imgs/finished.png" alt="" />
                  </div>
              </div>
              </div>
          </section>
        </section>
 
        </section>  
        </>
    )
}