import { Button } from './ui/button';
import { ArrowRight, FileCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#2CA6A4' }}>
      {/* Background Decorative Elements for Visual Interest without Images */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: '#F28C38' }}></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: '#4CAF50' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm mb-10 animate-fade-in shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}></span>
          <span className="text-sm font-bold text-white tracking-widest uppercase">AI-Native Campus Hiring Infrastructure</span>
          <div className="px-2 py-0.5 rounded text-[10px] font-black bg-[#F28C38] text-white ml-2 shadow-sm uppercase tracking-tighter">Beta</div>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-10">
          India's Leading <br className="hidden sm:block" />
          <span className="text-white/90">AI-Powered</span> <br className="hidden sm:block" />
          <span style={{ color: '#F28C38' }}>Training and Placement</span> Partner
        </h1>

        <div className="max-w-3xl mx-auto space-y-8 mb-14">
          <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
            End-to-end AI-integrated Training & Placement support for tier-2/3 colleges. Transform campus hiring with structured training, AI-powered matching, and guaranteed placement outcomes.
          </p>

          <div className="pt-4 border-t border-white/10">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed italic">
              We handle training, virtual placement drives, and job matching across Engineering, Management, Commerce & Science streams.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button
            asChild
            size="lg"
            className="text-xl px-12 py-8 shadow-2xl font-bold hover:scale-105 transition-all duration-300 ring-4 ring-white/10"
            style={{ backgroundColor: '#F28C38', color: 'white' }}
          >
            <a href="mailto:contact@placemax.in?subject=Request for Free Pilot&body=I am interested in a free pilot for our college.">
              Get a Free Pilot
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="text-xl px-12 py-8 border-2 font-bold hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm shadow-xl"
            style={{
              backgroundColor: 'white',
              color: '#1F4E79',
              borderColor: 'white'
            }}
          >
            <a href="mailto:contact@placemax.in?subject=Request for Free Assessment&body=I would like to request a free assessment for our students.">
              <FileCheck className="w-6 h-6 mr-3" />
              Get Free Assessment
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
