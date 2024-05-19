import { useState } from 'react'
import PropTypes from 'prop-types' 

export function Notification({
    title = 'Notification',
    description = 'This is the description of the notification This is the description of the notification ',
    time = '12:30PM',
    img = 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png',
    day = 'Fri',
}) {
    const [showFullDescription, setShowFullDescription] = useState(false)

    // const toggleDescription = () => {
    //     setShowFullDescription(!showFullDescription);
    // };

    return (
        <a
            href="#"
            className="bg-white dark:bg-dark-secondary border-2 border-zinc-100 dark:border-zinc-600 shadow h-28 p-2 mb-6 ml-4 mr-4 bg-gray-200 rounded-3xl"
        >
            <div className="flex gap-6 overflow-x-hidden">
                <div>
                    <img
                        className="w-16 h-14 rounded-full flex mt-4 border border-zinc-600 dark:text-white"
                        src={img}
                        alt=""
                    />
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-28 mt-2">
                        <strong className="font-bold dark:text-white" href="#">
                            {title}
                        </strong>
                        <div className="flex gap-1">
                            <span className="text-end text-xs dark:text-white">
                                {day}
                            </span>
                            <span className="text-end text-xs dark:text-white">
                                {time}
                            </span>
                        </div>
                    </div>
                    <p className="w-44 opacity-60 dark:text-white"></p>
                    {showFullDescription
                        ? description
                        : `${description.slice(0, 40)}...`}
                </div>
            </div>
        </a>
    )
}

Notification.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
    day: PropTypes.string,
}

