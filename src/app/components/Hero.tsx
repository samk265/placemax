import { Button } from './ui/button';
import { ArrowRight, FileCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2CA6A4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#4CAF50' }}></span>
              <span className="text-sm font-medium text-white">AI-Native Campus Hiring Infrastructure</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
              India's Leading AI-Powered Training and Placement Partner
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              End-to-end AI-integrated Training & Placement support for tier-2/3 colleges. Transform campus hiring with structured training, AI-powered matching, and guaranteed placement outcomes.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              We handle training, virtual placement drives, and job matching across Engineering, Management, Commerce & Science streams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-2xl font-semibold hover:scale-105 transition-transform"
                style={{ backgroundColor: '#F28C38', color: 'white' }}
              >
                Get a Free Pilot
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 border-2 font-semibold hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'white',
                  color: '#1F4E79',
                  borderColor: 'white'
                }}
              >
                <FileCheck className="w-5 h-5 mr-2" />
                Get Free Assessment
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">85%</div>
                <div className="text-sm text-white/80 mt-1">Placement Success</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80 mt-1">Hiring Partners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/80 mt-1">Students Trained</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30" style={{ backgroundColor: '#F28C38' }}></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwZ3JhcGh8ZW58MXx8fHwxNzcwOTU1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI-powered placement analytics dashboard"
                className="w-full h-[550px] object-cover"
              />
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm mb-1" style={{ color: '#1F4E79' }}>Real-time Analytics</div>
                    <div className="text-2xl font-bold" style={{ color: '#1F4E79' }}>AI-Powered Insights</div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
