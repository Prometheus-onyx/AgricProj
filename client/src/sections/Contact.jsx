import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { contactDetails } from '../data/content';

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border bg-black p-8 shadow-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.5rem] bg-white/10 p-8 text-white"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Contact Us</p>
            <h2 className="mt-4 text-3xl font-semibold">Let’s grow something remarkable together.</h2>
            <p className="mt-4 text-slate-200">Reach out for support, product quotes, or a tailored consultation.</p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-1 rounded-full bg-white/10 p-2">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-300">{item.label}</p>
                      <p className="text-base text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} className="rounded-full bg-white/10 p-3 transition hover:bg-white/20">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.5rem] bg-white p-8 shadow-md"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-700">
                Name
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fafaf8] px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email
                <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fafaf8] px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              Phone
              <input type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fafaf8] px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="+254 (702) 480-425" />
            </label>
            <label className="mt-4 block text-sm font-medium text-slate-700">
              Message
              <textarea rows="5" className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fafaf8] px-4 py-3 outline-none focus:border-[#2E7D32]" placeholder="Tell us about your farm or project" />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-[#FBC02D] px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.01]">
              Send Message <FaArrowRight className="ml-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
