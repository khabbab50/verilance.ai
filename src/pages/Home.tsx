import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Shield, Zap, Globe, Cpu, Database, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignalFlow = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Abstract Intelligence Engine */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] border border-graphite/5 rounded-full flex items-center justify-center"
      >
        <div className="w-[200px] h-[200px] border border-graphite/10 rounded-full flex items-center justify-center">
          <div className="w-[100px] h-[100px] border border-graphite/20 rounded-full" />
        </div>
      </motion.div>

      {/* Central Core */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-24 h-24 bg-graphite rounded-2xl rotate-45 flex items-center justify-center shadow-2xl"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 bg-teal-accent rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)]" 
        />
      </motion.div>

      {/* Signal Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.cos((i * 30) * (Math.PI / 180)) * 400,
            y: Math.sin((i * 30) * (Math.PI / 180)) * 400,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeIn"
          }}
          className="absolute w-1.5 h-1.5 bg-teal-accent rounded-full"
        />
      ))}

      {/* Action Particles (Exiting) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`out-${i}`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: Math.cos((i * 45 + 22.5) * (Math.PI / 180)) * 500,
            y: Math.sin((i * 45 + 22.5) * (Math.PI / 180)) * 500,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: 2 + Math.random() * 5,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 bg-violet-accent rounded-full"
        />
      ))}
    </div>
  );
};

const ComplianceLoop = () => {
  const stages = [
    { name: 'Sense', icon: Globe, description: 'Continuous monitoring of global regulatory signals.' },
    { name: 'Understand', icon: Cpu, description: 'Intelligent interpretation of impact on your operations.' },
    { name: 'Respond', icon: Zap, description: 'Automated workflow orchestration for rapid action.' },
    { name: 'Assure', icon: Shield, description: 'Continuous verification and audit-ready reporting.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative py-20">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-graphite/10 hidden md:block -translate-y-1/2" />
      
      {stages.map((stage, i) => (
        <motion.div 
          key={stage.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="relative z-10 bg-white p-8 rounded-3xl border border-graphite/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 bg-marble rounded-xl flex items-center justify-center mb-6">
            <stage.icon className="w-6 h-6 text-graphite" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{stage.name}</h3>
          <p className="text-graphite/60 text-sm leading-relaxed">{stage.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            The Regulatory <br />
            <span className="serif italic text-graphite/40">Intelligence</span> Platform
          </h1>
          <p className="text-xl md:text-2xl text-graphite/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Turning regulatory change into clear, intelligent action.
            Helping organisations stay ahead of regulation without slowing down innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-graphite text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-graphite/90 transition-all hover:scale-105 flex items-center gap-2"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full text-lg font-medium hover:bg-marble transition-all border border-graphite/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>

        <div className="w-full max-w-6xl mt-20">
          <SignalFlow />
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
                Regulation Is Moving Faster Than Compliance Systems
              </h2>
              <p className="text-xl text-graphite/60 leading-relaxed mb-8">
                Organisations struggle with fragmented tools, manual interpretation, and static compliance processes. 
                The gap between regulatory intent and operational reality is widening.
              </p>
              <div className="space-y-6">
                {[
                  "Fragmented regulatory data silos",
                  "Manual, error-prone interpretation",
                  "Reactive, static compliance workflows",
                  "High operational friction"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-teal-accent rounded-full" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-square bg-marble rounded-[40px] overflow-hidden flex items-center justify-center p-12">
               <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-full h-full border border-graphite/5 rounded-3xl flex items-center justify-center"
               >
                  <div className="grid grid-cols-3 gap-4 w-full h-full p-8 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-graphite rounded-xl" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-graphite rounded-2xl rotate-45 flex items-center justify-center">
                      <Activity className="w-12 h-12 text-teal-accent rotate-[-45deg]" />
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Clarity */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-medium mb-10"
          >
            Clarity Without Complexity
          </motion.h2>
          <p className="text-2xl text-graphite/60 leading-relaxed">
            We transform the noise of global regulation into a continuous stream of intelligent action. 
            Verilance is not just a tool; it's an operating system for the modern regulated enterprise.
          </p>
        </div>
      </section>

      {/* Section 4: Loop */}
      <section className="py-40 px-6 bg-graphite text-marble overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-medium mb-6">The Continuous Compliance Loop</h2>
            <p className="text-xl text-marble/60 max-w-2xl">
              A self-reinforcing system that evolves with the regulatory landscape.
            </p>
          </div>
          
          <div className="relative">
            <ComplianceLoop />
          </div>
        </div>
      </section>

      {/* Section 5: Why This Matters */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium mb-8">Why This Matters</h2>
              <p className="text-xl text-graphite/60 leading-relaxed">
                The tension between innovation and compliance has long been a zero-sum game. 
                Verilance removes the trade-off, allowing you to move at the speed of your ambition while remaining perfectly aligned with regulatory requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-graphite/5 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Innovation Velocity</h3>
                <p className="text-graphite/60">Launch new products and enter new markets with confidence, knowing your compliance foundation is automated and intelligent.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-graphite/5 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Operational Resilience</h3>
                <p className="text-graphite/60">Reduce regulatory risk and eliminate manual bottlenecks that slow down your core business operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Industries */}
      <section className="py-40 px-6 bg-marble">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium mb-20 text-center">Built for Regulated Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Financial Services', icon: Database, desc: 'Banking, fintech, and asset management.' },
              { name: 'Life Sciences', icon: Activity, desc: 'Biotech, pharma, and medical devices.' },
              { name: 'Energy & Infrastructure', icon: Globe, desc: 'Utilities, renewables, and critical systems.' },
            ].map((industry, i) => (
              <motion.div 
                key={industry.name}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[40px] border border-graphite/5 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-marble rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <industry.icon className="w-8 h-8 text-graphite" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{industry.name}</h3>
                <p className="text-graphite/60">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Ecosystem */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Ecosystem Intelligence</h2>
            <p className="text-xl text-graphite/60 leading-relaxed">
              Regulatory insight doesn't exist in a vacuum. Verilance taps into a global ecosystem of regulatory bodies, industry leaders, and legal experts to provide a 360-degree view of the landscape.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-graphite rounded-full flex items-center justify-center overflow-hidden">
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-[80%] h-[80%] border border-marble/10 rounded-full border-dashed"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-20 h-20 text-teal-accent" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Trust */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium mb-12">Trust & Credibility</h2>
          <p className="text-xl text-graphite/60 leading-relaxed mb-16">
            Our leadership team brings decades of experience across AI platforms, regulated industries, and global enterprise transformation. We understand the complexity because we've lived it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-graphite/40 uppercase tracking-widest text-xs font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500M+</div>
              <div className="text-graphite/40 uppercase tracking-widest text-xs font-bold">Signals Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-graphite/40 uppercase tracking-widest text-xs font-bold">Audit Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-graphite text-marble text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-medium mb-10 leading-tight">
            Regulation Never Stops Evolving. <br />
            <span className="text-teal-accent">Neither Should Compliance.</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex bg-marble text-graphite px-10 py-5 rounded-full text-xl font-medium hover:bg-white transition-all hover:scale-105 items-center gap-3"
          >
            Request a Demo <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
