import React from 'react';

export function Dropdown({ options }) {
    return (
        <form className="flex gap-4 items-center" >
            <select className="w-96 border border-gray border-opacity-90 px-4 py-2 rounded-md bg-input-bg bg-opacity-50 dark:bg-dark-secondary dark:text-white">
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </form>
    );
}
