import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import SignaturePage from "../pages/home/SignaturePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SignaturePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
