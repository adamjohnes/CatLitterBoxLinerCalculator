import PageLayout from '../layout/PageLayout';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ContactSection from '../sections/ContactSection';

function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </PageLayout>
  );
}

export default Home;