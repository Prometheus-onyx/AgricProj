import { FaArrowRight } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <section className="bg-[#1B5E20] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8e6c9]">Stay Connected</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Stay updated with modern farming.</h2>
              <p className="mt-4 text-slate-200">Receive news, seasonal insights, and product updates directly in your inbox.</p>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-slate-300 outline-none"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#FBC02D] px-6 py-3 font-semibold text-slate-900">
                Subscribe <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
