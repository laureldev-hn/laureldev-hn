import LandingPage from "@/components/LandingPage";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LaurelDev - Financial Technology Solutions</title>
        <meta name="description" content="LaurelDev provides innovative financial technology solutions for credit unions and banking institutions." />
        <meta name="keywords" content="fintech, financial technology, banking software, credit union technology, custom software development" />
        <meta property="og:title" content="LaurelDev - Financial Technology Solutions" />
        <meta property="og:description" content="Transforming financial institutions through innovative technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <LandingPage />
    </>
  );
};

export default Home;
