import { Link } from 'react-router-dom';
import { Button } from '../../lib/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <span className="text-[20vw] font-black text-white whitespace-nowrap">
          NO EXCUSES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          READY TO START YOUR <br />
          <span className="text-secondary">TRANSFORMATION?</span>
        </h2>
        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Join KRAVO today and get your first month at 50% off. Limited time offer for new members.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto px-12">
              Claim Offer
            </Button>
          </Link>
          <Link to="/schedule">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary px-12">
              View Schedule
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
