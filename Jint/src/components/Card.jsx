import './index.css'
import PropTypes from 'prop-types'

export function Card({title, date, time, img}){
    return (
        <article className='rounded-xl shadow-main w-fit overflow-hidden dark:bg-dark-secondary'>
            <div >
                <img className='' src={img} alt="#" />
            </div>
            <div className='p-5 grid'>
                <div className='flex relative'>
                    <span className='rounded-full w-3 h-3 bg-red-600 absolute top-1 left-6'></span>
                    <h3 className='m-auto font-bold dark:text-white'>{title}</h3>
                </div>
                <div className='flex justify-between items-end mt-8'>
                    <div>
                        <p className='font-semibold dark:text-white'>{date}</p>
                        <p className='dark:text-white'>{time}</p>
                    </div>
                    <a className='bg-primary rounded-xl py-2 px-6 text-white' href="#">See more</a>
                </div>
            </div>
        </article>

    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: 'Card Title',
    date: 'May 5',
    time: '11:59 pm',
    img: '../../src/assets/imgs/Los-6-mejores-cursos-gratuitos.jpg'
}