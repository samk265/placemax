import { Card, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Building, Users, TrendingUp, Target, Search, Calendar } from 'lucide-react';

export function ForWhom() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            Designed for Growth & Success
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            Transform outcomes for colleges and companies alike
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Colleges */}
          <Card className="border-2 bg-white shadow-lg hover:shadow-2xl transition-all" style={{ borderColor: '#2CA6A4' }}>
            <CardHeader className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#2CA6A4' }}>
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl" style={{ color: '#1F4E79' }}>For Colleges</CardTitle>
                  <p className="text-lg mt-1" style={{ color: '#2CA6A4' }}>Elevate your placement ecosystem</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      Industry-Aligned Curriculum
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Structured domain tracks delivered systematically
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      Centralized Network Access
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Connect with 150+ verified hiring partners instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      Real-Time Performance Analytics
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Data-backed placement strategy and outcome tracking
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* For Companies */}
          <Card className="border-2 bg-white shadow-lg hover:shadow-2xl transition-all" style={{ borderColor: '#F28C38' }}>
            <CardHeader className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl" style={{ color: '#1F4E79' }}>For Companies</CardTitle>
                  <p className="text-lg mt-1" style={{ color: '#F28C38' }}>Streamline fresher hiring at scale</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      Pre-Trained Talent Pool
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Access 10K+ skill-verified freshers ready to contribute
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      AI-Ranked Candidates
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Smart matching based on your exact job requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4CAF50' }}>
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1F4E79' }}>
                      One Platform, Multiple Campuses
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#1F4E79', opacity: 0.7 }}>
                      Bulk hiring coordination across 50+ partner institutions
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
