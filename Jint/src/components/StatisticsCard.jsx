import { Gauge } from '@mui/x-charts/Gauge'

export function StatisticsCard() {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] p-4 shadow-main rounded-xl w-fit dark:bg-dark-secondary dark:text-white">
            <img
                className="w-[50rem] aspect-video"
                src="/Los-6-mejores-cursos-gratuitos.jpg"
                alt=""
            />
            <div className="flex flex-col justify-between p-4 text-center gap-4">
                <h3 className="text-center font-bold">
                    I-S-2024-PPU- Lectura en Inglés para Informática -001
                </h3>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4 items-end">
                    <div className="grid justify-center items-center">
                        <Gauge height={100} value={50} />
                        <p>Percentage of course evaluated</p>
                    </div>
                    <div className="grid justify-center">
                        <h4 className="m-auto text-primary font-bold text-xl">
                            50%
                        </h4>
                        <p>Percentage of course obtained</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
