import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Helmet } from "react-helmet";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <title>LaurelDev - Financial Technology Solutions</title>
      <meta name="description" content="LaurelDev provides innovative financial technology solutions for credit unions and banking institutions." />
    </Helmet>
    <App />
  </QueryClientProvider>
);
