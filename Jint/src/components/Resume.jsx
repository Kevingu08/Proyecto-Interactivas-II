import { ResumeTask } from './ResumeTask.jsx'

export function Resume() {
    return (
        <section className="tasksResume">
            {/* EVENTS */}
            <section className="flex flex-col flex-wrap">
                {/* EVENTS OF THE DAY */}
                <section>
                    <h1 className="font-bold text-3xl mt-11">
                        Events of the day
                    </h1>

                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                </section>

                {/* EVENTS OF THE WEEK */}
                <section className="mb-8">
                    <h1 className="font-bold text-3xl mt-20 mb-8">
                        Events of the week
                    </h1>
                    <ResumeTask />
                    <ResumeTask />
                    <ResumeTask />
                </section>
            </section>
        </section>
    )
}
