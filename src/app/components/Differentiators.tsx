import { X, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';

export function Differentiators() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#2CA6A4', backgroundColor: '#F5F7FA' }}>
              What Sets Us Apart
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1F4E79' }}>
            Not Just Another Platform
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            PlaceMax is the intelligence layer behind campus hiring—purpose-built for scale and outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* What We're NOT */}
          <div className="lg:col-span-4">
            <Card className="border-2 shadow-lg h-full" style={{ borderColor: '#F28C38', backgroundColor: 'white' }}>
              <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F28C38', opacity: 0.1 }}>
                    <X className="w-6 h-6" style={{ color: '#F28C38' }} />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#F28C38' }}>We Are NOT</CardTitle>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3" style={{ color: '#1F4E79' }}>
                    <span className="text-xl mt-1" style={{ color: '#F28C38' }}>✕</span>
                    <span className="text-lg">A job portal</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: '#1F4E79' }}>
                    <span className="text-xl mt-1" style={{ color: '#F28C38' }}>✕</span>
                    <span className="text-lg">Just a training provider</span>
                  </li>
                  <li className="flex items-start gap-3" style={{ color: '#1F4E79' }}>
                    <span className="text-xl mt-1" style={{ color: '#F28C38' }}>✕</span>
                    <span className="text-lg">A generic SaaS tool</span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>

          {/* What We ARE */}
          <div className="lg:col-span-8">
            <Card className="border-2 shadow-lg h-full" style={{ borderColor: '#2CA6A4', backgroundColor: 'white' }}>
              <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2CA6A4' }}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl" style={{ color: '#2CA6A4' }}>We ARE</CardTitle>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1.5 flex-shrink-0" style={{ color: '#4CAF50' }}>✓</span>
                    <span className="text-lg" style={{ color: '#1F4E79', opacity: 0.8 }}>
                      <strong className="font-semibold" style={{ color: '#1F4E79' }}>The intelligence layer behind campus hiring</strong> – 
                      We orchestrate the entire T&P ecosystem with AI-driven insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1.5 flex-shrink-0" style={{ color: '#4CAF50' }}>✓</span>
                    <span className="text-lg" style={{ color: '#1F4E79', opacity: 0.8 }}>
                      <strong className="font-semibold" style={{ color: '#1F4E79' }}>An outcome-focused outsourcing partner</strong> – 
                      We guarantee placement rates through structured interventions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1.5 flex-shrink-0" style={{ color: '#4CAF50' }}>✓</span>
                    <span className="text-lg" style={{ color: '#1F4E79', opacity: 0.8 }}>
                      <strong className="font-semibold" style={{ color: '#1F4E79' }}>AI-native infrastructure for employability</strong> – 
                      Built for scale from day one with evolving AI capabilities
                    </span>
                  </li>
                </ul>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0" style={{ backgroundColor: '#2CA6A4' }}></div>
            <div className="relative p-12 lg:p-16 text-white">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8" style={{ color: '#4CAF50' }} />
              </div>
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-center">
                "We believe campus hiring should be intelligent, structured, and outcome-focused. 
                Currently in beta, PlaceMax is evolving into a fully AI-native employability 
                infrastructure designed for the next generation of campus recruitment."
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl shadow-xl p-10 border-2" style={{ backgroundColor: '#F5F7FA', borderColor: '#2CA6A4' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#1F4E79' }}>Our Vision</h3>
            </div>
            <p className="text-xl leading-relaxed" style={{ color: '#1F4E79', opacity: 0.8 }}>
              To become India's Best AI-powered fresher talent intelligence network - the infrastructure layer 
              that powers Training & Placements and campus hiring for emerging institutions and growing companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
