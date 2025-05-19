import { Router, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

// Hash-based routing for GitHub Pages
const hashNavigator = {
  // Get current path from hash
  path: typeof window !== "undefined" ? window.location.hash.replace("#", "") || "/" : "/",
  
  // Navigate to path by setting hash
  push: (path: string): void => {
    if (typeof window !== "undefined") {
      // Si es un hash de sección (comienza con #), manejar el scroll
      if (path.startsWith('#')) {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      // Si es una ruta normal, actualizar la URL sin hash
      if (path === '/') {
        window.location.hash = '';
        return;
      }
      // Para otras rutas, mantener el hash
      window.location.hash = path;
    }
  }
};

function useHashLocation(): [string, (to: string) => void] {
  const [path, setPath] = useState(hashNavigator.path);
  
  useEffect(() => {
    // Update path when hash changes
    const handler = () => {
      const newPath = window.location.hash.replace("#", "") || "/";
      setPath(newPath);
    };
    
    // Set up event listener
    window.addEventListener("hashchange", handler);
    
    // Call handler once on initial load
    handler();
    
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  return [path, hashNavigator.push];
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route path="/:rest*" component={NotFound} />
    </Router>
  );
}

function App() {
  useEffect(() => {
    // Check for dark mode preference in localStorage or system
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Manejar el scroll al cargar la página
    const handleInitialScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleInitialScroll();

    // Prevenir el scroll más allá del footer
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Solo prevenir el scroll si estamos intentando ir más allá del footer
        if (footerTop <= windowHeight && scrollY + windowHeight >= documentHeight - 10) {
          window.scrollTo({
            top: documentHeight - windowHeight,
            behavior: 'auto'
          });
        }
      }
    };

    // Manejar clicks en enlaces internos
    const handleInternalLinks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleInternalLinks);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInternalLinks);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
