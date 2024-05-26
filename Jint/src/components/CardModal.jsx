import { modalContext } from '../context/modalContext'
import { useContext } from 'react'
import { ExitIcon } from './Icons/ExitIcon'
import { Tag } from './Tag'

export function CardModal() {
    const { isOpen, setIsOpen } = useContext(modalContext)

    return (
        <dialog
            className={`open:flex w-screen min-h-screen justify-center items-center z-50 top-0 bg-black/80 backdrop-blur-sm p-4 fixed`}
            open={isOpen}
            onClick={(e) => {
                console.log(e.target.tagName)
                if (e.target.tagName !== 'DIALOG') return
                setIsOpen(false)
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
                                <h4 className="dark:text-white">Kevin Guido</h4>
                                <p className="font-semibold dark:text-white">
                                    Desarrollo de Aplicaciones Interactivas II
                                </p>
                                <p className="text-gray">Grupo 2</p>
                            </div>
                        </div>
                        <p className="dark:text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsum, id cum quos necessitatibus blanditiis
                            laboriosam similique suscipit corrupti tempora
                            eaque, perspiciatis recusandae eum nulla voluptates
                            iste nobis quo! Officia, vitae.
                        </p>
                        <p className="dark:text-white">
                            <strong>Date:</strong> may 5
                        </p>
                        <p className="dark:text-white">
                            <strong>Hour:</strong> 11:59 pm
                        </p>
                        <p className="font-semibold dark:text-white">
                            Valor: 5%
                        </p>
                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))] gap-2">
                            <Tag title={'Curso'} bgColor={'bg-sky-500'}/>
                            <Tag title={'Carrera'} bgColor={'bg-lime-500'}/>
                            <Tag title={'Evento'} bgColor={'bg-orange-500'}/>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <label
                                className="dark:text-white"
                                htmlFor="checkTask"
                            >
                                Done:{' '}
                            </label>
                            <input
                                className="w-6 h-6 dark:bg-dark-secondary"
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
                        <ExitIcon />
                    </button>
                </article>
            </div>
        </dialog>
    )
}
