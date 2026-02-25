import { Card, CardHeader } from './ui/card';
import { TrendingUp, Quote } from 'lucide-react';

const testimonials = [
  {
    initials: 'EC',
    name: 'Engineering College',
    tier: 'Tier-2 Institution',
    before: '35%',
    after: '81%',
    increase: '+131%',
    quote: 'PlaceMax transformed our placement cell. We went from 12 companies visiting to 55+ in one year.',
    color: '#2CA6A4',
  },
  {
    initials: 'MC',
    name: 'Management College',
    tier: 'Tier-3 Institution',
    before: '48%',
    after: '85%',
    increase: '+77%',
    quote: 'The AI matching system connected our students with companies we never had access to before.',
    color: '#F28C38',
  },
  {
    initials: 'TI',
    name: 'Technical Institute',
    tier: 'Tier-2 Institution',
    before: '42%',
    after: '88%',
    increase: '+109%',
    quote: 'Average package jumped from ₹3.5L to ₹6.2L. Our students now compete with tier-1 colleges.',
    color: '#4CAF50',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#4CAF50', backgroundColor: '#F5F7FA' }}>
              Success Stories | Client Results
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            150+ Colleges Trust PlaceMax
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            Real placement results from tier 2/3 colleges across Engineering, Management, Commerce & Science
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 bg-white hover:shadow-2xl transition-all overflow-hidden relative group"
              style={{ borderColor: testimonial.color }}
            >
              {/* Background Decoration */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: testimonial.color }}
              ></div>

              <CardHeader className="p-8 relative">
                {/* Initials Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    <span className="text-white font-bold text-xl">{testimonial.initials}</span>
                  </div>
                  <Quote className="w-8 h-8 opacity-20" style={{ color: testimonial.color }} />
                </div>

                {/* College Info */}
                <h3 className="text-xl font-bold mb-1" style={{ color: '#1F4E79' }}>
                  {testimonial.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: '#1F4E79', opacity: 0.6 }}>
                  {testimonial.tier}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#1F4E79', opacity: 0.6 }}>Before</div>
                    <div className="text-2xl font-bold" style={{ color: '#1F4E79', opacity: 0.5 }}>
                      {testimonial.before}
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6" style={{ color: '#4CAF50' }} />
                  <div>
                    <div className="text-xs mb-1" style={{ color: '#1F4E79', opacity: 0.6 }}>After</div>
                    <div className="text-2xl font-bold" style={{ color: '#4CAF50' }}>
                      {testimonial.after}
                    </div>
                  </div>
                </div>

                {/* Increase Badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-full mb-6 font-bold"
                  style={{ backgroundColor: '#4CAF50', color: 'white' }}
                >
                  {testimonial.increase} increase
                </div>

                {/* Quote */}
                <p className="text-base leading-relaxed italic" style={{ color: '#1F4E79', opacity: 0.8 }}>
                  "{testimonial.quote}"
                </p>
              </CardHeader>

              {/* Bottom Accent */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{ backgroundColor: testimonial.color }}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
