import React from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
    return (
        <fieldset>
            <legend className="text-xl font-bold">{name}</legend>
            <div className="inline-flex items-center flex-wrap">
                {
                    values.map(value => {
                        const id = `option-${name}-${value}`
                        const checked = selectedOptions[name] === value
                        return (
                            <label key={id} htmlFor={id} >
                                <input
                                    className='sr-only'
                                    type="radio" id={id}
                                    name={`option-${name}`}
                                    value={value}
                                    checked={checked}
                                    onChange={() => {
                                        setOptions(name, value)
                                    }}
                                />
                                <div className={checked ?
                                    "p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 text-white bg-gray-900"
                                    : "p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 text-gray-900 bg-gray-300"}>
                                    <span className='px-2'>{value}</span>
                                </div>
                            </label>
                        )
                    })}
            </div>
        </fieldset>
    )
}
