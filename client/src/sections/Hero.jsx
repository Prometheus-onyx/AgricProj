import { motion } from 'framer-motion';
import { FaArrowRight, FaSeedling, } from 'react-icons/fa6';
import { companyTagline, heroHighlights } from '../data/content';

const Hero = () => {

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#0f2417] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588186879741-889eb26e549f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,50,50,0.75),rgba(60,10,10,0.9))]"/>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Sustainable farming, elevated
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              {companyTagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
              We provide sustainable farming solutions, quality agricultural products, and innovative technologies that empower farmers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[#FBC02D] px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]"
              >
                Explore Services <FaArrowRight className="ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <li key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.7rem] bg-gradient-to-br from-[#e8f5e9] via-white to-[#f8f1e7] p-8 text-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Field Intelligence</p>
                    <h2 className="mt-2 text-2xl font-semibold">Smart agriculture, naturally.</h2>
                  </div>
                  <div className="rounded-full bg-red-600 p-3 text-white">
                    <FaSeedling className="text-xl" />
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Yield Boost', '+18%'],
                    ['Water Saved', '32%'],
                    ['Soil Health', '94%'],
                    ['Coverage', '24/7'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className="mt-1 text-xl font-semibold text-red-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
