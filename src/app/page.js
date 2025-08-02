import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Current date and user info
  const currentDateTime = "2025-08-02 02:37:46";
  const currentUser = "mamatqurtifa";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section - Modern, no slider */}
        <section className="relative bg-blue pt-32 pb-24 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-['Alexandria']">
                  Tingkatkan Kualitas <span className="text-white">Pendidikan</span> Bersama BLUD SMKN 2 Depok Sleman
                </h1>
                <p className="text-lg mb-8 text-white opacity-90 max-w-xl">
                  Badan Layanan Umum Daerah untuk pendidikan kejuruan yang profesional dan berkualitas, fokus pada kebutuhan industri dan pengembangan kompetensi siswa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/profil" className="btn-white">
                    Tentang Kami
                  </Link>
                  <Link href="/kontak" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md">
                    Hubungi Kami
                  </Link>
                </div>
                <div className="mt-6 text-white opacity-70 text-sm">
                  <p>Last updated: {currentDateTime}</p>
                  <p>User: {currentUser}</p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="SMKN 2 Depok Sleman"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-dark rounded-full opacity-50"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-['Alexandria']">
                Layanan Unggulan Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                BLUD SMKN 2 Depok Sleman menyediakan berbagai layanan untuk mendukung pendidikan kejuruan berkualitas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="card group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center text-white mb-6 group-hover:bg-blue-dark transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Pendidikan Berkualitas</h3>
                <p className="text-gray-600 mb-4">
                  Program pendidikan yang didesain sesuai kebutuhan industri dengan kurikulum terintegrasi dan berbasis kompetensi.
                </p>
                <Link href="/layanan/pendidikan" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Feature Card 2 */}
              <div className="card group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center text-white mb-6 group-hover:bg-blue-dark transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Produksi & Jasa</h3>
                <p className="text-gray-600 mb-4">
                  Unit produksi dan jasa yang menghasilkan produk berkualitas sekaligus menjadi tempat praktik siswa dalam kondisi nyata.
                </p>
                <Link href="/layanan/produksi-jasa" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Feature Card 3 */}
              <div className="card group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center text-white mb-6 group-hover:bg-blue-dark transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria']">Kerjasama Industri</h3>
                <p className="text-gray-600 mb-4">
                  Jaringan kerjasama dengan industri untuk praktik kerja, pemagangan, dan penempatan kerja lulusan yang kompeten.
                </p>
                <Link href="/layanan/kerjasama-industri" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with Overlapping Elements */}
        <section className="section bg-white relative overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue opacity-10 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                  <div className="aspect-w-4 aspect-h-3 relative">
                    <Image
                      src="/images/about-image.jpg"
                      alt="Tentang BLUD SMKN 2 Depok Sleman"
                      width={600}
                      height={450}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-dark opacity-10 rounded-full"></div>
              </div>
              
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
                  Tentang BLUD
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-['Alexandria']">Pengelolaan Pendidikan Modern</h2>
                <p className="text-gray-600 mb-6">
                  BLUD SMKN 2 Depok Sleman adalah Unit Kerja pada satuan kerja perangkat daerah di lingkungan pemerintah daerah provinsi yang dibentuk untuk memberikan pelayanan kepada masyarakat terutama peserta didik, berupa penyediaan barang atau jasa tanpa mengutamakan mencari keuntungan.
                </p>
                <p className="text-gray-600 mb-8">
                  Dengan pola pengelolaan keuangan BLUD, SMK memiliki fleksibilitas dalam pengelolaan sumber daya untuk meningkatkan kualitas pendidikan dan mengembangkan inovasi yang bermanfaat bagi masyarakat.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue bg-opacity-10 flex items-center justify-center text-blue mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-dark font-['Alexandria']">Fleksibilitas</h4>
                      <p className="text-sm text-gray-600">Pengelolaan keuangan yang fleksibel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue bg-opacity-10 flex items-center justify-center text-blue mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-dark font-['Alexandria']">Inovatif</h4>
                      <p className="text-sm text-gray-600">Pengembangan program inovatif</p>
                    </div>
                  </div>
                </div>
                <Link href="/profil" className="btn-primary mt-8 inline-block">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News Section with Modern Cards */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
                Berita Terbaru
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-['Alexandria']">Informasi Terkini</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Berita dan informasi terbaru seputar program dan kegiatan BLUD SMKN 2 Depok Sleman.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/images/news-1.jpg" 
                    alt="Workshop SMK PPK-BLUD"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-dark opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-blue font-medium">12 Juli 2025</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">Berita</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria'] group-hover:text-blue transition-colors duration-300">
                    Workshop SMK PPK-BLUD di SMKN 2 Depok Sleman
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Workshop pengembangan kapasitas pengelolaan keuangan BLUD untuk meningkatkan kualitas layanan pendidikan kejuruan.
                  </p>
                  <Link href="/berita/workshop-smk-ppk-blud" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* News Card 2 */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/images/news-2.jpg" 
                    alt="Produksi Barang dan Jasa BLUD SMK"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-dark opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-blue font-medium">5 Juli 2025</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">Pengumuman</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria'] group-hover:text-blue transition-colors duration-300">
                    Produksi Barang dan Jasa BLUD SMK Tahun 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Laporan realisasi produksi barang dan jasa BLUD SMK yang telah dilaksanakan sepanjang tahun 2025 dengan pencapaian signifikan.
                  </p>
                  <Link href="/berita/produksi-barang-jasa-blud" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* News Card 3 */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src="/images/news-3.jpg" 
                    alt="Kerjasama BLUD SMK dengan Industri"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-dark opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-blue font-medium">28 Juni 2025</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">Kerjasama</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-dark mb-3 font-['Alexandria'] group-hover:text-blue transition-colors duration-300">
                    Kerjasama BLUD SMK dengan 5 Industri Terkemuka
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Penandatanganan MoU kerjasama antara BLUD SMK dengan berbagai industri terkemuka untuk meningkatkan kualitas pendidikan.
                  </p>
                  <Link href="/berita/kerjasama-blud-smk-industri" className="text-blue font-medium inline-flex items-center group-hover:text-blue-dark">
                    Baca Selengkapnya
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/berita" className="btn-outline">
                Lihat Semua Berita
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section bg-blue relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-dark opacity-20 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-dark opacity-20 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Alexandria']">
                Siap Berkolaborasi dengan Kami?
              </h2>
              <p className="text-xl mb-10 text-white opacity-90">
                Mari bersama-sama meningkatkan kualitas pendidikan kejuruan untuk menghasilkan lulusan yang kompeten dan siap kerja.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/kontak" className="btn-white">
                  Hubungi Kami
                </Link>
                <Link href="/produk-jasa" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md">
                  Lihat Produk & Jasa
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}