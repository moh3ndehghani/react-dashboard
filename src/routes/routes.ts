import RouterModel from "models/router/RouteModel";
import React from "react";

//impliment our router then pass it to the view and even sidebar if we needed
const routes: RouterModel[] = [
  {
    path: "/",
    name: "main-layout",
    element: () => import("layouts/main-layout/MainLayout"),
    children: [
      {
        path: "",
        name: "home",
        element: () => import("views/home/Home"),
      },
    ],
  },
];

export default routes;
