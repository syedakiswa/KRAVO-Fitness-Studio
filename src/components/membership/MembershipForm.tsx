import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '../../lib/ui/Button';
import { Input, Textarea } from '../../lib/ui/Input';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function MembershipForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Note: These env vars should be set in AI Studio Secrets
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS environment variables are missing. Simulating success for demo.');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
          to_name: 'KRAVO Fitness Studio',
        },
        publicKey
      );

      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', program: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 text-center border-2 border-primary/20">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wider">Welcome to the Tribe!</h3>
        <p className="text-secondary/60 mb-8">
          Your application has been received. One of our performance coaches will contact you within 24 hours.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="w-full">
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl border-t-4 border-primary">
      <h3 className="text-2xl font-bold text-secondary mb-8 uppercase tracking-wider">Join the Studio</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">Full Name</label>
          <Input
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">Email Address</label>
            <Input
              required
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">Phone Number</label>
            <Input
              required
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">Preferred Program</label>
          <select
            required
            className="flex h-12 w-full border-2 border-secondary/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:border-primary transition-colors"
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
          >
            <option value="">Select a program</option>
            <option value="personal">Personal Training</option>
            <option value="group">Group Classes</option>
            <option value="strength">Strength Training</option>
            <option value="functional">Functional Fitness</option>
            <option value="nutrition">Nutrition Coaching</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-secondary/60 mb-2">Message (Optional)</label>
          <Textarea
            placeholder="Tell us about your fitness goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {status === 'error' && (
          <p className="text-primary text-sm font-bold">Something went wrong. Please try again or call us directly.</p>
        )}

        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full"
          size="lg"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={20} />
              Processing...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </div>
    </form>
  );
}
