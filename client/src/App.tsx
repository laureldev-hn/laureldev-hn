import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/SiteLayout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import ServicePage from "@/pages/Service";
import CaseStudyPage from "@/pages/CaseStudy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios/:slug" component={ServicePage} />
      <Route path="/casos/:slug" component={CaseStudyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <ScrollToTop />
      <SiteLayout>
        <Router />
      </SiteLayout>
    </TooltipProvider>
  );
}

export default App;
