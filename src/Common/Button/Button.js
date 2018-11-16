import React from "react";
import "../../theme.scss";

const Button = ({disabled=false, border=true, inverse=false, children}) => (
    <div className={`button ${disabled && "button-disabled"} ${!border && "button-borderless"} ${inverse && "button-inverse"}`}>
        {children}
    </div>
);

export default Button;