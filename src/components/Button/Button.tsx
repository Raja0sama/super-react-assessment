import React, { FC } from "react";

import { sign } from "crypto";
import styles from "./Button.module.scss";

export interface ButtonProps {
  type?: "primary" | "secondary";
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({ type, children }) => {
  let _type, _size;
  if (type === "primary") _type = "bg-glow text-bg";
  if (type === "secondary") _type = "bg-white text-black";

  if (_size === "small") _size = "p1 px-4 text-md";
  if (_size === "medium") _size = "p1 px-4 text-lg";
  if (_size === "large") _size = "p1 px-4 text-2xl";

  return (
    <button
      data-testid="Button"
      className={`p-1 pr-4 pl-4 rounded-md bg-glow text-bg ${_type} ${_size}`}
    >
      {children}
    </button>
  );
};

export default Button;
