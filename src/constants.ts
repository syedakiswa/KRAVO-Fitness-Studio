import { Service, Trainer, ClassSchedule, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific goals, whether it is weight loss, muscle gain, or athletic performance.',
    benefits: ['Customized workout plans', 'Nutritional guidance', 'Form correction', 'Accountability'],
    icon: 'User',
  },
  {
    id: 'group-classes',
    title: 'Group Classes',
    description: 'High-energy classes ranging from HIIT and Yoga to Spin and Zumba. Perfect for staying motivated with others.',
    benefits: ['Community atmosphere', 'Expert instructors', 'Variety of workouts', 'Fun environment'],
    icon: 'Users',
  },
  {
    id: 'strength-training',
    title: 'Strength Training',
    description: 'Focus on building raw power and lean muscle mass using free weights, machines, and progressive overload.',
    benefits: ['Increased metabolism', 'Bone density improvement', 'Functional strength', 'Body recomposition'],
    icon: 'Dumbbell',
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    description: 'Workouts designed to improve your everyday movements, focusing on core stability, balance, and flexibility.',
    benefits: ['Injury prevention', 'Better posture', 'Core strength', 'Mobility'],
    icon: 'Activity',
  },
  {
    id: 'nutrition-coaching',
    title: 'Nutrition Coaching',
    description: 'Expert advice on fueling your body for performance and health. We help you build sustainable eating habits.',
    benefits: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Lifestyle changes'],
    icon: 'Apple',
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Alex "The Beast" Rivers',
    role: 'Head Strength Coach',
    specialties: ['Powerlifting', 'Bodybuilding', 'Hypertrophy'],
    bio: 'With over 10 years of experience in competitive powerlifting, Alex knows how to push you to your absolute limits.',
    image: '/expert1.png',
    qualifications: ['NASM CPT', 'CSCS', 'Precision Nutrition L1'],
  },
  {
    id: '2',
    name: 'John Jenkins',
    role: 'HIIT & Functional Specialist',
    specialties: ['HIIT', 'Mobility', 'Weight Loss'],
    bio: 'Sarah brings infectious energy to every class. Her focus is on moving well and feeling even better.',
    image: '/expert2.png',
    qualifications: ['ACE CPT', 'CrossFit L2', 'Yoga Alliance RYT-200'],
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Performance Coach',
    specialties: ['Athletic Performance', 'Agility', 'Rehab'],
    bio: 'Former collegiate athlete dedicated to helping you unlock your inner pro. Science-backed training at its best.',
    image: '/expert3.png',
    qualifications: ['BS Exercise Science', 'NASM PES', 'FMS Level 1'],
  },
];

export const SCHEDULE: ClassSchedule[] = [
  { id: '1', className: 'HIIT Blast', day: 'Monday', time: '06:00 AM', trainer: 'Sarah Jenkins' },
  { id: '2', className: 'Power Hour', day: 'Monday', time: '05:30 PM', trainer: 'Alex Rivers' },
  { id: '3', className: 'Yoga Flow', day: 'Tuesday', time: '07:00 AM', trainer: 'Elena Rodriguez' },
  { id: '4', className: 'Strength 101', day: 'Wednesday', time: '06:00 PM', trainer: 'Marcus Chen' },
  { id: '5', className: 'Functional Core', day: 'Thursday', time: '05:00 PM', trainer: 'Sarah Jenkins' },
  { id: '6', className: 'Zumba Party', day: 'Friday', time: '06:30 PM', trainer: 'Maria Silva' },
  { id: '7', className: 'Weekend Warrior', day: 'Saturday', time: '09:00 AM', trainer: 'Alex Rivers' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Wilson',
    text: 'KRAVO changed my life. The trainers actually care about your progress and the community is unmatched.',
    rating: 5,
    image: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    id: '2',
    name: 'Emily Davis',
    text: 'The best gym I have ever been to. The facilities are top-notch and the classes are incredibly challenging.',
    rating: 5,
    image: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    id: '3',
    name: 'Michael Brown',
    text: 'I lost 20lbs in 3 months thanks to the nutrition coaching and personal training sessions.',
    rating: 5,
    image: 'https://picsum.photos/seed/user3/100/100',
  },
];
