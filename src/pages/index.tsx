/**
 * This page contain routes for the application itself. The routes are coming from config/routes.js folders and are being used here.
 */

import React, { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes, { ROUTE_TYPE } from "../config/routes";

import SecureLayout from "../layout/SecureLayout/SecureLayout";

interface PagesTypes {}

const Pages: FC<PagesTypes> = () => (
  <Router basename={false ? "" : "/super-react-assessment/"}>
    <Routes>
      {routes.PUBLIC.map((route: ROUTE_TYPE) => {
        const Component = route?.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={<>...</>}>
                <Component />
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
    <Routes>
      {routes.AUTHENTICATED.map((route: ROUTE_TYPE) => {
        const Component = route?.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={<>...</>}>
                <SecureLayout authenticated>
                  <Component />
                </SecureLayout>
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
    <Routes>
      {routes.PRE_AUTHENTICATED.map((route: ROUTE_TYPE) => {
        const Component = route?.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={<>...</>}>
                <SecureLayout>
                  <Component />
                </SecureLayout>
              </React.Suspense>
            }
          />
        );
      })}
    </Routes>
  </Router>
);

export default Pages;
