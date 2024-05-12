import { StatisticsCard } from '../components/StatisticsCard.jsx'

export function StatisticsPage() {
    return (
        <div className="md:ml-[15rem] p-4">
            <section>
                <h2 className="font-bold text-xl dark:text-white">
                    Statistics
                </h2>
                <div className="flex flex-col gap-4 mt-5">
                    <StatisticsCard />
                    <StatisticsCard />
                    <StatisticsCard />
                </div>
            </section>
        </div>
    )
}
