import PropTypes from 'prop-types'
import { Tag } from './Tag'

export function ResumeTask({
    img = '/Los-6-mejores-cursos-gratuitos.jpg',
    taskName = 'Task name',
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolores debitis perspiciatis non itaque deleniti vero est recusandae iste nesciunt magni, sed, aliquam provident, quibusdam tempora doloremque doloribus quis eius?',
    time = '23:59',
    course,
    category,
    tag,
}) {
    return (
        <div className="flex  bg-white border border-zinc-400 rounded-2xl w-full p-4 gap-4 dark:bg-dark-secondary md:flex-row">
            {/* <div>
            <img className="max-w-[20rem] aspect-video cover h-full" src={img} alt="#" />
            </div> */}
            <div className="flex flex-col gap-2 w-full justify-between">
                <div>
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
                        {course ? (
                            <p className="dark:text-white">
                                <strong>Course:</strong> {course}
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <Tag title={category} bgColor={'bg-lime-500'} />
                        <Tag title={tag} bgColor={'bg-sky-500'} />
                    </div>
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
