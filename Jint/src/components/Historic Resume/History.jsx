import '../index.css'
import { TaskCard } from './Resourses/TaskCard'

export function Historic(){
    return(
        <>
        <div className=" px-4 py-8 ml-56 bg-slate-600 w-2/4">
            <h1 className='font-bold text-4xl mb-12'>Historic</h1>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            
        </div>
        </>
    )
}