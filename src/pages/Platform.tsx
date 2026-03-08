import { motion } from 'motion/react';
import { Shield, Zap, Globe, Cpu, Database, Activity, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Platform() {
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
            Compliance at the <br />
            <span className="serif italic text-graphite/40">Speed of Regulation</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-graphite/60 max-w-2xl mx-auto leading-relaxed">
            The Verilance platform is a strategic operating system designed to turn regulatory complexity into a competitive advantage.
          </p>
        </div>
      </section>

      {/* Why Legacy Fails */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Why Legacy Compliance Fails</h2>
            <p className="text-xl text-graphite/60 leading-relaxed mb-10">
              Traditional compliance is reactive, manual, and disconnected from the core business. It relies on point-in-time snapshots that are obsolete the moment they are captured.
            </p>
            <div className="space-y-8">
              {[
                { title: "Static Snapshots", desc: "Compliance is treated as a periodic event rather than a continuous state." },
                { title: "Manual Interpretation", desc: "Legal teams spend thousands of hours manually mapping regulation to policy." },
                { title: "Operational Friction", desc: "Compliance processes slow down innovation and market entry." },
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

      {/* Intelligent Compliance System */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">Intelligent Compliance System</h2>
            <p className="text-xl text-graphite/60 max-w-2xl mx-auto">
              A unified platform that connects regulatory signals directly to operational actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Signal Intelligence", desc: "Real-time monitoring of global regulatory bodies, news, and legal updates." },
              { icon: Cpu, title: "Impact Engine", desc: "Automated analysis of how regulatory changes affect your specific business model." },
              { icon: Zap, title: "Action Orchestration", desc: "Dynamic workflow generation to implement changes across your organisation." },
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

      {/* Continuous Compliance Loop */}
      <section className="py-40 px-6 bg-graphite text-marble">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">The Loop in Action</h2>
            <p className="text-xl text-marble/60 leading-relaxed mb-10">
              Verilance creates a self-healing compliance ecosystem. As regulations change, the system automatically adjusts policies, updates workflows, and verifies compliance in real-time.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-teal-accent text-3xl font-bold mb-2">90%</div>
                <p className="text-marble/40 text-sm uppercase tracking-widest font-bold">Reduction in Manual Review</p>
              </div>
              <div>
                <div className="text-violet-accent text-3xl font-bold mb-2">24/7</div>
                <p className="text-marble/40 text-sm uppercase tracking-widest font-bold">Continuous Monitoring</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative aspect-square flex items-center justify-center">
             <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border border-marble/10 rounded-full border-dashed"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-marble rounded-2xl rotate-45 flex items-center justify-center">
                  <Activity className="w-12 h-12 text-graphite -rotate-45" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-20">Industries Served</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Banking", "Insurance", "Healthcare", "Energy"].map((industry, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-graphite/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-10">Ready to Evolve?</h2>
          <Link 
            to="/contact" 
            className="inline-flex bg-graphite text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-graphite/90 transition-all hover:scale-105 items-center gap-3"
          >
            Request a Demo <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
