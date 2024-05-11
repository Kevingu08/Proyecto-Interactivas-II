export function Filter() {
    return (
        <form className="flex gap-4 items-center" action="">
            <p className="font-semibold dark:text-white">Filter By:</p>
            <select className="shadow-main px-4 py-2 rounded-md dark:bg-dark-secondary dark:text-white">
                <option value="all">All</option>
                <option value="task">Task</option>
                <option value="event">Event</option>
            </select>
        </form>
    )
}
