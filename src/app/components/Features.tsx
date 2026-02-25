import { Brain, Users, Target, TrendingUp, BarChart3, Activity, Network, Headphones } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Student Profiling',
    description: 'Deep learning algorithms analyze student skills, aptitude, and career fit to match them with optimal opportunities.',
    iconBg: '#2CA6A4',
    accentColor: '#4CAF50',
  },
  {
    icon: Users,
    title: 'Structured Training Programs',
    description: 'Industry-aligned curriculum designed to build job-ready skills across all streams with measurable outcomes. Comprehensive aptitude, soft skills, and technical training modules with practice tests.',
    iconBg: '#F28C38',
    accentColor: '#4CAF50',
  },
  {
    icon: Target,
    title: 'Managed Campus Recruitment',
    description: 'End-to-end outsourced recruitment operations from corporate engagement to final placement coordination.',
    iconBg: '#2CA6A4',
    accentColor: '#F28C38',
  },
  {
    icon: TrendingUp,
    title: 'Guaranteed Placement Rates',
    description: 'Data-driven approach ensuring consistent placement outcomes through structured interventions and support.',
    iconBg: '#4CAF50',
    accentColor: '#2CA6A4',
  },
  {
    icon: BarChart3,
    title: 'NIRF Analytics & Reporting',
    description: 'Comprehensive analytics aligned with NIRF parameters to improve college rankings and accreditation metrics.',
    iconBg: '#2CA6A4',
    accentColor: '#F28C38',
  },
  {
    icon: Activity,
    title: 'Real-Time Analytics',
    description: 'Live dashboards showing placement progress, company pipeline, and student readiness metrics.',
    iconBg: '#F28C38',
    accentColor: '#4CAF50',
  },
  {
    icon: Network,
    title: '500+ Company Network',
    description: 'Direct access to our curated network of hiring partners across IT, Core, BFSI, Consulting, Sales, Marketing, HR & Operations.',
    iconBg: '#4CAF50',
    accentColor: '#2CA6A4',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Dedicated placement manager for your college with 24/7 support during drives.',
    iconBg: '#2CA6A4',
    accentColor: '#F28C38',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#2CA6A4', backgroundColor: 'white' }}>
              Our Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            Intelligent, Structured, Outcome-Focused
          </h2>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#2CA6A4' }}>
            Complete Training & Placement Management Platform
          </h3>
          <p className="text-xl leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
            PlaceMax combines cutting-edge AI technology with proven placement methodologies 
            to create a seamless bridge between talent and opportunity.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-2 transition-all hover:shadow-2xl group relative overflow-hidden bg-white"
                style={{ borderColor: '#E5E7EB' }}
              >
                {/* Hover Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ backgroundColor: feature.iconBg }}
                ></div>
                
                <CardHeader className="relative p-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: feature.iconBg }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-3" style={{ color: '#1F4E79' }}>{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                {/* Accent Border on Hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: feature.accentColor }}
                ></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
