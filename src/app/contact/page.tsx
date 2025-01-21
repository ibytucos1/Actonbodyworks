import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative py-20 sm:py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto">
              Get in touch with London&apos;s trusted auto body repair specialists
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                      <a 
                        href="https://maps.app.goo.gl/gpcJfT4WyCuH8XYt6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-300 hover:text-white transition-colors"
                      >
                        219 Horn Ln, London W3 9ED
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                      <a 
                        href="tel:07476753022" 
                        className="text-zinc-300 hover:text-white transition-colors"
                      >
                        07476 753022
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Opening Hours</h3>
                      <div className="space-y-1 text-zinc-300">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Connect With Us</h2>
                <div className="space-y-4">
                  <p className="text-zinc-300">
                    Follow us on social media for updates, tips, and to see our latest work.
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1839905669374!2d-0.2690847230084392!3d51.51511297169583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760e42d3844b55%3A0x94c816423fc5e945!2s219%20Horn%20Ln%2C%20London%20W3%209ED!5e0!3m2!1sen!2suk!4v1705876144621!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
} 