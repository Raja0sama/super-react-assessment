/**
 * The Purpose of this secure layout is check if the user is logged in or not,
 * if in the case the user is logged in, then the application will render the routes from the authenticated routes.
 */

import React, { FC } from "react";

import Config from "../../config/config";
import { Navigate } from "react-router-dom";
import styles from "./SecureLayout.module.scss";

const { redirect } = Config;

interface SecureLayoutProps {
  children?: React.ReactNode;
  authenticated?: boolean;
}

const SecureLayout: FC<SecureLayoutProps> = ({ children, authenticated }) => {
  let isLoggedIn = false;
  if (authenticated) {
    if (isLoggedIn) {
      return (
        <div className={styles.SecureLayout} data-testid="SecureLayout">
          {children}
        </div>
      );
    } else {
      return <Navigate to={redirect.LoggedOut} />;
    }
  } else {
    if (isLoggedIn) {
      return <Navigate to={redirect.LoggedIn} />;
    } else {
      return (
        <div className={styles.SecureLayout} data-testid="SecureLayout">
          {children}
        </div>
      );
    }
  }
};

export default SecureLayout;
