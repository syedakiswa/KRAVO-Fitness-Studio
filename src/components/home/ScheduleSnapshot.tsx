import { Link } from 'react-router-dom';
import { SCHEDULE } from '../../constants';
import { Button } from '../../lib/ui/Button';
import { Calendar, Clock, User } from 'lucide-react';

export function ScheduleSnapshot() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            TODAY'S <span className="text-primary">SCHEDULE</span>
          </h2>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            Check out our upcoming classes for the day. Don't miss your chance to sweat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SCHEDULE.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white p-6 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-secondary">{item.className}</h3>
                <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">
                  Confirmed
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-secondary/60 text-sm">
                  <Clock size={16} className="mr-2 text-primary" />
                  {item.time}
                </div>
                <div className="flex items-center text-secondary/60 text-sm">
                  <User size={16} className="mr-2 text-primary" />
                  {item.trainer}
                </div>
                <div className="flex items-center text-secondary/60 text-sm">
                  <Calendar size={16} className="mr-2 text-primary" />
                  {item.day}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/schedule">
            <Button size="lg">View Full Schedule</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
