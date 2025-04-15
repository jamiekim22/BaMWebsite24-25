import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MailingListForm from '@/components/MailingListForm';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Statistics from '@/components/Statistics';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <NavBar />
      <MailingListForm />
      <Statistics/>
      <AboutSection />
      <EventsSection />
      <ContactSection/>
      <Footer />
    </main>
  );
}
