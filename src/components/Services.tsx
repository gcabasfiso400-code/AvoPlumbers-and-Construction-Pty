export function Services() {
  const plumbingServices = [
    "General Plumbing", "Leak Detection", "Burst Pipe Repairs", "Drain Cleaning",
    "Geyser Installation & Repairs", "Bathroom Plumbing", "Kitchen Plumbing", "Emergency Plumbing"
  ];

  const constructionServices = [
    "Residential Construction", "Commercial Construction", "Industrial Projects", "Home Renovations",
    "Building Extensions", "Bricklaying", "Roofing", "Painting", "General Maintenance"
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm tracking-wide uppercase">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Specialist Services</h2>
          <p className="text-lg text-gray-600">
            We provide a comprehensive range of plumbing and construction services tailored to meet the specific needs of residential, commercial, and industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plumbing Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="h-64 relative overflow-hidden">
              <img
                src="images/plumbing-service.png"
                alt="Plumbing Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
              <div className="absolute top-6 left-6 bg-blue-600 p-4 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plumbing Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {plumbingServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                Request Plumbing Quote
              </a>
            </div>
          </div>

          {/* Construction Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group">
            <div className="h-64 relative overflow-hidden">
              <img
                src="images/construction-service.png"
                alt="Construction Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-orange-900/40 group-hover:bg-orange-900/20 transition-colors"></div>
              <div className="absolute top-6 left-6 bg-orange-600 p-4 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {constructionServices.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-4 text-white font-bold hover:bg-orange-700 transition-colors"
              >
                Request Construction Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
