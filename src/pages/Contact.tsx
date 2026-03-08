import { motion } from 'motion/react';
import { Mail, MessageSquare, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactTypes = [
    { icon: MessageSquare, title: "Request a Demo", desc: "See the platform in action." },
    { icon: Briefcase, title: "Investor Enquiries", desc: "Learn more about our vision." },
    { icon: Users, title: "Partnership Enquiries", desc: "Collaborate with our ecosystem." },
    { icon: Mail, title: "General Contact", desc: "Anything else on your mind." },
  ];

  return (
    <div className="bg-marble min-h-screen">
      {/* Hero Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium mb-8 leading-tight"
          >
            Let's <br />
            <span className="serif italic text-graphite/40">Connect</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for a demo, interested in investing, or want to partner with us, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactTypes.map((type, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-graphite/5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-marble rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-accent/10 transition-colors">
                <type.icon className="w-6 h-6 text-graphite group-hover:text-teal-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-graphite/60 text-sm">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-marble p-12 md:p-20 rounded-[60px]">
            <h2 className="text-3xl md:text-5xl font-medium mb-12">Send us a message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-graphite/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-graphite/10 py-4 focus:outline-none focus:border-graphite transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-graphite/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-graphite/10 py-4 focus:outline-none focus:border-graphite transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-graphite/40">Company</label>
                <input type="text" className="w-full bg-transparent border-b border-graphite/10 py-4 focus:outline-none focus:border-graphite transition-colors" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-graphite/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-graphite/10 py-4 focus:outline-none focus:border-graphite transition-colors resize-none" placeholder="How can we help?" />
              </div>
              <button className="w-full bg-graphite text-white py-6 rounded-full text-xl font-medium hover:bg-graphite/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                Send Message <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
