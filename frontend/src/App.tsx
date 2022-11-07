import { Box, chakra } from "@chakra-ui/react";
import { ServerSidebar, UserSidebar } from "./components/Sidebar";
import { ActiveNowColumn, Login, PeopleColumn, Titlebar } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box pos="relative" w="100%" h="100%" display="flex">
        <ServerSidebar />
        <Box display="flex" flexDir="column" pos="relative" flexGrow="1">
          <Box
            display="flex"
            alignItems="stretch"
            justifyContent="flex-start"
            minW="0"
            minH="0"
            flex="1 1 auto"
          >
            <UserSidebar />
            <chakra.main display="flex" w="100%" flexDir="column" bg="primary">
              <Titlebar />
              <Box
                h="100%"
                display="flex"
                flexDir="row"
                pos="relative"
                transform="translateZ(0)"
              >
                <PeopleColumn />
                <ActiveNowColumn />
              </Box>
            </chakra.main>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    path: "/login",
    element: (
      <Box display="flex" flexDir="row" flex="1 1 auto">
        <Login />
      </Box>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
