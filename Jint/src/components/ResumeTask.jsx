import PropTypes from 'prop-types'

export function ResumeTask({
    img = 'https://unavatar.io/Kevingu08',
    taskName = 'Task name',
    description = 'Description of the event Description of the event Description of the event Description of the event',
    time = '23:59',
    state = '/finished.png',
}) {
    return (
        <div className="taskResume flex gap-96 bg-white shadow-md rounded-2xl p-3 mt-4 ">
            <div className="flex mt-5">
                <img className="w-16 h-16 rounded-full mt-8" src={img} alt="" />
                <div className="m-5 flex gap-28">
                    <div>
                        <span className="font-semibold w-14">{taskName}</span>
                        <p className="w-80 descriptionResume">{description}</p>
                    </div>
                    <div className="grid">
                        <span className="ml-12 timeResume">{time}</span>
                        <img
                            className="mt-9 buttonFinished"
                            src={state}
                            alt=""
                        />
                    </div>
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
    state: PropTypes.string,
}
