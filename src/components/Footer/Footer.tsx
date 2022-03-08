import React, { FC } from "react";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div data-testid="Footer" className="p-5 border-t flex justify-center">
    <span>
      Made with ❤️, React and NestJS by{" "}
      <a href="https://rajaosama.me/">
        <u>Raja Osama</u>
      </a>
    </span>
  </div>
);

export default Footer;
