import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa6';
import SectionHeading from '../components/SectionHeading';

const highlights = [
  '10+ Years Experience',
  'Sustainable Farming',
  'Modern Equipment',
  'Expert Agronomists',
];

const About = () => {
  return (
    <section id="about" className="bg-black py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2rem] shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
            alt="Farmers working in a field"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <SectionHeading
            eyebrow="About HI-FAT"
            title="Trusted by growers who value resilience and performance."
            description="We combine field expertise, premium inputs, and intelligent practice to help farms thrive in changing conditions."
          />

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From seed selection to harvest planning, our team supports every stage of cultivation with practical advice and dependable products.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <span className="rounded-full bg-[#E8F5E9] p-2 text-[#550000]">
                  <FaCheck />
                </span>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;