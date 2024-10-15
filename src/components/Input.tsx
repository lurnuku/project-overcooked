import React from 'react'


interface Props {
    placeholder: string
    type: string
    name: string
    label: string
}

const Input: React.FC<Props> = ({
    placeholder,
    type,
    name,
    label,
}) => {
    return (
        <div className='form__group'>
            <input
                className='form__field'
                placeholder={placeholder}
                type={type}
                name={name}
                autoComplete='off'
            />
            <label
                className='form__label'
                htmlFor={name}>
                {label}
            </label>
        </div>
    )
}

export default Input