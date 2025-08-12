import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "../App";
import {
  HomePage,
  OurServicesPage,
  NotFoundPage,
  InvestigationPage,
  InvestigationDetailPage,
  SecurityServicesPage,
  NRIPage,
} from "../containers";
import SecurityDetailPage from "../containers/SecurityDetailPage/SecurityDetailPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="our-services-kolkata" element={<OurServicesPage />} />
      {/* <Route path="investigation" element={<InvestigationPage />} /> */}
      <Route path="private-investigation-kolkata">
        <Route index element={<InvestigationPage />} />
        <Route path=":type" element={<InvestigationDetailPage />} />
      </Route>
      <Route path="security-guard-services-kolkata">
        <Route index element={<SecurityServicesPage />} />
        <Route path=":type" element={<SecurityDetailPage />} />
      </Route>
      <Route path="nri-advisors-llp" element={<NRIPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

export default router;
