export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
  qualifications: string[];
}

export interface ClassSchedule {
  id: string;
  className: string;
  day: string;
  time: string;
  trainer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}
