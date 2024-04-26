import "./index.css";
import "cally";

export function Calendar() {
    return (
        <div className="p-4 shadow-main rounded-xl h-fit">
            <calendar-range months="1">
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-black bg-white"    
                    aria-label="Previous"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m15 19-7-7 7-7"
                    />
                </svg>
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-black bg-white"
                    aria-hidden="true"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 5 7 7-7 7"
                    />
                </svg>
                <div>
                    <calendar-month ></calendar-month>
                    {/* <calendar-month offset="1"></calendar-month> */}
                </div>
            </calendar-range>
        </div>
    );
}