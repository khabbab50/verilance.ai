import { motion } from 'motion/react';
import { Shield, Zap, Globe, Cpu, Database, Activity, Layers, ArrowRight, TrendingUp, Target, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Investors() {
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
            Defining a <br />
            <span className="serif italic text-graphite/40">New Category</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl mx-auto leading-relaxed">
            Verilance is creating the category of Regulatory Intelligence. We are building the operating system for the modern regulated enterprise.
          </p>
        </div>
      </section>

      {/* Category Narrative */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Category Narrative</h2>
            <p className="text-xl text-graphite/60 leading-relaxed mb-10">
              The regulatory landscape is undergoing a fundamental shift. As regulations become more complex and dynamic, traditional compliance systems are no longer sufficient. Verilance is the first platform to bridge the gap between regulatory intent and operational reality.
            </p>
            <div className="space-y-8">
              {[
                { title: "The Regulatory Shift", desc: "Regulations are moving from static rules to dynamic, data-driven requirements." },
                { title: "The Compliance Gap", desc: "Traditional systems are unable to keep pace with the velocity of change." },
                { title: "The Verilance Advantage", desc: "A unified platform that turns regulatory intelligence into operational action." },
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
                <TrendingUp className="w-20 h-20 text-teal-accent -rotate-12" />
             </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Market Opportunity</h2>
            <p className="text-xl text-graphite/60 max-w-2xl mx-auto">
              The global compliance market is massive, fragmented, and ripe for disruption.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Total Addressable Market", desc: "A multi-billion dollar market across financial services, life sciences, and energy." },
              { icon: Users, title: "Ecosystem Advantage", desc: "A global network of regulatory bodies, industry leaders, and legal experts." },
              { icon: Briefcase, title: "Leadership Credibility", desc: "A team with decades of experience in AI, regulation, and enterprise transformation." },
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

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-10">Investor Enquiries</h2>
          <Link 
            to="/contact" 
            className="inline-flex bg-graphite text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-graphite/90 transition-all hover:scale-105 items-center gap-3"
          >
            Get in Touch <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
