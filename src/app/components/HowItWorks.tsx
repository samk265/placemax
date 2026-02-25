import { GraduationCap, BookOpen, Building2, Award, ArrowRight } from 'lucide-react';
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
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#F28C38', backgroundColor: '#F5F7FA' }}>
              Iterative Success Cycle
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1F4E79' }}>
            The Infinite Placement Optimizer
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            A continuous, four-stage feedback loop that evolves students into high-performance professionals
          </p>
        </div>

        {/* Iterative Flow Component */}
        <div className="relative">
          {/* Subtle Background Circle for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border-[40px] border-gray-50 rounded-full opacity-50"></div>

          {/* Desktop Loop View */}
          <div className="hidden lg:block relative py-20">
            {/* Main Connecting Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path
                d="M 15% 50% Q 50% 10% 85% 50% Q 50% 90% 15% 50%"
                fill="none"
                stroke="#2CA6A4"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="opacity-20 translate-y-4"
              />
            </svg>

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 !== 0;

                return (
                  <div
                    key={step.number}
                    className={`flex flex-col items-center text-center group transition-all duration-500 ${isEven ? 'mt-32' : '-mt-12'}`}
                  >
                    {/* Step Card */}
                    <div className="relative w-full">
                      <div
                        className="w-24 h-24 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl relative z-20 group-hover:scale-110 transition-transform duration-500 ring-8 ring-white"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                        <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1F4E79] font-black text-sm border-2 border-gray-50">
                          {step.number}
                        </span>
                      </div>

                      <div className="bg-white p-6 rounded-2xl shadow-xl border-2 group-hover:shadow-2xl transition-all duration-500 h-full relative" style={{ borderColor: 'transparent' }}>
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl"
                          style={{ backgroundColor: step.bgColor }}
                        ></div>

                        <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2" style={{ color: '#1F4E79' }}>
                          {step.title}
                          {(step.title.includes('AI') || step.description.includes('AI')) && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-[#F5F7FA] text-[#F28C38] border border-orange-100">BETA</span>
                          )}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Connection Icon for continuity */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-[40%] -right-4 translate-x-1/2 z-30 opacity-20 hidden lg:block">
                        <ArrowRight className="w-8 h-8 text-[#1F4E79]" />
                      </div>
                    )}

                    {index === steps.length - 1 && (
                      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-20 animate-pulse flex flex-col items-center gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F4E79]">Process Evolution</span>
                        <div className="w-1 h-12 bg-gradient-to-b from-[#2CA6A4] to-transparent"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Iterative Timeline */}
          <div className="lg:hidden space-y-8 relative">
            <div className="absolute left-10 top-12 bottom-12 w-1 border-l-2 border-dashed border-[#2CA6A4]/30"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex gap-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-xl flex-shrink-0 z-10 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <span className="text-[10px] text-white/80 font-bold mt-1">{step.number}</span>
                    </div>

                    <div className="bg-[#F5F7FA] p-6 rounded-2xl flex-1 border border-gray-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#1F4E79' }}>
                        {step.title}
                        {(step.title.includes('AI') || step.description.includes('AI')) && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-white/50 text-[#F28C38] border border-orange-100 uppercase">Beta</span>
                        )}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loop Back Connection for Mobile */}
            <div className="flex flex-col items-center pt-8 text-center opacity-40">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2CA6A4] to-[#F28C38] opacity-50"></div>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-4">Continuous Optimization Loop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
