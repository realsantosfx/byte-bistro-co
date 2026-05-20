import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import Projekte from "./pages/Projekte";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import KIBeratung from "./pages/KIBeratung";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import SoftwareBuilder from "./pages/SoftwareBuilder";
import AdminBlueprints from "./pages/AdminBlueprints";
import Enterprise from "./pages/Enterprise";
import ProduktOperativeSoftware from "./pages/ProduktOperativeSoftware";
import Demo from "./pages/Demo";
import DemoDetail from "./pages/DemoDetail";
import DemoRestaurant from "./pages/DemoRestaurant";
import DemoBarber from "./pages/DemoBarber";
import DemoStudio from "./pages/DemoStudio";
import DemoBusiness from "./pages/DemoBusiness";
import DemoDelivery from "./pages/DemoDelivery";
import DemoDealFlow from "./pages/DemoDealFlow";
import DemoSalesSystem from "./pages/DemoSalesSystem";
import DemoGuestService from "./pages/DemoGuestService";
import DemoVenue from "./pages/DemoVenue";
import DemoEmbed from "./pages/DemoEmbed";
import CaseStudyMittelstand from "./pages/CaseStudyMittelstand";
import CaseStudyChemievertrieb from "./pages/CaseStudyChemievertrieb";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projekte" element={<Projekte />} />
            <Route path="/projekt/:id" element={<ProjectDetail />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/ki-beratung" element={<KIBeratung />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/blueprints" element={<AdminBlueprints />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/software-builder" element={<SoftwareBuilder />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/produkte/operative-software" element={<ProduktOperativeSoftware />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/demo/restaurant" element={<DemoRestaurant />} />
            <Route path="/demo/barber" element={<DemoBarber />} />
            <Route path="/demo/studio" element={<DemoStudio />} />
            <Route path="/demo/business" element={<DemoBusiness />} />
            <Route path="/demo/delivery" element={<DemoDelivery />} />
            <Route path="/enterprise/dealflow" element={<DemoDealFlow />} />
            <Route path="/demo/salesystem" element={<DemoSalesSystem />} />
            <Route path="/demo/guest-service" element={<DemoGuestService />} />
            <Route path="/demo/venue" element={<DemoVenue />} />
            <Route path="/demo/:system" element={<DemoDetail />} />
            <Route path="/demo/:system/live" element={<DemoEmbed />} />
            <Route path="/enterprise/:system/live" element={<DemoEmbed />} />
            <Route path="/case/mittelstand-erp" element={<CaseStudyMittelstand />} />
            <Route path="/case/chemievertrieb-crm" element={<CaseStudyChemievertrieb />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
