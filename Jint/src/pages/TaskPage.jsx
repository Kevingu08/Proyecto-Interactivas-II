import { Card } from '../components/Card'
import { Filter } from '../components/Filter'
import { Search } from '../components/Search'

export function TaskPage() {
    return (
        <section className="xl:ml-[15rem] p-4">
            <h2 className="font-bold text-xl dark:text-white">My Tasks</h2>
            <div className="flex flex-col sm:flex-row gap-4  mt-5">
                <Search />
                <Filter />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 mt-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i} />
                ))}
            </div>
        </section>
    )
}
