import './index.css'

export function HorizontalCard(){
    return(
        <a href="#">
            <article className='rounded-xl overflow-hidden shadow-main w-fit grid'>
            <img className='object-cover aspect-[5/2]' src="../../src/assets/imgs/Los-6-mejores-cursos-gratuitos.jpg" alt="" />
            <div className='p-4'>
                <h3 className='font-bold w-[25ch] text-center m-auto'>I - S - 2024 - PPU - Desarrollo de Aplicaciones Interactivas II - 001 002</h3>
            </div>
        </article>
        </a>
    )
}