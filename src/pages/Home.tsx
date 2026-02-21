import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TrainersPreview } from '../components/home/TrainersPreview';
import { ScheduleSnapshot } from '../components/home/ScheduleSnapshot';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <TrainersPreview />
      <ScheduleSnapshot />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
