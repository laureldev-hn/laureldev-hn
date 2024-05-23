
import { AboutSection } from "./components/AboutUs/AboutSection";
import { ServiceSection } from "./components/Services/ServiceSection";
import TechnologiesSection from "./components/Technologies/TechnologiesSection";
import { Index } from "./components/index/Index";
import { CustomerSection } from "./components/Customers/CustomerSection"
import Contact from "./components/ContactUs/Contact";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";



export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [startShowApp, setStartShowApp] = useState(false);

  useEffect(()=>{
    setTimeout(()=> setStartShowApp(true), 1000)
    setTimeout(()=> setIsLoading(false), 2000)
  }, [isLoading, setIsLoading])

  

  if(isLoading){
    return <Loading />
  }

  return (
    <div id="appContainer" className={`${startShowApp && 'showAppContainer' }`}>
      <Index />
      <AboutSection />
      <ServiceSection />
      <CustomerSection />
      <TechnologiesSection />
      <Footer/>
    </div>
  );
}


