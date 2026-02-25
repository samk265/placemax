import { AlertCircle, TrendingDown, DollarSign, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';

export function Crisis() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#F28C38', backgroundColor: 'white' }}>
              What We Solve
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            India's Graduate Employability Crisis from 2024
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            The Reality of Campus Placements in India
          </p>
          <p className="text-base mt-4" style={{ color: '#1F4E79', opacity: 0.6 }}>
            UGC/AICTE/NASSCOM Reports 2024: Ground reality of graduate employability across Indian higher education
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <Card className="border-2 bg-white overflow-hidden relative" style={{ borderColor: '#F28C38' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ backgroundColor: '#F28C38' }}></div>
            <CardHeader className="p-8 relative">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold mb-3" style={{ color: '#F28C38' }}>53%</div>
              <CardTitle className="text-xl mb-2" style={{ color: '#1F4E79' }}>Graduates Unplaced</CardTitle>
              <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                More than half of Indian graduates remain unemployed 6 months post-graduation (AICTE 2024)
              </p>
            </CardHeader>
          </Card>

          {/* Stat 2 */}
          <Card className="border-2 bg-white overflow-hidden relative" style={{ borderColor: '#F28C38' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ backgroundColor: '#F28C38' }}></div>
            <CardHeader className="p-8 relative">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold mb-3" style={{ color: '#F28C38' }}>46%</div>
              <CardTitle className="text-xl mb-2" style={{ color: '#1F4E79' }}>Employability Rate</CardTitle>
              <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                Only 46% of Indian graduates are considered employable by industry standards (NASSCOM)
              </p>
            </CardHeader>
          </Card>

          {/* Stat 3 */}
          <Card className="border-2 bg-white overflow-hidden relative" style={{ borderColor: '#2CA6A4' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ backgroundColor: '#2CA6A4' }}></div>
            <CardHeader className="p-8 relative">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg" style={{ backgroundColor: '#2CA6A4' }}>
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold mb-3" style={{ color: '#2CA6A4' }}>₹2.5L</div>
              <CardTitle className="text-xl mb-2" style={{ color: '#1F4E79' }}>Average Starting CTC</CardTitle>
              <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                National average for placed graduates across all streams and institutions
              </p>
            </CardHeader>
          </Card>

          {/* Stat 4 */}
          <Card className="border-2 bg-white overflow-hidden relative" style={{ borderColor: '#F28C38' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ backgroundColor: '#F28C38' }}></div>
            <CardHeader className="p-8 relative">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-5xl font-bold mb-3" style={{ color: '#F28C38' }}>3:1</div>
              <CardTitle className="text-xl mb-2" style={{ color: '#1F4E79' }}>Student-TPO Ratio</CardTitle>
              <p className="text-sm leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                Average 800+ students per placement officer - 3x the recommended capacity
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
