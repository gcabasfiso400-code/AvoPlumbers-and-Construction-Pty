export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="#2563EB" strokeWidth="8" />
                  <path
                    d="M30 70 L50 30 L70 70"
                    stroke="#EA580C"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 55 H60"
                    stroke="#2563EB"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Avo <span className="text-blue-500">Plumbers</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional plumbing and construction services in Durban. Quality workmanship and reliable service guaranteed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Emergency Plumbing</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Leak Detection</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Home Renovations</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Building Extensions</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Industrial Projects</a></li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>M579 Ntethe Road, KwaMashu M, KwaMashu, 4360</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0810886842" className="hover:text-blue-500 transition-colors">081 088 6842</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Sat: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {currentYear} Avo Plumbers and Construction (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
