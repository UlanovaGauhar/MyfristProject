import React from "react"

const Form = ({ labelTitle, type = 'text', id, onChange, value}) => {
    return (
        <div>
            <label htmlFor={id}>{labelTitle}</label>
            <input value={value} type={type} id={id} onChange={onChange} />
        </div>
    )
}
export default Form