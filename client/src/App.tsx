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
    if (typeof window !== "undefined") window.location.hash = path;
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
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  return [path, hashNavigator.push];
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
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
