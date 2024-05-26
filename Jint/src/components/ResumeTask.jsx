import PropTypes from 'prop-types'
import { Tag } from './Tag'

export function ResumeTask({
    img = 'https://unavatar.io/Kevingu08',
    taskName = 'Task name',
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolores debitis perspiciatis non itaque deleniti vero est recusandae iste nesciunt magni, sed, aliquam provident, quibusdam tempora doloremque doloribus quis eius?',
    time = '23:59',
}) {
    return (
        <div className="flex max-w-[55rem] bg-white border border-zinc-400 rounded-2xl w-fit p-4 items-center gap-4 dark:bg-dark-secondary">
            <img className="w-16 h-16 rounded-full" src={img} alt="#" />
            <div className="flex flex-col gap-2">
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex justify-between">
                        <h4 className="font-bold dark:text-white">
                            {taskName}
                        </h4>
                        <span className="font-semibold dark:text-white">
                            {time}
                        </span>
                    </div>
                    <p className="dark:text-white">{description}</p>
                    <p className="dark:text-white"><strong>Curso:</strong> Desarrollo de Aplicaciones Interactivas II</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Tag title={'Curso'} bgColor={'bg-sky-500'} />
                    <Tag title={'Carrera'} bgColor={'bg-lime-500'} />
                </div>
                <div className="flex justify-end items-end">
                    <span className="text-white px-2 bg-primary rounded-xl">
                        Finished
                    </span>
                </div>
            </div>
        </div>
    )
}

ResumeTask.propTypes = {
    img: PropTypes.string,
    taskName: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
}
