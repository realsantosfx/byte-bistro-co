import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Approach from "@/components/sections/Approach";
import CaseStudies from "@/components/sections/CaseStudies";
import WhySantosLab from "@/components/sections/WhySantosLab";
import AboutNew from "@/components/sections/AboutNew";
import WaysToWork from "@/components/sections/WaysToWork";
import FinalCTA from "@/components/sections/FinalCTA";
import Testimonials from "@/components/sections/Testimonials";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <Approach />
        <CaseStudies />
        <Testimonials />
        <WhySantosLab />
        <AboutNew />
        <WaysToWork />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
