import React, { FC } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
  back?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, back }) => (
  <div
    className={"flex flex-col h-screen m-w-screen bg-bg text-white"}
    data-testid="Layout"
  >
    <Header back={back} />
    <div className="h-full overflow-scroll">
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
