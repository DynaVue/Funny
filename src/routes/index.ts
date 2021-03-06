import React, { lazy } from "react";
import { RouteProps } from "react-router-dom";

export interface CRVRoute extends RouteProps {
  path: string;
  component: React.ElementType;
  exact: boolean;
}

const HomePage = lazy(() => import("../containers/HomePage"));
const CRV002Page = lazy(() => import("../containers/CRV002"));
const CRV003Page = lazy(() => import("../containers/CRV003"));


const routes: CRVRoute[] = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/CRV002",
    component: CRV002Page,
    exact: true,
  },
  {
    path: "/CRV003",
    component: CRV003Page,
    exact: true,
  },
];

export default routes;
