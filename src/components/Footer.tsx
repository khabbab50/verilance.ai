import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-graphite text-marble py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-marble rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-teal-accent rounded-full" />
            </div>
            <span className="font-bold text-2xl tracking-tighter">Verilance.ai</span>
          </Link>
          <p className="text-marble/60 max-w-sm text-lg leading-relaxed">
            The Regulatory Intelligence Platform. Turning regulatory change into clear, intelligent action.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-marble/40">Platform</h4>
          <ul className="space-y-4">
            <li><Link to="/platform" className="hover:text-teal-accent transition-colors">Verilance.ai</Link></li>
            <li><Link to="/why" className="hover:text-teal-accent transition-colors">Why Verilance.ai</Link></li>
            <li><Link to="/investors" className="hover:text-teal-accent transition-colors">Investors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-marble/40">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/contact" className="hover:text-teal-accent transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-teal-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-accent transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-marble/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-marble/40 text-sm">
          © {new Date().getFullYear()} Verilance.ai. All rights reserved.
        </p>
        <div className="flex gap-8 text-marble/40 text-sm">
          <a href="#" className="hover:text-marble transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-marble transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
