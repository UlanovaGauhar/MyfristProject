import React from "react";

const Button = ({ title, onClick, children, className}) => {
    return (
        <div className="button1">
            <button  className=' button2'  onClick={onClick}>{title}
            {children}</button></div>
    )
};

export default Button