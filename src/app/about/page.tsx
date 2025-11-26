import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="">
        <section className="bg-emerald-50  py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-4">Our Story</h1>
            <p className="text-xl text-slate-700">
              A Store Filled With Culture & Community
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl font-black text-slate-900 mb-4">
                  Yerberia del Mexicano
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Yerberia del Mexicano is a family-run shop dedicated to
                  preserving and sharing the traditions, remedies, and cultural
                  items that many of us grew up with. From herbal supplements to
                  spiritual bracelets and Mexican candies, we&apos;ve built a
                  store where the community can find comfort, healing, and
                  nostalgia.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl ">
              <Image
                src="/aboutImage.jpg"
                alt="Close-up of herbal products"
                width={500}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-4 text-center">
              What We Believe In
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-300 to-yellow-600 mx-auto mb-12 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-emerald-50 rounded-xl p-8 shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  Tradition
                </h3>
                <p className="text-slate-700">
                  Many of our products come from long-passed-down cultural
                  practices.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  Wellness
                </h3>
                <p className="text-slate-700">
                  We offer herbs, teas, and natural supplements that support
                  everyday health.
                </p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-8 shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-yellow-700 mb-3">
                  Culture
                </h3>
                <p className="text-slate-700">
                  From vibrant accessories to spiritual items, we celebrate the
                  customs that shape our community.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-8 shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  Family
                </h3>
                <p className="text-slate-700">
                  As a locally owned business, we treat our customers like
                  family.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-4 text-center">
              A Look Inside Our Store
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-300 to-yellow-600 mx-auto mb-12 rounded-full"></div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Walking into Yerberia del Mexicano means stepping into a space
              filled with color and character. Shelves lined with herbs and
              supplements, displays full of bracelets and spiritual charms,
              racks of sunglasses, rows of toys, candy stands, and cultural
              decorations create a uniquely warm and inviting atmosphere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-2xl  hover:shadow-xl transition">
                <Image
                  src="/IMG_5644.webp"
                  alt="Beaded bracelets and spiritual items"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition">
                <Image
                  src="/IMG_5646.webp"
                  alt="Shelves of herbs and supplements"
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50  rounded-xl p-12  shadow-lg">
            <h2 className="text-4xl font-black mb-4">Our Team</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Led by <strong>Jose Alfredo Armenta Ibarra</strong>, our team is
              committed to offering personal guidance and helping customers find
              exactly what they need — whether it&apos;s a remedy, a gift, or a
              traditional item.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
