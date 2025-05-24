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
  InvestigationPage,
  InvestigationDetailPage,
} from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="security-guard-services-kolkata"
        element={<SecurityServicesPage />}
      />
      <Route path="our-services-kolkata" element={<OurServicesPage />} />
      {/* <Route path="investigation" element={<InvestigationPage />} /> */}
      <Route path="private-investigation-kolkata">
        <Route index element={<InvestigationPage />} />
        <Route path=":type" element={<InvestigationDetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
