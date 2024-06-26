import { ResumeTask } from './ResumeTask.jsx'
import { useFetchEventsWeek } from './../hooks/useFetchEventsWeek';
import { differenceInDays, parse, parseISO } from 'date-fns'

export function Resume() {
    const { eventsWeek, isLoadingEventsWeek } = useFetchEventsWeek();
    const todayISO = new Date().toISOString().slice(0, 10);
    const todayDate = parseISO(todayISO);
    console.log(eventsWeek);

    const renderEventsWeekCompleted = (eventsWeek) => {
        if (isLoadingEventsWeek) {
            return <h1>Loading...</h1>
        } else {
            return eventsWeek.map((event) => {
                if (event.state_id === 1)
                return <ResumeTask key={event.id} taskName={event.name} description={event.description} course={event.courses[0].name} category={event.category} tag={event.tag}/>
            })
        }
    }

    const renderEventstodayCompleted = (eventsToday) => {
        if (isLoadingEventsWeek) {
            return <h1>Loading...</h1>
        } else {
            
            return eventsToday.map((event) => {
                const daysDifference = differenceInDays(parse(event.scheduled_at, 'dd-MM-yyyy', new Date()), todayDate);
                if (event.state_id === 1 && daysDifference === 0)
                return <ResumeTask key={event.id} taskName={event.name} description={event.description} course={event.courses[0].name} category={event.category} tag={event.tag}/>
            })
        }
    }

    return (
        <section className="grid gap-8">
            {/* EVENTS OF THE DAY */}
            <section className="flex flex-col gap-4 mt-8">
                <h2 className="font-bold text-xl dark:text-white">
                    Completed Today
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-6">
                    {isLoadingEventsWeek ? <h1>Loading...</h1> : renderEventstodayCompleted(eventsWeek.events)}
                </div>
            </section>

            {/* EVENTS OF THE WEEK */}
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl mt-5 dark:text-white">
                    Completed this week
                </h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-6">
                    {isLoadingEventsWeek ? <h1>Loading...</h1> : renderEventsWeekCompleted(eventsWeek.events)}
                </div>
            </section>
        </section>
    )
}
