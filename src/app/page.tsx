import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <Image
          src="/images/pexels-radu-daniel-mrd-1938968-7391656.jpg"
          alt="Auto repair shop"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="relative z-20 h-full flex flex-col justify-center pt-32 sm:pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Content */}
              <div className="text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm sm:text-base">Available to Book</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Comprehensive Vehicle Repairs & Premium Service
                </h1>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
                  We have been providing our clients with expert vehicle crash repairs and
                  bodywork services for over 20 years.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-8 lg:mb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center text-sm">✓</div>
                    <span className="text-sm sm:text-base">Bodywork Specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center text-sm">✓</div>
                    <span className="text-sm sm:text-base">Competitive Pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center text-sm">✓</div>
                    <span className="text-sm sm:text-base">20+ Years Experience</span>
                  </div>
                </div>
                {/* Mobile Contact Form */}
                <div className="lg:hidden mt-8">
                  <ContactForm />
                </div>
              </div>

              {/* Desktop Contact Form */}
              <div className="hidden lg:block">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Acton Bodyworks</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We deliver excellence in every repair, backed by years of experience and satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years in Business */}
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">20+</div>
              <div className="text-white font-semibold mb-2">Years Experience</div>
              <p className="text-zinc-400 text-sm">Serving our community with expert auto repairs since 2004</p>
            </div>

            {/* Completed Projects */}
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">5000+</div>
              <div className="text-white font-semibold mb-2">Repairs Completed</div>
              <p className="text-zinc-400 text-sm">Successfully restored vehicles to their pre-accident condition</p>
            </div>

            {/* Expert Team */}
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-white font-semibold mb-2">Certified Team</div>
              <p className="text-zinc-400 text-sm">Fully qualified technicians with ongoing training</p>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
              <div className="text-white font-semibold mb-2">Customer Satisfaction</div>
              <p className="text-zinc-400 text-sm">Consistently rated 5 stars by our satisfied customers</p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Warranty Guaranteed</h3>
                <p className="text-zinc-400 text-sm">All our repairs come with comprehensive warranty coverage</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-zinc-400 text-sm">Efficient service without compromising on quality</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-zinc-400 text-sm">Transparent pricing with no hidden costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logo Slider */}
      <section className="py-16 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-12">
            Trusted by Leading Companies
          </h2>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
            <div className="group flex items-center gap-12 animate-scroll hover:[animation-play-state:paused]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div 
                  key={num} 
                  className="flex-shrink-0 w-[140px] h-[70px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <Image
                    src={`/images/logo-${num}.png`}
                    alt={`Trusted Company ${num}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div 
                  key={`dup-${num}`} 
                  className="flex-shrink-0 w-[140px] h-[70px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
                    src={`/images/logo-${num}.png`}
                    alt={`Trusted Company ${num}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Professional auto repair services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collision Repair */}
            <Link 
              href="/services#collision-repair"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.773-4.5 2m4.5 4L3 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collision Repair</h3>
              <p className="text-zinc-400 mb-4">Expert repair for vehicles involved in collisions, restoring them to pre-accident condition.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Paint Services */}
            <Link 
              href="/services#paint-services"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Paint Services</h3>
              <p className="text-zinc-400 mb-4">Professional paint services with precise color matching and flawless finish.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Mechanical Repairs */}
            <Link 
              href="/services#mechanical-repairs"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mechanical Repairs</h3>
              <p className="text-zinc-400 mb-4">Comprehensive mechanical repairs using state-of-the-art equipment and expert technicians.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Body Work */}
            <Link 
              href="/services#body-work"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Body Work</h3>
              <p className="text-zinc-400 mb-4">Expert body work repairs to restore your vehicle's appearance and structural integrity.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Diagnostics */}
            <Link 
              href="/services#diagnostics"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnostics</h3>
              <p className="text-zinc-400 mb-4">Advanced diagnostic services to identify and resolve vehicle issues accurately.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Custom Work */}
            <Link 
              href="/services#custom-work"
              className="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-zinc-800"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Work</h3>
              <p className="text-zinc-400 mb-4">Specialized custom work to enhance your vehicle's performance and appearance.</p>
              <span className="text-red-500 font-medium hover:text-red-400 inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Your Vehicle Fixed?</h2>
                <p className="text-lg text-red-50 mb-8">
                  Experience top-quality auto repair services with our expert team. We offer competitive pricing, quick turnaround times, and guaranteed satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:07476753022"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-red-600 font-semibold hover:bg-red-50 transition-colors"
                  >
                    Call Now: 07476 753022
          </a>
          <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black/20 text-white font-semibold hover:bg-black/30 transition-colors"
                  >
                    Book an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
          <Image
                    src="/images/sitelogo.png"
                    alt="Acton Bodyworks"
                    width={200}
                    height={67}
                    className="w-auto h-14 sm:h-16"
                  />
                </Link>
              </div>
              <div className="space-y-3 text-zinc-400">
                <p>Professional auto body repairs and services in London.</p>
                <a 
                  href="https://maps.app.goo.gl/gpcJfT4WyCuH8XYt6" 
          target="_blank"
          rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  219 Horn Ln, London W3 9ED
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-zinc-400">
                <p className="flex justify-between">Monday <span>9am–6pm</span></p>
                <p className="flex justify-between">Tuesday <span>9am–6pm</span></p>
                <p className="flex justify-between">Wednesday <span>9am–6pm</span></p>
                <p className="flex justify-between">Thursday <span>9am–6pm</span></p>
                <p className="flex justify-between">Friday <span>9am–6pm</span></p>
                <p className="flex justify-between">Saturday <span>9am–6pm</span></p>
                <p className="flex justify-between">Sunday <span>Closed</span></p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Services</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-zinc-400 hover:text-white transition-colors">Get a Quote</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-3 text-zinc-400">
                <a 
                  href="tel:07476753022" 
                  className="block hover:text-white transition-colors"
                >
                  Phone: 07476 753022
                </a>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Acton Bodyworks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
