import Layout from "../hola/Layout/Layout";
import SliderSection from "../hola/Carrousel/Carrousel";
import AboutSection from "../hola/AboutUs/AboutUs";
import ServicesSection from "../hola/Services/Services";
import ProfecionalesSection from "../hola/Profesionales/Profesionales";

const Home = () => {
  return (
    <>
      <Layout />
      <SliderSection />
      <AboutSection />
      <ServicesSection />
      <ProfecionalesSection />
    </>
  );
};

export default Home;