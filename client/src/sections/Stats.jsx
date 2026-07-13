import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';

const Counter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold text-[#1B5E20] sm:text-5xl">
        {displayValue}
        {suffix}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#1B5E20] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-200">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
