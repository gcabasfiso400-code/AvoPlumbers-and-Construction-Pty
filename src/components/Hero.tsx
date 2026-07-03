export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Construction and Plumbing Service"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Reliable <span className="text-blue-500">Plumbing</span> & <span className="text-orange-500">Construction</span> Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Professional solutions for residential, commercial, and industrial projects in Durban and surrounding areas. From emergency repairs to full-scale building projects, we deliver quality you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-500 transition-all hover:-translate-y-1"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:0810886842"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              Call Now – 081 088 6842
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave bottom shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
