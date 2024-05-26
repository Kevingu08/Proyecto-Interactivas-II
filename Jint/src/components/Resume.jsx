import { ResumeTask } from './ResumeTask.jsx'

export function Resume() {
    return (
        <section className="">
            {/* EVENTS OF THE DAY */}
            <section className="flex flex-col gap-4 mt-8">
                <h2 className="font-bold text-xl dark:text-white">
                    Events of the day
                </h2>

                <ResumeTask />
                <ResumeTask />
                <ResumeTask />
            </section>

            {/* EVENTS OF THE WEEK */}
            <section className="flex flex-col gap-4">
                <h2 className="font-bold text-xl mt-5 dark:text-white">
                    Events of the week
                </h2>
                <ResumeTask />
                <ResumeTask />
                <ResumeTask />
            </section>
        </section>
    )
}
