import React, { FC } from "react";

import { Link } from "react-router-dom";
import styles from "./Box.module.scss";

export interface BoxProps {
  children?: React.ReactNode;
  title?: string;
  date?: string;
  rating?: number;
  image?: string;
  link?: string;
  sandbox?: boolean;
}

const Box: FC<BoxProps> = ({ title, date, image, rating, link, sandbox }) => (
  <article
    className={`flex flex-col h-full w-full bg-bg p-4 border-gray hover:border-white hover:border-2 border rounded-lg ${styles.Box}`}
    data-testid="Box"
  >
    <div className="h-full">
      {sandbox ? (
        <h1>
          <span className="text-2xl font-bold pr-5">{title}</span>
        </h1>
      ) : (
        <Link to={`${link}`}>
          <span className="text-2xl font-bold pr-5">{title}</span>
        </Link>
      )}
    </div>
    <div className="h-full rounded-lg overflow-hidden">
      <img src={image} />
    </div>
    <div className="flex justify-between mt-2">
      <p>{date}</p>
      <p>⭐️ {rating}</p>
    </div>
  </article>
);

export default Box;
