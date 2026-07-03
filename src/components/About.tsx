export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="images/construction-service.png"
                alt="Avo Plumbers and Construction Team"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative boxes */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl -z-0"></div>
            
            <div className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-lg z-20 hidden md:block">
              <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm tracking-wide uppercase">
              About Our Company
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Durban's Trusted Partner for <span className="text-blue-600">Plumbing</span> and <span className="text-orange-500">Construction</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in KwaMashu and serving the greater Durban area, Avo Plumbers and Construction (Pty) Ltd has built a reputation for excellence through dedication, skilled craftsmanship, and unwavering commitment to safety.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand that your property is one of your most valuable assets. That's why we approach every job—from a simple tap repair to a complex building extension—with the same level of professionalism and attention to detail. Our team of experienced professionals is equipped to handle residential, commercial, and industrial projects of any size.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Licensed & Certified",
                "Available for Emergencies",
                "Quality Guaranteed",
                "Competitive Pricing",
                "Safe Working Practices",
                "Timely Project Completion"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a
              href="#services"
              className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 group transition-colors"
            >
              Explore Our Services
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
