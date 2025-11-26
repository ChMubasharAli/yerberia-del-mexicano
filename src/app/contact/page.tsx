import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mb-8 md:mb-16  mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
            <h1 className="text-6xl md:text-7xl font-black mb-4">
              Visit Yerberia del Mexicano
            </h1>
            <p className="text-xl text-slate-700">
              We’re here to help you with herbs, remedies, spiritual items,
              cultural goods, and everyday essentials.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-emerald-600 hover:shadow-2xl transition">
                <div className="text-emerald-600 text-5xl font-bold mb-4">
                  👤
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Contact Person
                </h2>
                <p className="text-lg font-semibold text-slate-900 mb-1">
                  Jose Alfredo Armenta Ibarra
                </p>
                <p className="text-lg text-slate-700">
                  Reach out directly for personalized assistance with product
                  recommendations and inquiries.
                </p>
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

            <div className="bg-white  rounded-xl p-12 mb-16 shadow-2xl">
              <h2 className="text-3xl font-black mb-3">Our Location</h2>
              <p className="text-2xl font-bold text-slate-700 mb-2">
                1241 E Broadway Rd
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Mesa, AZ 85204
              </p>
              <div className="mt-12 w-full rounded-2xl  bg-slate-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.7855065986713!2d-111.80786592372762!3d33.40754187341389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bab3c6b4c1a7d%3A0x1b50f1a0a4f4742c!2s1241%20E%20Broadway%20Rd%2C%20Mesa%2C%20AZ%2085204%2C%20USA!5e0!3m2!1sen!2sus!4v1732551135533!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-12  text-center shadow-lg">
              <h2 className="text-5xl font-black mb-4">Have Questions?</h2>
              <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
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
