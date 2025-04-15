import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MailingListForm from '@/components/MailingListForm';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <MailingListForm />
      <Statistics/>
      <AboutSection />
      <EventsSection />
      <ContactSection/>
      <Footer />
    </main>
  );
}
