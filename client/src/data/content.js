import {
  FaSeedling,
  FaTractor,
  FaSprayCan,
  FaWater,
  FaFlask,
  FaCow,
  FaLeaf,
  FaShieldHalved,
  FaChartLine,
  FaHeadset,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
} from 'react-icons/fa6';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Crop Production',
    description: 'High-yield programs tailored to your climate and soil profile.',
    icon: FaSeedling,
  },
  {
    title: 'Farm Management',
    description: 'Operational planning, logistics, and field execution for modern farms.',
    icon: FaTractor,
  },
  {
    title: 'Organic Farming',
    description: 'Certified regenerative practices that protect soil and biodiversity.',
    icon: FaLeaf,
  },
  {
    title: 'Irrigation Solutions',
    description: 'Water-smart systems for efficient, low-waste crop performance.',
    icon: FaWater,
  },
  {
    title: 'Soil Testing',
    description: 'Precise diagnostics to unlock healthier soils and better outputs.',
    icon: FaFlask,
  },
  {
    title: 'Livestock Support',
    description: 'Data-backed feed, health, and herd management for resilient operations.',
    icon: FaCow,
  },
];

export const products = [
  {
    name: 'Maize Seeds',
    description: 'Drought-tolerant hybrids engineered for strong yields and resilience.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Fertilizers',
    description: 'Balanced nutrition blends for healthier growth at every stage.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Pesticides',
    description: 'Targeted protection with responsible application and safety controls.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Farm Machinery',
    description: 'Reliable equipment designed to improve productivity and reduce effort.',
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Irrigation Equipment',
    description: 'Smart irrigation components built for precision and long-term value.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Animal Feed',
    description: 'Nutritious feed solutions supporting healthier herds and faster growth.',
    image:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80',
  },
];

export const features = [
  {
    title: 'Experienced Team',
    description: 'Specialists with decades of hands-on field insight across diverse regions.',
    icon: FaShieldHalved,
  },
  {
    title: 'Certified Products',
    description: 'Quality-assured inputs and advisory support you can trust.',
    icon: FaCheck,
  },
  {
    title: 'Modern Technology',
    description: 'Precision tools, sensors, and analytics for smarter operations.',
    icon: FaChartLine,
  },
  {
    title: 'Customer Support',
    description: 'Responsive service before, during, and after every deployment.',
    icon: FaHeadset,
  },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Farmers Served' },
  { value: 1200, suffix: '+', label: 'Acres Managed' },
  { value: 150, suffix: '+', label: 'Products' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
];

export const testimonials = [
  {
    name: 'Amina Hassan',
    role: 'Director, Green Valley Farms',
    quote:
      'Their guidance transformed the way we manage irrigation and crop planning. The results were immediate and sustainable.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Daniel Ortiz',
    role: 'Operations Lead, Crest Agro',
    quote:
      'Professional, proactive, and deeply knowledgeable. Every recommendation felt practical and good for the long term.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lilian Mwangi',
    role: 'Owner, Horizon Ranch',
    quote:
      'We now have stronger yields, better soil health, and a team that feels like an extension of our business.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
];

export const faqs = [
  {
    question: 'How do I order products?',
    answer: 'You can request a quote through our contact form or by calling our sales desk. We respond within one business day.',
  },
  {
    question: 'Do you provide consultation?',
    answer: 'Yes. We offer agronomic advisory, farm planning, and crop-specific consultation for both smallholders and commercial farms.',
  },
  {
    question: 'Where are you located?',
    answer: 'We serve growers across regional and national markets, with headquarters in the heart of the agricultural belt.',
  },
  {
    question: 'Do you deliver?',
    answer: 'Absolutely. We offer delivery and logistics support for products and equipment to eligible service areas.',
  },
];

export const socialLinks = [
  { label: 'Facebook', href: '#', icon: FaFacebookF },
  { label: 'Instagram', href: '#', icon: FaInstagram },
  { label: 'Twitter', href: '#', icon: FaTwitter },
  { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
];

export const contactDetails = [
  { label: 'Email', value: 'hello@verdantharvest.com', icon: FaEnvelope },
  { label: 'Phone', value: '+1 (555) 214-0198', icon: FaPhone },
  { label: 'Address', value: '214 Riverstone Road, Farmington, CA', icon: FaLocationDot },
  { label: 'Working Hours', value: 'Mon–Sat: 8:00 AM – 6:00 PM', icon: FaClock },
];

export const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export const heroHighlights = [
  'Sustainable solutions',
  'Field-tested products',
  'Dedicated support',
];

export const companyName = 'Verdant Harvest';
export const companyTagline = 'Growing Tomorrow’s Agriculture Today';

export { FaStar, FaArrowRight, FaChevronDown };
