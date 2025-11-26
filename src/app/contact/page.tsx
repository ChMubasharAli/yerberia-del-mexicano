import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-linear-to-r from-emerald-700 to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-4">
              Visit Yerberia del Mexicano
            </h1>
            <p className="text-xl text-emerald-50">
              We’re here to help you with herbs, remedies, spiritual items,
              cultural goods, and everyday essentials.
            </p>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-emerald-600 hover:shadow-2xl transition">
                <div className="text-emerald-600 text-5xl font-bold mb-4">
                  📍
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Location
                </h2>
                <p className="text-lg font-semibold text-slate-900 mb-1">
                  1241 E Broadway Rd
                </p>
                <p className="text-lg text-slate-700">Mesa, AZ 85204</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-600 hover:shadow-2xl transition">
                <div className="text-blue-600 text-5xl font-bold mb-4">📞</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Numbers
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-1">
                      Business Phone
                    </p>
                    <a
                      href="tel:4806152779"
                      className="text-lg font-bold text-blue-600 hover:text-blue-700 transition"
                    >
                      (480) 615-2779
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-1">
                      Contact Phone
                    </p>
                    <a
                      href="tel:6024328417"
                      className="text-lg font-bold text-blue-600 hover:text-blue-700 transition"
                    >
                      (602) 432-8417
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-yellow-500 hover:shadow-2xl transition">
                <div className="text-yellow-500 text-5xl font-bold mb-4">
                  ✉️
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Email
                </h2>
                <a
                  href="mailto:jaaiarmenta@hotmail.com"
                  className="text-lg font-bold text-yellow-600 hover:text-yellow-700 transition break-all"
                >
                  jaaiarmenta@hotmail.com
                </a>
                <p className="text-slate-700 mt-4 text-sm">
                  Feel free to reach out with any questions about our products
                  or services.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-r from-emerald-700 to-emerald-600 text-white rounded-xl p-12 mb-16 shadow-lg border-2 border-emerald-500">
              <h2 className="text-3xl font-black mb-3">Contact Person</h2>
              <p className="text-2xl font-bold text-emerald-50 mb-2">
                Jose Alfredo Armenta Ibarra
              </p>
              <p className="text-lg text-emerald-50 leading-relaxed">
                Reach out directly for personalized assistance with product
                recommendations and inquiries.
              </p>
            </div>

            <div className="bg-linear-to-r from-emerald-600 to-blue-600 rounded-xl p-12 text-white text-center shadow-lg">
              <h2 className="text-5xl font-black mb-4">Have Questions?</h2>
              <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                Give us a call or stop by. We’re happy to help you find the
                right products or guide you toward remedies and items
                you&apos;re looking for.
              </p>
              <a
                href="tel:4806152779"
                className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
