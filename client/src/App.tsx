import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "BACAN - Transformación Empresarial Argentina";
    
    // Add meta tags for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'BACAN impulsa la modernización de empresas argentinas con tecnología de punta y soluciones personalizadas para aumentar su competitividad.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'transformación digital, empresas argentinas, modernización empresarial, tecnología, innovación';
    document.head.appendChild(metaKeywords);
    
    // OpenGraph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'BACAN - Transformación Empresarial Argentina';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Impulsamos la modernización y competitividad de tu negocio con soluciones que integran diseño, tecnología y eficiencia con identidad nacional.';
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
    
    // Clean up function to remove meta tags
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
