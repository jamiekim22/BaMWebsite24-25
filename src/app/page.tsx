import AboutSection from '@/components/AboutSection';
import MailingListForm from '@/components/MailingListForm';
import EventsSection from '@/components/EventsSection';
import Execs from '@/components/Execs';
import Statistics from '@/components/Statistics';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <NavBar />
      <MailingListForm />
      <Statistics/>
      <AboutSection />
      <EventsSection />
      <Execs/>
      <Footer />
    </main>
  );
}
