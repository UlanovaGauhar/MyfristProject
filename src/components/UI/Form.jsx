import React from "react"

const Form = ({ labelTitle, type = 'text', id, onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{labelTitle}</label>
            <input type={type} id={id} onChange={onChange} />
        </div>
    )
}
export default Form