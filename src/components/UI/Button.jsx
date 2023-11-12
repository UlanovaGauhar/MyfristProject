import React from "react";

const Button = ({ title, onClick, children,className}) => {
    return (
        <div>
            <button   
            className={className}
            onClick={onClick}>
                {title}
            {children}
            </button>
            </div>
    )
};

export default Button