export function Stats() {
  return (
    <section className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#1F4E79' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#2CA6A4' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#F28C38' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Trusted by Leading Institutions Across India</h2>
          <p className="text-white/80 text-lg">Delivering measurable results and transforming campus placement outcomes</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: '#2CA6A4' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold mb-2" style={{ color: '#4CAF50' }}>200+</div>
            <div className="text-white/80 font-medium">Partner Colleges</div>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: '#4CAF50' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold mb-2" style={{ color: '#4CAF50' }}>85%</div>
            <div className="text-white/80 font-medium">Placement Success</div>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: '#2CA6A4' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold mb-2" style={{ color: '#4CAF50' }}>50K+</div>
            <div className="text-white/80 font-medium">Students Trained</div>
          </div>
          
          <div className="text-center group">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg" style={{ backgroundColor: '#F28C38' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold mb-2" style={{ color: '#4CAF50' }}>500+</div>
            <div className="text-white/80 font-medium">Hiring Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
}
