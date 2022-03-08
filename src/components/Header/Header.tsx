import React, { FC } from "react";

import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  back?: boolean;
}

const Header: FC<HeaderProps> = ({ back }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full border-b border-white-200 h-14 flex items-center p-5"
      data-testid="Header"
    >
      {back && (
        <div
          className="text-2xl mr-10 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          👈🏻
        </div>
      )}
      <p>Code Assessment 🤖</p>
    </div>
  );
};

export default Header;
