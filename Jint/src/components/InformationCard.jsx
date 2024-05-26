import { PropTypes } from 'prop-types';

export function InformationCard({title, taskCompleted, eventCompleted}) {
    return (
        <div className="shadow-main rounded-xl grid gap-4 p-4 dark:bg-dark-secondary dark:text-white">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-bold">
                Task: <span className="text-primary ml-4 text-xl">{taskCompleted}</span>
            </p>
            <p className="font-bold">
                Event: <span className="text-primary ml-4 text-xl">{eventCompleted}</span>
            </p>
        </div>
    )
}

InformationCard.propTypes = {
    title: PropTypes.string.isRequired,
    taskCompleted: PropTypes.number.isRequired,
    eventCompleted: PropTypes.number.isRequired,
}
