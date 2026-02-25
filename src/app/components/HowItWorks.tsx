import { GraduationCap, BookOpen, Building2, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const steps = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Student Profiling & Assessment',
    description: 'AI-powered analysis of student skills, aptitude, interests, and career aspirations to create comprehensive profiles.',
    bgColor: '#2CA6A4',
    borderColor: '#2CA6A4',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Structured Training Programs',
    description: 'Industry-aligned curriculum delivery with hands-on projects, soft skills development, and technical upskilling.',
    bgColor: '#F28C38',
    borderColor: '#F28C38',
  },
  {
    icon: Building2,
    number: '03',
    title: 'Corporate Matching & Drives',
    description: 'AI-powered matching engine connects qualified students with relevant opportunities. Managed end-to-end recruitment operations.',
    bgColor: '#2CA6A4',
    borderColor: '#2CA6A4',
  },
  {
    icon: Award,
    number: '04',
    title: 'Placement & Analytics',
    description: 'Final placement coordination, offer management, and comprehensive NIRF-aligned reporting with continuous improvement insights.',
    bgColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#F28C38', backgroundColor: '#F5F7FA' }}>
              Our Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1F4E79' }}>
            How PlaceMax Works
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            A seamless, four-stage process that transforms students into industry-ready professionals
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <Card 
                key={step.number}
                className="relative border-2 hover:shadow-2xl transition-all group overflow-hidden bg-white"
                style={{ borderColor: step.borderColor }}
              >
                {/* Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ backgroundColor: step.bgColor }}
                ></div>
                
                {/* Number Badge */}
                <div 
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl"
                  style={{ backgroundColor: step.bgColor }}
                >
                  {step.number}
                </div>

                <CardHeader className="pt-10 pb-8 px-8 space-y-5 relative">
                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl pr-20" style={{ color: '#1F4E79' }}>{step.title}</CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                    {step.description}
                  </CardDescription>
                </CardHeader>

                {/* Hover Effect Border */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: '#4CAF50' }}
                ></div>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Timeline */}
        <div className="relative">
          <div className="rounded-3xl shadow-xl p-10 border-2" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1F4E79' }}>
                Complete Journey Timeline
              </h3>
              <p style={{ color: '#1F4E79', opacity: 0.7 }}>From enrollment to placement in four structured phases</p>
            </div>
            
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connection Line */}
                <div 
                  className="absolute top-16 left-[12.5%] right-[12.5%] h-1 rounded-full"
                  style={{ backgroundColor: '#2CA6A4' }}
                ></div>
                
                {/* Steps */}
                <div className="grid grid-cols-4 gap-6 relative">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="text-center">
                        {/* Circle with Icon */}
                        <div 
                          className="w-32 h-32 rounded-3xl mx-auto mb-6 flex flex-col items-center justify-center shadow-2xl relative z-10 transform hover:scale-105 transition-transform"
                          style={{ backgroundColor: step.bgColor }}
                        >
                          <Icon className="w-12 h-12 text-white mb-2" />
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        
                        {/* Step Title */}
                        <div className="font-semibold mb-2 text-base px-2" style={{ color: '#1F4E79' }}>
                          {step.title}
                        </div>
                        
                        {/* Step Description - Short */}
                        <div className="text-sm leading-snug px-2" style={{ color: '#1F4E79', opacity: 0.6 }}>
                          {step.description.split('.')[0]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex gap-5">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span 
                            className="text-xs font-bold px-2 py-1 rounded" 
                            style={{ color: '#1F4E79', backgroundColor: 'white' }}
                          >
                            {step.number}
                          </span>
                          <h4 className="font-bold text-lg" style={{ color: '#1F4E79' }}>{step.title}</h4>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className="absolute left-10 top-24 w-0.5 h-8"
                        style={{ backgroundColor: '#2CA6A4', opacity: 0.3 }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
