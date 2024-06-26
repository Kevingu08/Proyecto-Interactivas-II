import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox({ options, onChangeFunction, selectedValues, name }) {
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            // Agregar el valor a la lista de opciones seleccionadas
            onChangeFunction([...selectedValues, value]);
        } else {
            // Remover el valor de la lista de opciones seleccionadas
            onChangeFunction(selectedValues.filter((val) => val !== value));
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {options.map((option) => (
                <div key={option.value} className="flex items-center">
                    <input
                        type="checkbox"
                        id={`${name}-${option.value}`}
                        name={name}
                        value={option.value}
                        checked={selectedValues.includes(option.value)}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
                </div>
            ))}
        </div>
    );
}

Checkbox.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChangeFunction: PropTypes.func.isRequired,
    selectedValues: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};

export default Checkbox;
