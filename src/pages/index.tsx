/**
 * This page contain routes for the application itself. The routes are coming from config/routes.js folders and are being used here.
 */

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { FC } from "react";

import SecureLayout from "../layout/SecureLayout/SecureLayout";
import routes from "../config/routes";

interface PagesTypes {}

const Pages: FC<PagesTypes> = () => (
  <Router>
    <Routes>
      {routes.PUBLIC.map((route) => {
        const Component = route.component;
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
      {routes.AUTHENTICATED.map((route) => {
        const Component = route.component;
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
      {routes.PRE_AUTHENTICATED.map((route) => {
        const Component = route.component;
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
