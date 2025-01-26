import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative py-20 sm:py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg sm:text-xl text-zinc-100 font-medium max-w-3xl mx-auto">
              Professional auto body repairs and services by certified experts
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Acton Bodyworks is a trusted name in the London community, providing exceptional auto body repair services. Our commitment to quality and customer satisfaction has made us a reliable choice for vehicle repairs.
                </p>
                <p>
                  We&apos;re committed to providing exceptional results with attention to every detail.
                </p>
                <p>
                  We continuously invest in the latest technology and training to ensure we provide the highest quality repairs possible. Our team of certified technicians brings extensive expertise to every project.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/WhatsApp Image 2024-12-26 at 20.09.47 (11).jpeg"
                alt="Inside our modern auto repair workshop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-zinc-100 font-medium max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
              <p className="text-zinc-400">Delivering exceptional results with attention to every detail</p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
              <p className="text-zinc-400">Honest, transparent service you can trust</p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-zinc-400">Using the latest technology and techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-red-600 to-red-500 p-8 sm:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
                <p className="text-lg text-red-50 mb-8">
                  Experience the difference of working with London&apos;s trusted auto body repair specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:07476753022"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-red-600 font-semibold hover:bg-red-50 transition-colors"
                  >
                    Call Now: 07476 753022
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black/20 text-white font-semibold hover:bg-black/30 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
} 