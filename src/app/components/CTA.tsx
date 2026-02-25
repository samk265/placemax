import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Background */}
          <div className="absolute inset-0" style={{ backgroundColor: '#2CA6A4' }}></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#F28C38' }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#4CAF50' }}></div>
          </div>

          <div className="relative px-8 py-20 lg:px-16 lg:py-24 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Schedule Your Free Consultation</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform Campus Hiring?
              </h2>
              <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed">
                Join 200+ colleges already leveraging PlaceMax to achieve industry-leading placement outcomes. 
                See how AI-powered intelligence can revolutionize your T&P operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 shadow-xl font-semibold hover:scale-105 transition-transform"
                  style={{ backgroundColor: '#F28C38', color: 'white' }}
                >
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  className="border-2 text-lg px-10 py-7 font-semibold hover:scale-105 transition-transform"
                  style={{ 
                    backgroundColor: 'white',
                    color: '#1F4E79',
                    borderColor: 'white'
                  }}
                >
                  Download Brochure
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 border-t border-white/20">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">contact@placemax.ai</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+91 XXX-XXX-XXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
