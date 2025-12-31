import { DressIcon, WeddingGownIcon, WardrobeIcon, SketchIcon, PatternIcon, BusinessIcon } from './components/icons.js';

export const PAYSTACK_PUBLIC_KEY = 'pk_live_81a1f6a24f6c255e5a6297cadc702d104af7b4fe';
export const TUTOR_WHATSAPP_NUMBER = '2348140119300';
export const TUTOR_WHATSAPP_LINK = `https://wa.me/${TUTOR_WHATSAPP_NUMBER}`;

export const SERVICES = [
  {
    id: 'service-1',
    title: 'Custom Outfit Design',
    description: 'Get a unique outfit designed and tailored perfectly for your special occasion. Consultation included.',
    price: 50000,
    icon: DressIcon,
  },
  {
    id: 'service-2',
    title: 'Bridal Gown Creation',
    description: 'Your dream wedding dress, brought to life. From sketch to final fitting, we handle everything.',
    price: 250000,
    icon: WeddingGownIcon,
  },
  {
    id: 'service-3',
    title: 'Wardrobe Consultation',
    description: 'A complete overhaul of your style. We help you build a wardrobe that reflects your personality.',
    price: 75000,
    icon: WardrobeIcon,
  },
];

export const TRAINING_COURSES = [
  {
    id: 'course-1',
    title: 'Beginner\'s Fashion Sketching',
    description: 'Learn the fundamentals of fashion illustration and bring your design ideas to paper.',
    price: 30000,
    duration: '4 Weeks',
    icon: SketchIcon,
  },
  {
    id: 'course-2',
    title: 'Advanced Pattern Making',
    description: 'Master the art of creating patterns for complex designs. For intermediate students.',
    price: 85000,
    duration: '8 Weeks',
    icon: PatternIcon,
  },
  {
    id: 'course-3',
    title: 'The Business of Fashion',
    description: 'Learn how to launch your own fashion brand, from sourcing materials to marketing your collection.',
    price: 120000,
    duration: '10 Weeks',
    icon: BusinessIcon,
  },
];