import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/content';

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Premium solutions for every stage of growth."
          description="From planning to execution, our service portfolio combines expertise, technology, and care."
          centered
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-[#f7f5ef] p-8 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#2E7D32]">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1B5E20]">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
