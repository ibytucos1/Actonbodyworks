import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto">
              Professional auto body repairs and services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Collision Repair */}
      <section id="collision-repair" className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/rearend.jpeg"
                alt="Collision repair service"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Collision Repair</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Our expert collision repair service restores your vehicle to its pre-accident condition with precision and care. We handle everything from minor dents to major collision damage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Frame straightening and structural repairs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Panel replacement and alignment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Expert color matching and painting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Services */}
      <section id="paint-services" className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/WhatsApp Image 2024-12-26 at 20.09.47 (5).jpeg"
                alt="Paint services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:order-1 lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Paint Services</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Our professional paint services ensure your vehicle looks its absolute best. Using state-of-the-art technology and premium materials, we deliver flawless finishes every time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Precise color matching technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Full vehicle resprays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Scratch and paint correction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanical Repairs */}
      <section id="mechanical-repairs" className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/mechanic.jpg"
                alt="Mechanical repairs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Mechanical Repairs</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Our skilled technicians provide comprehensive mechanical repair services to keep your vehicle running at its best. We use advanced diagnostic tools and quality parts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Engine diagnostics and repair</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Suspension and steering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Brake system maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Work */}
      <section id="body-work" className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/WhatsApp Image 2024-12-26 at 20.09.46.jpeg"
                alt="Body work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:order-1 lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Body Work</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Our body work services restore your vehicle&apos;s appearance and structural integrity. From minor dents to major repairs, we ensure quality results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Dent removal and repair</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Rust repair and prevention</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Panel replacement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics */}
      <section id="diagnostics" className="py-16 sm:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/diagnostic.jpg"
                alt="Diagnostic equipment and tools"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                loading="eager"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Diagnostics</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Using advanced diagnostic equipment, we accurately identify and resolve vehicle issues. Our comprehensive testing ensures precise problem identification.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Computer diagnostics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Electrical system testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Performance analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Work */}
      <section id="custom-work" className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/hero.jpg"
                alt="Custom work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="lg:order-1 lg:pr-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Custom Work</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Transform your vehicle with our custom work services. From performance upgrades to aesthetic modifications, we bring your vision to life.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Custom paint and finishes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Performance modifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span>Interior customization</span>
                  </li>
                </ul>
              </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-lg text-red-50 mb-8">
                  Contact us today for a free consultation and quote on your vehicle repair needs.
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