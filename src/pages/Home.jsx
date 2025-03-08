import Layout from "../hola/Layout/Layout";
import SliderSection from "../hola/Carrousel/Carrousel";
import AboutSection from "../hola/AboutUs/AboutUs";
import ServicesSection from "../hola/Services/Services";
import ProfesionalesSection from "../hola/Profesionales/Profesionales";

const Home = () => {
  return (
    <Layout>
      <SliderSection />
      <AboutSection />
      <ServicesSection />
      <ProfesionalesSection />
    </Layout>
  );
};

export default Home;
