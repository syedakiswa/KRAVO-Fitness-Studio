import { SCHEDULE } from '../constants';
import { Clock, User, MapPin, Info } from 'lucide-react';
import { Button } from '../lib/ui/Button';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Schedule() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            CLASS <span className="text-primary">SCHEDULE</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Plan your week and book your spot in our high-intensity classes.
          </p>
        </div>
      </section>

      {/* Schedule Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-6 text-left font-display uppercase tracking-widest border border-white/10">Time</th>
                  {DAYS.map(day => (
                    <th key={day} className="p-6 text-left font-display uppercase tracking-widest border border-white/10">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Simplified view for demo - in real app would group by time slots */}
                {['06:00 AM', '08:00 AM', '10:00 AM', '12:00 PM', '04:00 PM', '06:00 PM'].map((timeSlot) => (
                  <tr key={timeSlot} className="hover:bg-accent transition-colors">
                    <td className="p-6 border border-secondary/5 font-bold text-secondary bg-accent/50">
                      {timeSlot}
                    </td>
                    {DAYS.map(day => {
                      const classAtTime = SCHEDULE.find(s => s.day === day && s.time.includes(timeSlot.split(':')[0]));
                      return (
                        <td key={`${day}-${timeSlot}`} className="p-6 border border-secondary/5 min-w-[200px]">
                          {classAtTime ? (
                            <div className="space-y-2">
                              <h4 className="font-black text-secondary uppercase leading-tight">{classAtTime.className}</h4>
                              <div className="flex items-center text-xs text-secondary/60 font-bold">
                                <User size={12} className="mr-1 text-primary" />
                                {classAtTime.trainer}
                              </div>
                              <div className="flex items-center text-xs text-secondary/60 font-bold">
                                <Clock size={12} className="mr-1 text-primary" />
                                60 Min
                              </div>
                              <button className="text-[10px] uppercase tracking-widest font-black text-primary hover:underline mt-2">
                                Book Now
                              </button>
                            </div>
                          ) : (
                            <span className="text-secondary/10 font-bold uppercase text-xs tracking-widest">Open Gym</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 bg-accent border-l-4 border-primary flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start space-x-4">
              <Info className="text-primary shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-secondary uppercase tracking-wider mb-2">Studio Information</h4>
                <p className="text-secondary/60 text-sm max-w-xl">
                  Classes must be booked at least 2 hours in advance. Cancellations require 12 hours notice to avoid a fee. 
                  Please arrive 10 minutes before your class starts.
                </p>
              </div>
            </div>
            <Button>Download PDF Schedule</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
