import LandingPage from "@/components/LandingPage";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { siteConfig } from "@/data/site";

export default function Home() {
  useDocumentMeta({
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  });

  return <LandingPage />;
}
