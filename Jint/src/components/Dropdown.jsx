import './index.css';
import React, { useState } from 'react';

const Dropdown = ({ name, options, fontSize }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="shadow-2xl hover:bg-gray hover:bg-opacity-10 text-gray font-light py-2 px-4 rounded focus:outline-none"
            >
                {name}
            </button>
            {isOpen && (
                <div className="flex flex-col justify-center items-center  right-0 mt-2 w-48 rounded-lg shadow-xl">
                    <ul className='container bg-opacity-100 flex flex-col justify-center items-center'>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`py-2 bg-opacity-100 hover:bg-gray-200 ${fontSize}`}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;