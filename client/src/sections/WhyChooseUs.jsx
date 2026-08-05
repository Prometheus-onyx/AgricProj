import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { features } from '../data/content';

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A partner built on integrity, performance, and care."
          description="Every engagement is shaped by expertise, transparency, and a genuine commitment to sustainable outcomes."
          centered
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-[#f8fbf8] to-[#f7f5ef] p-7 text-center shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Icon className="text-xl" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-red-600">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
