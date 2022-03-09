/**
 * To understand the routes we need to thing of the parts of the application
 * Every application has some publicly accessible routes
 *
 * PUBLIC
 * These are the routes that are not protected by a login
 *
 * PRE_AUTHENTICATED
 * Some are Pre Authentication Routes (Protected Routes, if logged in, not visible)
 *
 * AUTHENTICATED
 * Some are Post Authentication Routes (Protected Routes, if logged in, visible)
 */

import { lazy } from "react";

export interface ROUTE_TYPE {
  component: any;
  path: string;
}

export default {
  PUBLIC: [
    {
      path: "/",
      component: lazy(() => import("../pages/public/Home/Home")),
    },
    {
      path: "/movie/:id",
      component: lazy(
        () => import("../pages/public/MovieDetails/MovieDetails")
      ),
    },
    {
      path: "*",
      component: lazy(() => import("../pages/public/NotFound/NotFound")),
    },
  ],
  AUTHENTICATED: [],
  PRE_AUTHENTICATED: [],
};
