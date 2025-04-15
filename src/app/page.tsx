import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/AboutSection';
import MailingListForm from '@/components/MailingListForm';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />
      <WhoWeAreSection />
      <MailingListForm />
    </main>
  );
}
