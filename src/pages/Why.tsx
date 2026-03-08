import { motion } from 'motion/react';
import { Shield, Zap, Globe, Cpu, Database, Activity, Layers, ArrowRight, User, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Why() {
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
            Built for <br />
            <span className="serif italic text-graphite/40">Credibility</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl mx-auto leading-relaxed">
            Verilance is built by industry veterans who have spent decades at the intersection of technology and regulation.
          </p>
        </div>
      </section>

      {/* The Compliance Challenge */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">The Compliance Challenge</h2>
            <p className="text-xl text-graphite/60 leading-relaxed mb-10">
              In a world of constant regulatory change, traditional compliance systems are failing. They are too slow, too manual, and too disconnected from the core business.
            </p>
            <div className="space-y-8">
              {[
                { title: "Regulatory Velocity", desc: "Regulations are changing faster than ever before." },
                { title: "Operational Complexity", desc: "Global organisations face a patchwork of conflicting requirements." },
                { title: "Innovation Friction", desc: "Compliance is often seen as a bottleneck to growth." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-marble rounded-xl flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-graphite rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-graphite/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-marble rounded-[60px] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-graphite to-transparent" />
             <div className="relative z-10 w-48 h-48 bg-graphite rounded-3xl rotate-12 flex items-center justify-center shadow-2xl">
                <Shield className="w-20 h-20 text-teal-accent -rotate-12" />
             </div>
          </div>
        </div>
      </section>

      {/* Industry Thought Leadership */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Industry Thought Leadership</h2>
            <p className="text-xl text-graphite/60 max-w-2xl mx-auto">
              We are not just building a platform; we are defining the future of regulatory intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: "Regulatory Insights", desc: "Deep analysis of global regulatory trends and their impact on industry." },
              { icon: Award, title: "Industry Standards", desc: "Contributing to the development of global compliance frameworks." },
              { icon: User, title: "Expert Network", desc: "A global network of regulatory and legal experts at your fingertips." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-graphite/5 shadow-sm">
                <div className="w-16 h-16 bg-marble rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon className="w-8 h-8 text-graphite" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-graphite/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisors */}
      <section className="py-40 px-6 bg-graphite text-marble">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Leadership & Advisors</h2>
            <p className="text-xl text-marble/60 max-w-2xl mx-auto">
              Our team brings together the best minds in AI, regulation, and enterprise transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Former Head of AI at a global financial institution." },
              { name: "Dr. Marcus Thorne", role: "CTO & Co-Founder", bio: "Renowned expert in automated reasoning and AI systems." },
              { name: "Elena Rodriguez", role: "Chief Regulatory Officer", bio: "Former regulator with 20+ years of experience in life sciences." },
            ].map((leader, i) => (
              <div key={i} className="bg-marble/5 p-12 rounded-[40px] border border-marble/10 shadow-sm">
                <div className="w-20 h-20 bg-marble rounded-full flex items-center justify-center mb-8 mx-auto overflow-hidden">
                   <User className="w-10 h-10 text-marble/40" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{leader.name}</h3>
                <p className="text-teal-accent text-sm font-bold uppercase tracking-widest mb-6 text-center">{leader.role}</p>
                <p className="text-marble/60 text-center leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Affiliations */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-20">Industry Affiliations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 grayscale">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                 <div className="w-32 h-12 bg-graphite rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-10">Join the Future of Compliance</h2>
          <Link 
            to="/contact" 
            className="inline-flex bg-graphite text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-graphite/90 transition-all hover:scale-105 items-center gap-3"
          >
            Talk to Our Team <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
