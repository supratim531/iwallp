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
  SecurityCategoryPage,
  SecurityDetailPage,
  NRIPage,
} from "../containers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="our-services-kolkata" element={<OurServicesPage />} />
        <Route path="private-investigation-kolkata">
          <Route index element={<InvestigationPage />} />
          <Route path=":type" element={<InvestigationDetailPage />} />
        </Route>
        <Route path="security-guard-services-kolkata">
          <Route index element={<SecurityServicesPage />} />
          <Route path=":type">
            <Route index element={<SecurityCategoryPage />} />
            <Route path=":subType" element={<SecurityDetailPage />} />
          </Route>
        </Route>
        <Route path="nri-advisors-llp" element={<NRIPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>,
  ),
);

export default router;
