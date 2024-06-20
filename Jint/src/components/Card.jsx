import PropTypes from 'prop-types'
import { useContext } from 'react'
import { modalContext } from '../context/modalContext'
import { NavLink } from 'react-router-dom'
import { WarningTag } from './WarningTag'


export function Card({
    id,
    title = 'Laboratorio 2',
    date = 'May 5',
    time = '11:59 pm',
    img = '/Los-6-mejores-cursos-gratuitos.jpg',
}) {
    const { setIsOpen } = useContext(modalContext)
    const taskID = id
    const { setTaskId, taskId } = useContext(modalContext)

    function openModal() {
        setTaskId(taskID)
        setIsOpen(true)
    }

    return (
        <>
            <article className="rounded-xl border border-zinc-400 overflow-hidden dark:bg-dark-secondary">
                <div className='relative'>
                    <img className="aspect-video" src={img} alt="#" />
                    <WarningTag text="Mid" />
                </div>
                <div className="p-5 flex flex-col">
                    <div>
                        <div className="flex relative">
                            <h3 className="text-center m-auto font-bold text-lg dark:text-white">
                                {title}
                            </h3>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                            <div>
                                <p className="text-zinc-700 dark:text-white/70">Date: {date}</p>
                                <p className="text-zinc-700 dark:text-white/70">Hour: {time}</p>
                            </div>
                        </div>
                    </div>
                    <NavLink
                        className="bg-primary rounded-xl py-2 px-6 text-white text-center mt-4 hover:bg-purple-600"
                        href=""
                        onClick={() => openModal()}
                        state={taskID}
                    >
                        See more
                    </NavLink>
                </div>
            </article>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    img: PropTypes.string,
}
