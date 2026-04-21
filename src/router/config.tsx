import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import WebFXPage from "../pages/home/WebFXPage";
import SignaturePage from "../pages/home/SignaturePage";
import ConsultantPage from "../pages/home/ConsultantPage";
import ContactPage from "../pages/home/ContactPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <SignaturePage />,
  },
  {
    path: "/webfx",
    element: <WebFXPage />,
  },
  {
    path: "/consultant",
    element: <ConsultantPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
