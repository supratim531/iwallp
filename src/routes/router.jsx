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
import SecurityCategoryPage from "../containers/SecurityDetailPage/SecurityCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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
          <Route path=":type" element={<SecurityCategoryPage />} />
        </Route>
      </Route>
<<<<<<< HEAD
      <Route path="nri-advisors-llp" element={<NRIPage />} />
=======

>>>>>>> 4e583cb52f7a5cdc76106a46221cfe28877ed46e
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

export default router;
