import './index.css'

export function Dropdown(){
    return(
        <form className='flex gap-4 items-center' action="">
            <select className="w-96 border border-gray border-opacity-90 px-4 py-2 rounded-md bg-input-bg bg-opacity-50 dark:bg-dark-secondary dark:text-white">
                <option value="all">All</option>
                <option value="task">Task</option>
                <option value="event">Event</option>
            </select>
        </form>
    )
}

