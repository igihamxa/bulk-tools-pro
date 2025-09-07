import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ToolPage from "./pages/ToolPage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tools/:toolId" element={<ToolPage />} />
          <Route path="/pdf-tools" element={<CategoryPage />} />
          <Route path="/image-tools" element={<CategoryPage />} />
          <Route path="/video-tools" element={<CategoryPage />} />
          <Route path="/audio-tools" element={<CategoryPage />} />
          <Route path="/converters" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Contact />} />
          <Route path="/blog" element={<Contact />} />
          <Route path="/help" element={<Contact />} />
          <Route path="/privacy" element={<Contact />} />
          <Route path="/terms" element={<Contact />} />
          <Route path="/cookies" element={<Contact />} />
          <Route path="/gdpr" element={<Contact />} />
          <Route path="/api" element={<Contact />} />
          <Route path="/tutorials" element={<Contact />} />
          <Route path="/status" element={<Contact />} />
          <Route path="/changelog" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
