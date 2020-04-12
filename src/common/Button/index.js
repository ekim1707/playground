import React from "react";
import Icon from "../Icon";

const Button = ({ 
  onClick, 
  className, 
  buttonText, 
  isIcon, 
  iconName, 
  disabled
}) => {
  return !isIcon ? (
    <button onClick={onClick} className={className} disabled={disabled}>{buttonText}</button>
  ) : (
    <div onClick={onClick} role="button"><Icon className={className} iconName={iconName} /></div>
  );
};

Button.defaultProp = {
  buttonText: "",
  isIcon: false,
  disabled: false
};

export default Button;