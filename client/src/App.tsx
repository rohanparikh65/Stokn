import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/sections/navbar"; // ✅ Add Navbar
import { Suspense } from 'react';
import Loading from '@/components/ui/loading';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/meet-the-team" component={() => <div>Meet the Team</div>} /> {/* Placeholder */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Router />
        <Toaster />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
