import React, { MouseEventHandler } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  content?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
}

const Button = ({ type, content, onClick, disabled }: ButtonProps) => {
  return (
    <button type={type} className={`btn`} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
