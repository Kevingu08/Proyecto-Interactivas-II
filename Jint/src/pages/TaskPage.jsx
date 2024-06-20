import { Card } from '../components/Card'
import { Filter } from '../components/Filter'
import { Search } from '../components/Search'
import { useFetchEvents } from '../hooks/useFetchEvents'
import { useFetchCategories } from '../hooks/useFetchCategories' 
import { useFetchTags } from '../hooks/useFetchTags'
import { SearchIcon } from '../components/Icons/SearchIcon'

export function TaskPage() {
    const { categories, isLoadingCategories } = useFetchCategories();
    const { data, isLoading } = useFetchEvents();
    const { tags, isLoadingTags } = useFetchTags(); 
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    console.log(isLoadingCategories)
    console.log('data:'  + data)
    console.log('categories:' + categories)

    const createTask = (items) => {
        return items.map((item) => <Card
            key={item.id} 
            id={item.id} 
            title={item.name}
            date={item.scheduled_at}
            img={item.image}
            time={item.time}
            />
        )
    }

    const createFilter = (data, title, name) => {
        if (data && data.length > 0) {
            return <Filter title={title} data={data} name={name}/>;
        } else {
            return console.log('no'); 
        }
    }

 
    return (
        <section className="xl:ml-[15rem] p-4">
            <h2 className="font-bold text-xl dark:text-white">My Tasks</h2>
            <form method='POST' action='http://jint_backend.test/api/search/event' className="flex flex-col sm:flex-row gap-4  mt-5">
                <Search />
                {isLoadingCategories ? <p>Loading...</p> : createFilter(categories, 'Category: ', 'category')}
                {isLoadingTags ? <p>Loading...</p> : createFilter(tags, 'Tag: ', 'tag')}
                <button type='submit' ><SearchIcon/></button>
            </form>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5 mt-5 mb-8">
                {isLoading ? <p>Loading...</p> : createTask(data)}
            </div>
        </section>
    )
}
