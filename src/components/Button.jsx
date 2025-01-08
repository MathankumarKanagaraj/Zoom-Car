import React from "react";
import { Button } from "react-bootstrap";

const CarButton = ({
  label,
  onClick,
  style,
  className,
  type = "button", 
  disabled = false,
  variant,
}) => {
  return (
    <Button
      className={className}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant={variant}
    >
      {label}
    </Button>
  );
};

export default CarButton;
