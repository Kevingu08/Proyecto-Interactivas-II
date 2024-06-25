export function HealthCard({ healthTitle, healthText, name, inputId }) {
    return (
        <>
            <section className="grid text-2xl gap-7 font-semibold">
                <div className="grid gap-7">
                    <sub>{healthTitle}</sub>
                    <img src="/line.png" alt="" />
                    <div className="flex gap-24">
                        <div className="text-base grid gap-2">
                            <p className="text-slate-500 text-xs mb-3 dark:text-white">
                                {healthText}
                            </p>
                            <div className="grid gap-5">
                                <select className="w-28 h-7 bg-slate-50 rounded-lg border border-slate-400 dark:bg-dark-secondary">
                                    name={name}
                                    id={inputId}
                                    <option value="" disabled selected>
                                        Pick time
                                    </option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} hours
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
