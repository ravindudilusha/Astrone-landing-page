import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Careers } from "./pages/Careers";
import { BeAPartner } from "./pages/BeAPartner";
import { CSR } from "./pages/CSR";
import { JobApplication } from "./pages/JobApplication";
import { VacancyDetails } from "./pages/VacancyDetails";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import Nutrition from "./pages/Nutrition";
import HealingHerbs from "./pages/HealingHerbs";
import PersonalCare from "./pages/PersonalCare";
import AnimalHealth from "./pages/AnimalHealth";
import Optipet from "./pages/Optipet";
import EventPreviewPage from "./pages/EventPreviewPage";
import NewsAndEvents from "./pages/NewsAndEvents";
import NewsEventPreview from "./pages/NewsEventPreview";
import Manufacturing from "./pages/Manufacturing";
import Quality from "./pages/Quality";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Feedback from "./pages/Feedback";
import ProductEnquiryPage from "./pages/ProductEnquiryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "contact", Component: ContactUs },
      { path: "feedback", Component: Feedback },
      { path: "careers", Component: Careers },
      { path: "careers/apply", Component: JobApplication },
      { path: "careers/vacancy/:id", Component: VacancyDetails },
      { path: "partner", Component: BeAPartner },
      { path: "csr", Component: CSR },
      { path: "brands/pharmaceuticals", Component: Pharmaceuticals },
      { path: "brands/nutrition", Component: Nutrition },
      { path: "brands/healing-herbs", Component: HealingHerbs },
      { path: "brands/personal-care", Component: PersonalCare },
      { path: "brands/animal-health", Component: AnimalHealth },
      { path: "brands/optipet", Component: Optipet },
      { path: "csr/event/:id", Component: EventPreviewPage },
      { path: "news-events", Component: NewsAndEvents },
      { path: "news-events/:id", Component: NewsEventPreview },
      { path: "operations/manufacturing", Component: Manufacturing },
      { path: "operations/quality-assurance", Component: Quality },
      { path: "operations/rnd", Component: ResearchAndDevelopment },
      { path: "enquire", Component: ProductEnquiryPage },
    ],
  },
]);