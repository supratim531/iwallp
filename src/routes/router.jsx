import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "../App";
import {
  HomePage,
  OurServicesPage,
  SecurityServicesPage,
  NotFoundPage,
} from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="security-services" element={<SecurityServicesPage />} />
      <Route path="our-services" element={<OurServicesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
