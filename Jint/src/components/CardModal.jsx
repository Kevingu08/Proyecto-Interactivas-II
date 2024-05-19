import { PropTypes } from 'prop-types'
import { modalContext } from '../context/modalContext'
import { useContext } from 'react';

export function CardModal() {
    const { isOpen, setIsOpen } = useContext(modalContext);

    return (
        <dialog
            className={`open:flex w-screen min-h-screen justify-center items-center z-50 top-0 bg-black/80 backdrop-blur-sm p-4 sticky`}
            open={isOpen}
            onClick={(e) => {
                if (e.target.tagName !== 'DIALOG') return
                () => setIsOpen(false);
            }}
        >
            <div className="max-w-screen-lg">
                <article className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] bg-white rounded-xl overflow-hidden dark:bg-dark-secondary relative">
                    <div className="grid gap-2 p-6">
                        <h3 className="font-bold text-xl dark:text-white">
                            Laboratorio 2
                        </h3>
                        <div className="flex items-center gap-4">
                            <img
                                className="rounded-full w-20"
                                src="https://unavatar.io/Kevingu08"
                                alt=""
                            />
                            <div>
                                <h4>Kevin Guido</h4>
                                <p className="font-semibold dark:text-white">
                                    Desarrollo de Aplicaciones Interactivas II
                                </p>
                                <p className="text-gray">Grupo 2</p>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsum, id cum quos necessitatibus blanditiis
                            laboriosam similique suscipit corrupti tempora
                            eaque, perspiciatis recusandae eum nulla voluptates
                            iste nobis quo! Officia, vitae.
                        </p>
                        <p className=""><strong>Date:</strong> may 5</p>
                        <p className=""><strong>Hour:</strong> 11:59 pm</p>
                        <p className="font-semibold">Valor: 5%</p>
                        <div className="flex gap-4">
                            <p className="bg-orange-400 rounded-lg p-1">
                                etiqueta
                            </p>
                            <p className="bg-lime-300 rounded-lg p-1">
                                etiqueta
                            </p>
                            <p className="bg-blue-300 rounded-lg p-1">
                                etiqueta
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <label htmlFor="checkTask">Done: </label>
                            <input
                                className="w-6 h-6 checked:bg-red-400"
                                // className="appearance-none w-6 h-6 cursor-pointer bg-white border-2 rounded border-primary outline outline-primary  checked:bg-red-500 checked:before:content-['✓']"
                                type="checkbox"
                                id="checkTask"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center p-6 order-1 sm:order-2">
                        <img
                            className="h-full w-full object-cover rounded-xl"
                            src="/Los-6-mejores-cursos-gratuitos.jpg"
                            alt="#"
                        />
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-primary absolute right-2 top-2 hover:scale-125 transition-transform border-solid border-2 border-primary rounded-full bg-white dark:bg-dark-secondary dark:text-white"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                            />
                        </svg>
                    </button>
                </article>
            </div>
        </dialog>
    )
}

CardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}
