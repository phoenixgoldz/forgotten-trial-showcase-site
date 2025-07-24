
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Index from "./pages/Index";
import ImprovedErrorBoundary from "./components/ImprovedErrorBoundary";
import SkeletonLoader from "./components/SkeletonLoader";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const CharactersPage = lazy(() => import("./pages/CharactersPage"));
const Demo = lazy(() => import("./pages/Demo"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    },
  },
});

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-mystic-blue flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-ethereal-gold/30 border-t-ethereal-gold rounded-full animate-spin mx-auto"></div>
      <p className="text-ethereal-gold font-cinzel text-xl animate-pulse">Loading mystical realm...</p>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    // Set document metadata for SEO
    document.title = "The Forgotten Trial - A Tactical Fantasy RPG";
    
    // Add meta tags for better SEO and performance
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'The Forgotten Trial - A tactical fantasy RPG where every memory is a clue and every playthrough is a new mystery. Back us on Kickstarter!'
      );
    }

    // Add viewport meta for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    }

    // Handle global errors with improved logging
    const handleGlobalError = (event: ErrorEvent) => {
      console.error('Global error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
    };

    // Performance observer for monitoring
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.log('Performance observer not supported');
      }
    }

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ImprovedErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner 
            position="top-center"
            theme="light"
          />
          <HashRouter>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/support" element={<SupportPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ImprovedErrorBoundary>
  );
};

export default App;
