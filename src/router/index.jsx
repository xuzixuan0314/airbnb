import { Navigate } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("@/views/home"));
const Detail = React.lazy(() => import("@/views/detail"));
const Entire = React.lazy(() => import("@/views/entire"));
const DotDemo = React.lazy(() => import("@/views/dotDemo"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/detail",
    element: <Detail></Detail>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
  {
    path: "/dot-demo",
    element: <DotDemo></DotDemo>,
  },
];
export default routes;
