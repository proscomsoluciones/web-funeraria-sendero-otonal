import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import AboutUs from "@/components/AboutUs";
import Catalog from "@/components/Catalog";
import Caskets from "@/components/Caskets";
import ExtraServices from "@/components/ExtraServices";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import Memorial from "@/components/Memorial";
import AiAdvisor from "@/components/AiAdvisor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Steps />
        <AboutUs />
        <Catalog />
        <Caskets />
        <ExtraServices />
        <Calculator />
        <Testimonials />
        <Memorial />
        <AiAdvisor />
      </main>
      <Footer />
    </>
  );
}
