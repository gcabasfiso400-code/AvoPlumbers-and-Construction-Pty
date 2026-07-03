export function Projects() {
  const projects = [
    {
      title: "Modern Home Renovation",
      category: "Construction",
      image: "/images/project-renovation.png",
    },
    {
      title: "Industrial Plumbing System",
      category: "Plumbing",
      image: "/images/project-industrial.png",
    },
    {
      title: "Commercial Office Build",
      category: "Construction",
      image: "/images/construction-service.png",
    },
    {
      title: "Residential Bathroom Remodel",
      category: "Plumbing",
      image: "/images/plumbing-service.png",
    },
    {
      title: "New Residential Home",
      category: "Construction",
      image: "/images/hero.png",
    },
    {
      title: "Leak Detection & Repair",
      category: "Plumbing",
      image: "/images/plumbing-service.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Our Portfolio
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-0">Featured Projects</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            Start Your Project With Us
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
