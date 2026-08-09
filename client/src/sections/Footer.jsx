import { companyName, quickLinks, socialLinks } from '../data/content';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4A4E5B] py-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
              <img src="https://www.image2url.com/r2/default/images/1786046415486-81c06058-2e7e-4c68-a309-fecb83cc668b.jpeg" alt="Logo" className="h-10 w-16" />
            </span>
            <span>{companyName}</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white">
            Empowering resilient farms with thoughtful products, strong partnerships, and modern agricultural insight.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}><NavLink to={link.path} key={link.path} className="transition hover:text-black">{link.label}</NavLink></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Crop Production</li>
            <li>Farm Management</li>
            <li>Organic Farming</li>
            <li>Irrigation Solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>hello@hi-fat.com</li>
            <li>+254 (735) 739-761</li>
            <li>Thika Road, Karasani, Nairobi</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="rounded-full bg-white/10 p-2 text-sm transition hover:text-[#FBC02D]">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 pt-8 text-sm text-white md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© { new Date().getFullYear()} Powered by <a className='hover:text-black' href='https://portfolio-354q.vercel.app/'> Ekron</a>. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
