import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicesOverview } from "./pages/ServicesOverview";
import { ServiceDetail } from "./pages/ServiceDetail";
import { PatientInfo } from "./pages/PatientInfo";
import { Insurance } from "./pages/Insurance";
import { FAQs } from "./pages/FAQs";
import { SmileGallery } from "./pages/SmileGallery";
import { BlogIndex } from "./pages/BlogIndex";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "services",
        children: [
          { index: true, Component: ServicesOverview },
          { path: ":serviceId", Component: ServiceDetail },
        ],
      },
      {
        path: "patient-info",
        children: [
          { index: true, Component: PatientInfo },
          { path: "insurance", Component: Insurance },
          { path: "faqs", Component: FAQs },
        ],
      },
      { path: "smile-gallery", Component: SmileGallery },
      { path: "blog", Component: BlogIndex },
      { path: "contact", Component: Contact },
    ],
  },
]);
