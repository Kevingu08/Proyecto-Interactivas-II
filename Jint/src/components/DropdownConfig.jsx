import { PropTypes } from 'prop-types'

export function DropdownConfig({ options, onChangeFunction, selectedValue, name, inputId }) {
    return (
        <div className="flex gap-4 items-center font">
            <select
                onChange={onChangeFunction}
                value={selectedValue}
                name={name}
                id={inputId}
                className="w-full border border-gray border-opacity-90 px-4 py-2 rounded-md bg-input-bg bg-opacity-50 dark:bg-dark-secondary dark:text-white xl:w-96"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

DropdownConfig.propTypes = {
    // options: PropTypes.array,
    // onChangeFunction: PropTypes.func,
    // name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChangeFunction: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
}
