import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-linear-to-r from-emerald-700 via-emerald-600 to-blue-600 py-32 md:py-40 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-yellow-300 font-bold text-lg tracking-widest uppercase">
                    Welcome to
                  </p>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                    Yerberia del Mexicano
                  </h1>
                  <p className="text-xl text-emerald-50 leading-relaxed">
                    Your local destination in Mesa, Arizona for traditional
                    herbs, cultural products, spiritual items, and everyday
                    essentials. At Yerberia del Mexicano, you’ll find a colorful
                    and diverse selection that celebrates community, tradition,
                    and well-being.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#explore"
                    className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    Explore Collections
                  </a>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition-all duration-300 text-center shadow-lg"
                  >
                    Visit Us
                  </a>
                </div>
              </div>
              {/* Right Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/IMG_5646.webp"
                  alt="Yerberia products and herbs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="explore" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
                Our Collections
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-emerald-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5648.webp"
                    alt="Herbs and remedies"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Traditional Herbs & Remedies
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Our shelves include teas, herbal capsules, natural healing
                    balms, and wellness supplements commonly used in traditional
                    medicine.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-emerald-600 rounded-full"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5644.webp"
                    alt="Bracelets and spiritual items"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Spiritual & Cultural Items
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Bracelets, rosaries, spiritual beads, candles, incense,
                    statues, and cultural products connected to healing
                    traditions and devotional practices.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5647.webp"
                    alt="Traditional clothing"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Traditional Clothing
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Vibrant garments and accessories celebrating authentic
                    cultural traditions.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5643.webp"
                    alt="Candies and snacks"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Mexican Candies & Snacks
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Colorful sweets, classic treats, and fun snacks your whole
                    family will love. Our candy section is packed with variety —
                    from lollipops and gummies to nostalgic Mexican favorites.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-emerald-600 rounded-full"></div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5645.webp"
                    alt="Decorative items"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Toys, Party Items & Seasonal Goods
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We carry kids’ toys, small novelties, and party essentials,
                    perfect for celebrations and everyday fun.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-600">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src="/IMG_5644.webp"
                    alt="Accessories"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Accessories & Everyday Items
                  </h3>
                  <p className="text-slate-600 text-sm">
                    From sunglasses to bracelets and household items, you’ll
                    always find something useful and affordable.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-linear-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Filled With Culture & Community
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg leading-relaxed text-emerald-50">
              Every aisle reflects the culture and values of the families we
              serve — warm, colorful, and welcoming. We’re proud to be a local
              business that keeps tradition alive through the products we offer.
            </p>
            <p className="text-lg leading-relaxed text-emerald-50">
              We&apos;re proud to be a local business in Mesa, Arizona that
              celebrates community, wellness, and the rich heritage of Mexican
              tradition through the products we offer and the connections we
              build.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
