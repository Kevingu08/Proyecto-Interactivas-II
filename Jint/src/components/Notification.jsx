import "./index.css";


export function Notification({title, description, time, img, day}){
    return(
        <a href="#" className='border-2 border-zinc-100 dark:border-zinc-600 shadow h-28 p-2  mb-6 ml-4 mr-4 bg-{rgb(252, 251, 251)} rounded-3xl'>
            <div className="flex gap-6">
                <div>
                    <img className="w-16 h-14 rounded-full flex mt-4 border border-zinc-600 dark:text-white" src={img} alt="" />
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-28">
                        <a className="font-bold dark:text-white" href="#">{title}</a>
                        <div className="flex gap-1">
                            <span className="text-end text-xs dark:text-white">{day}</span>
                            <span className="text-end text-xs dark:text-white">{time}</span>
                        </div>
                    </div>
                    <p className="max-w-44 opacity-60 dark:text-white">{description}</p>
                </div>
                
            </div>

        </a>
    )

}

Notification.defaultProps = {
    title: 'Notification',
    description: 'This is the description of the task This is the description of the task',
    day: 'Fri',
    time: '12:30PM',
    img: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png'
}