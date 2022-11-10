import { Box, chakra } from "@chakra-ui/react";
import loadable from "@loadable/component";
import { memo } from "react";
import { useRoutes } from "react-router-dom";
import {
  ActiveNowColumn,
  Authentication,
  Layout,
  PeopleColumn,
  ServerSidebar,
  Titlebar,
  UserSidebar,
} from "../components";
import AuthLayout from "./AuthLayout";

const LandingPage = loadable(() => import("../pages"), {
  resolveComponent: (components) => components.LandingPage,
});
const Login = loadable(() => import("../components"), {
  resolveComponent: (components) => components.Login,
});
const Error404 = loadable(() => import("../pages"), {
  resolveComponent: (components) => components.Error404,
});

export const Router = memo(() => {
  const routesConfig = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/",
              element: <LandingPage />,
            },
          ],
        },
        {
          path: "/login",
          element: <Authentication />,
        },
        {
          path: "/register",
          element: <Authentication />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return routesConfig;
});
