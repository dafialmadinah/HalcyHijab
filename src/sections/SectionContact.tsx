import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
export const SectionContact = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      id="contact-us"
      className="w-full bg-gradient-to-b from-pink-50 to-white"
    >
      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-white py-12 relative overflow-hidden">
        {/* Elemen Dekoratif Lingkaran Pink */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ea3697] opacity-20 rounded-full -translate-y-1/2 translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Kolom Kiri: Logo, Navigasi, Ikon Sosial, Hak Cipta */}
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <div className="inline-block">
                <span className="text-xl font-bold bg-white text-[#ea3697] px-4 py-3 rounded-md">
                  Halcy Hijab
                </span>
              </div>

              {/* Navigasi */}
              <div>
                <h3 className="text-lg font-semibold mb-4 mt-2">Pages</h3>
                <ul className="flex gap-4">
                  <li>
                    <button
                      onClick={() => handleScroll("home")}
                      className="text-gray-400 hover:text-white"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://id.shp.ee/23Du6F1"
                      className="text-gray-400 hover:text-white"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Categories
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScroll("about-us")}
                      className="text-gray-400 hover:text-white"
                    >
                      About us
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://linktr.ee/halcyhijab"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Ikon Media Sosial */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/halcyhijab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#ea3697] hover:text-white"
                >
                  <FaInstagram className="text-lg" /> Instagram
                </a>
                <a
                  href="https://tiktok.com/@halcyhijab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#ea3697] hover:text-white"
                >
                  <FaTiktok className="text-lg" /> TikTok
                </a>
              </div>

              {/* Hak Cipta */}
              <div className="text-gray-400 text-sm">
                <p>© terms & services</p>
                <p>Greenify © all right reserved 2023</p>
              </div>
            </div>

            {/* Kolom Kanan: Kontak */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold">Contact us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-[#ea3697]">📞</span>
                  <span className="text-gray-400">+62 856-0499-4852</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#ea3697]">✉️</span>
                  <span className="text-gray-400">halcyhijab@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#ea3697]">📍</span>
                  <span className="text-gray-400">Pondokmelati, Bekasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
