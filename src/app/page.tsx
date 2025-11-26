import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[80vh] min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/mainBackground.jpg"
              alt="Yerberia store background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/80 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 max-w-2xl">
                <div className="space-y-6 animate-fade-in">
                  <div className="inline-block">
                    <p className="text-yellow-300 font-bold text-sm tracking-widest uppercase px-4 py-2 bg-yellow-400/20 rounded-full w-fit backdrop-blur-sm">
                      🌿 Welcome to
                    </p>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-balance">
                    Yerberia del Mexicano
                  </h1>
                  <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed font-medium">
                    Your gateway to authentic Mexican herbs, cultural treasures,
                    and community spirit in Mesa, Arizona
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href="#explore"
                    className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    Explore Collections
                  </a>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 text-center shadow-lg border border-white/30 hover:border-white/50"
                  >
                    Visit Us Today
                  </a>
                </div>
              </div>

              {/* Right side - decorative element with stats */}
              <div className="hidden lg:flex flex-col justify-center items-end space-y-8">
                <div className=" space-y-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <p className="text-yellow-300 text-sm font-bold uppercase tracking-widest mb-2">
                      Our Mission
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                      Celebrating tradition, wellness, and community through
                      authentic products and genuine connections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="text-white text-center">
              <p className="text-sm mb-2">Scroll to explore</p>
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        <section id="explore" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4">
                Our Collections
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-yellow-300 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ">
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
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ">
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
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ">
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
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ">
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
                    We carry kids' toys, small novelties, and party essentials,
                    perfect for celebrations and everyday fun.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ">
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
                    From sunglasses to bracelets and household items, you'll
                    always find something useful and affordable.
                  </p>
                  <div className="mt-4 h-1 w-12 bg-linear-to-r from-yellow-300 to-yellow-600  rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/productivity.jpg"
              alt="Community celebration background"
              fill
              className="object-cover"
            />
            {/* Multi-layer overlay for depth */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-emerald-800/75 to-blue-900/85"></div> */}
            <div className="absolute inset-0 bg-black/80 via-transparent to-emerald-500/5"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block">
                      <span className="text-yellow-300 font-bold text-sm uppercase tracking-widest px-4 py-2 bg-yellow-400/20 rounded-full backdrop-blur-sm">
                        💚 Our Heart
                      </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white leading-tight text-balance">
                      Filled With Culture & Community
                    </h2>
                  </div>

                  <div className="space-y-4 text-lg">
                    <p className="text-emerald-50 leading-relaxed">
                      Every aisle reflects the culture and values of the
                      families we serve — warm, colorful, and welcoming.
                      We&apos;re proud to be a local business that keeps
                      tradition alive through the products we offer.
                    </p>
                    <p className="text-emerald-100 leading-relaxed">
                      We celebrate community, wellness, and the rich heritage of
                      Mexican tradition through genuine connections and
                      authentic products that connect families to their roots.
                    </p>
                  </div>

                  {/* Stats or highlights */}
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <p className="text-yellow-300 text-2xl font-black">
                        100%
                      </p>
                      <p className="text-emerald-50 text-sm">
                        Authentic Products
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <p className="text-yellow-300 text-2xl font-black">
                        Local
                      </p>
                      <p className="text-emerald-50 text-sm">
                        Mesa-Based Family
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right visual element */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 rounded-3xl p-12 backdrop-blur-sm border border-white/20">
                      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/30 space-y-4">
                        <div className="h-3 w-full bg-yellow-400/30 rounded-full"></div>
                        <div className="h-3 w-4/5 bg-emerald-400/30 rounded-full"></div>
                        <div className="h-3 w-3/4 bg-blue-400/30 rounded-full"></div>
                      </div>
                      <div className="mt-6 text-center">
                        <p className="text-emerald-50 text-sm italic">
                          Celebrating Heritage,
                        </p>
                        <p className="text-yellow-300 text-2xl font-black">
                          Building Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
