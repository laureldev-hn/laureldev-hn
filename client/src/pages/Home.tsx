import { useEffect } from "react";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "LaurelDev - Financial Technology Solutions";
  }, []);

  return <LandingPage />;
}
