import Image from 'next/image';
import Link from 'next/link';

export default function ProfilPage() {
  // Current date and user info
  const currentDateTime = "2025-08-02 03:02:23";
  const currentUser = "mamatqurtifa";

  // Team members for org structure
  const teamMembers = [
    {
      name: "Dr. Supriadi, M.Pd.",
      position: "Kepala Sekolah",
      image: "/images/team/director.jpg",
      role: "Pemimpin BLUD",
      email: "supriadi@smkn2depok.sch.id"
    },
    {
      name: "Ir. Widyastuti, M.M.",
      position: "Pejabat Keuangan",
      image: "/images/team/finance.jpg",
      role: "Pengelola Keuangan BLUD",
      email: "widyastuti@smkn2depok.sch.id"
    },
    {
      name: "Bambang Wijaya, S.T.",
      position: "Pejabat Teknis",
      image: "/images/team/technical.jpg",
      role: "Pengelola Operasional BLUD",
      email: "bambang@smkn2depok.sch.id"
    },
    {
      name: "Dra. Siti Rahayu",
      position: "Satuan Pengawas Internal",
      image: "/images/team/supervisor.jpg",
      role: "Pengawasan & Pengendalian",
      email: "siti@smkn2depok.sch.id"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-blue py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/profile-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-blue opacity-80"></div>
        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Alexandria']">
              Profil BLUD SMKN 2 Depok Sleman
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              Badan Layanan Umum Daerah yang berfokus pada peningkatan kualitas pendidikan kejuruan
            </p>
            <div className="flex items-center text-sm text-white opacity-80">
              <span>Last updated: {currentDateTime}</span>
              <span className="mx-3">•</span>
              <span>User: {currentUser}</span>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Navigation Tabs */}
      <section className="py-6 bg-white border-b">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar space-x-8 pb-2">
            <a href="#tentang" className="flex items-center text-blue-dark font-medium pb-2 border-b-2 border-blue whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tentang BLUD
            </a>
            <a href="#visi-misi" className="flex items-center text-gray-600 hover:text-blue-dark font-medium pb-2 border-b-2 border-transparent hover:border-blue whitespace-nowrap transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Visi & Misi
            </a>
            <a href="#struktur" className="flex items-center text-gray-600 hover:text-blue-dark font-medium pb-2 border-b-2 border-transparent hover:border-blue whitespace-nowrap transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Struktur Organisasi
            </a>
            <a href="#fasilitas" className="flex items-center text-gray-600 hover:text-blue-dark font-medium pb-2 border-b-2 border-transparent hover:border-blue whitespace-nowrap transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Fasilitas
            </a>
          </div>
        </div>
      </section>
      
      {/* Tentang BLUD with Stats */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
                Tentang BLUD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-['Alexandria']">Tentang BLUD SMKN 2 Depok Sleman</h2>
              <p className="text-gray-600 mb-6">
                BLUD SMK adalah Unit Kerja pada satuan kerja perangkat daerah di lingkungan pemerintah daerah provinsi yang dibentuk untuk memberikan pelayanan kepada masyarakat terutama peserta didik, berupa penyediaan barang atau jasa tanpa mengutamakan mencari keuntungan.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan pola pengelolaan keuangan BLUD, SMK memiliki fleksibilitas dalam pengelolaan sumber daya untuk meningkatkan kualitas pendidikan dan mengembangkan inovasi yang bermanfaat bagi masyarakat.
              </p>
              <p className="text-gray-600 mb-8">
                SMKN 2 Depok Sleman telah menerapkan pola pengelolaan keuangan BLUD sejak tahun 2019 dan terus berkembang dalam memberikan layanan pendidikan yang berkualitas dan relevan dengan kebutuhan dunia industri.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-dark rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-blue-dark font-['Alexandria']">Fleksibilitas Keuangan</h3>
                    <p className="text-gray-600">Pengelolaan keuangan yang lebih fleksibel dan efisien</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-dark rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-blue-dark font-['Alexandria']">Transparansi</h3>
                    <p className="text-gray-600">Pelaporan yang lebih transparan dan akuntabel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-dark rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-blue-dark font-['Alexandria']">Kemitraan Industri</h3>
                    <p className="text-gray-600">Kerjasama dengan dunia usaha dan industri</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-dark rounded-full p-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-blue-dark font-['Alexandria']">Produktivitas</h3>
                    <p className="text-gray-600">Peningkatan produktivitas unit usaha sekolah</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-dark rounded-full opacity-10"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-image.jpg"
                  alt="Tentang BLUD SMKN 2 Depok"
                  width={600}
                  height={600}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue mb-1">15+</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue mb-1">30+</div>
                    <div className="text-sm text-gray-600">Mitra Industri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue mb-1">500+</div>
                    <div className="text-sm text-gray-600">Siswa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue mb-1">50+</div>
                    <div className="text-sm text-gray-600">Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visi & Misi */}
      <section id="visi-misi" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
              Visi & Misi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-['Alexandria']">Visi & Misi BLUD SMKN 2 Depok Sleman</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Arah dan tujuan kami dalam memberikan layanan pendidikan kejuruan yang berkualitas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visi Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-24 bg-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-dark opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white font-['Alexandria']">Visi</h3>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-dark rounded-full opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full opacity-10 -translate-x-1/3 translate-y-1/3"></div>
              </div>
              <div className="p-8">
                <div className="mb-6 text-center">
                  <div className="inline-block p-4 rounded-full bg-blue bg-opacity-10 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-blue-dark font-['Alexandria']">
                    &quot;Menghasilkan peserta didik yang unggul, berkarakter, kompeten dan berwawasan lingkungan.&quot;
                  </p>
                </div>
                <p className="text-gray-600">
                  Visi ini mencerminkan komitmen SMKN 2 Depok Sleman untuk menjadi lembaga pendidikan kejuruan yang mampu menghasilkan lulusan yang tidak hanya unggul secara akademis, tetapi juga memiliki karakter yang kuat, kompetensi yang relevan dengan kebutuhan industri, dan kepedulian terhadap lingkungan.
                </p>
              </div>
            </div>
            
            {/* Misi Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-24 bg-blue-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-blue opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white font-['Alexandria']">Misi</h3>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-blue rounded-full opacity-20 -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Mengembangkan sistem pendidikan kejuruan yang adaptif, fleksibel dan berorientasi pada kebutuhan industri.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Meningkatkan kualitas pembelajaran melalui pengembangan kompetensi pendidik dan tenaga kependidikan.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Mengembangkan karakter peserta didik melalui kegiatan pengembangan diri dan budaya sekolah.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Memperluas kerjasama dengan dunia usaha dan industri untuk meningkatkan relevansi pembelajaran.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue flex items-center justify-center text-white mt-0.5">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">Mengembangkan unit produksi dan jasa yang mendukung kompetensi peserta didik dan kemandirian sekolah.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Struktur Organisasi */}
      <section id="struktur" className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-dark opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
              Struktur Organisasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-['Alexandria']">Struktur Organisasi BLUD</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Struktur organisasi BLUD SMKN 2 Depok Sleman dirancang untuk mendukung implementasi pola pengelolaan keuangan yang fleksibel dan berorientasi pada pelayanan.
            </p>
          </div>
          
          {/* Organization Chart */}
          <div className="mb-20">
            <div className="flex flex-col items-center">
              {/* Top Level */}
              <div className="relative">
                <div className="bg-blue text-white px-8 py-6 rounded-2xl shadow-lg mb-8 text-center w-64">
                  <p className="font-bold font-['Alexandria']">Kepala Sekolah</p>
                  <p className="text-sm text-blue-100">Pemimpin BLUD</p>
                </div>
                <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gray-300 -translate-x-1/2"></div>
              </div>
              
              {/* Second Level */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 mb-8">
                <div className="relative">
                  <div className="bg-blue-dark text-white px-6 py-4 rounded-2xl shadow-md text-center">
                    <p className="font-semibold font-['Alexandria']">Pejabat Keuangan</p>
                    <p className="text-sm text-blue-100">Pengelola Keuangan</p>
                  </div>
                  <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block"></div>
                </div>
                <div className="relative">
                  <div className="bg-blue-dark text-white px-6 py-4 rounded-2xl shadow-md text-center">
                    <p className="font-semibold font-['Alexandria']">Pejabat Teknis</p>
                    <p className="text-sm text-blue-100">Pengelola Operasional</p>
                  </div>
                  <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block"></div>
                </div>
                <div className="relative">
                  <div className="bg-blue-dark text-white px-6 py-4 rounded-2xl shadow-md text-center">
                    <p className="font-semibold font-['Alexandria']">Satuan Pengawas Internal</p>
                    <p className="text-sm text-blue-100">Pengawasan & Pengendalian</p>
                  </div>
                  <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block"></div>
                </div>
              </div>
              
              {/* Third Level - Connect Lines */}
              <div className="hidden md:block w-full max-w-3xl h-0.5 bg-gray-300 mb-8"></div>
              
              {/* Fourth Level */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue bg-opacity-10 text-blue-dark px-4 py-3 rounded-xl text-center">
                  <p className="font-medium font-['Alexandria']">Unit Pelayanan</p>
                </div>
                <div className="bg-blue bg-opacity-10 text-blue-dark px-4 py-3 rounded-xl text-center">
                  <p className="font-medium font-['Alexandria']">Unit Produksi</p>
                </div>
                <div className="bg-blue bg-opacity-10 text-blue-dark px-4 py-3 rounded-xl text-center">
                  <p className="font-medium font-['Alexandria']">Unit Pemasaran</p>
                </div>
                <div className="bg-blue bg-opacity-10 text-blue-dark px-4 py-3 rounded-xl text-center">
                  <p className="font-medium font-['Alexandria']">Unit Kerjasama</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <h3 className="text-2xl font-bold text-blue-dark mb-8 text-center font-['Alexandria']">Tim Manajemen BLUD</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-60 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-bold text-lg font-['Alexandria']">{member.name}</p>
                    <p className="text-sm text-blue-100">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex items-center text-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${member.email}`} className="text-sm hover:text-blue-dark transition-colors duration-200">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fasilitas */}
      <section id="fasilitas" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue bg-opacity-10 text-blue rounded-full text-sm font-semibold mb-4">
              Fasilitas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4 font-['Alexandria']">Fasilitas BLUD SMKN 2 Depok Sleman</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BLUD SMKN 2 Depok Sleman dilengkapi dengan berbagai fasilitas untuk mendukung proses pembelajaran dan pengembangan kompetensi peserta didik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facility Card 1 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/lab-computer.jpg"
                  alt="Laboratorium Komputer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Laboratorium Komputer</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Dilengkapi dengan perangkat komputer terbaru dan software yang sesuai dengan kebutuhan industri untuk mendukung pembelajaran praktik siswa.
                </p>
              </div>
            </div>
            
            {/* Facility Card 2 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/workshop.jpg"
                  alt="Bengkel Praktik"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Bengkel Praktik</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Bengkel praktik dengan peralatan dan mesin yang lengkap untuk mendukung pengembangan kompetensi siswa sesuai dengan standar industri.
                </p>
              </div>
            </div>
            
            {/* Facility Card 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/production-unit.jpg"
                  alt="Unit Produksi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Unit Produksi</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Unit produksi yang dikelola oleh BLUD sebagai wadah pengembangan kompetensi siswa sekaligus sumber pendapatan sekolah.
                </p>
              </div>
            </div>
            
            {/* Facility Card 4 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/library.jpg"
                  alt="Perpustakaan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Perpustakaan</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Perpustakaan dengan koleksi buku dan referensi yang lengkap untuk mendukung pembelajaran teori dan pengembangan wawasan siswa.
                </p>
              </div>
            </div>
            
            {/* Facility Card 5 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/business-incubator.jpg"
                  alt="Ruang Inkubator Bisnis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Ruang Inkubator Bisnis</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Ruang khusus untuk pengembangan kewirausahaan siswa dan inkubasi bisnis yang dikelola oleh BLUD SMKN 2 Depok Sleman.
                </p>
              </div>
            </div>
            
            {/* Facility Card 6 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/facilities/competency-test.jpg"
                  alt="Tempat Uji Kompetensi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white font-['Alexandria']">Tempat Uji Kompetensi</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Tempat uji kompetensi yang tersertifikasi untuk melakukan penilaian dan sertifikasi kompetensi siswa dan masyarakat umum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-dark opacity-20 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-dark opacity-20 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-dark opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6 font-['Alexandria']">
                Ingin Tahu Lebih Lanjut?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Hubungi kami untuk informasi lebih lanjut tentang BLUD SMKN 2 Depok Sleman atau datang berkunjung ke sekolah kami.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/kontak" className="btn-primary">
                  Hubungi Kami
                </Link>
                <Link href="/layanan" className="btn-outline">
                  Lihat Layanan
                </Link>
              </div>
              <div className="mt-10 pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue bg-opacity-10 flex items-center justify-center text-blue mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-blue-dark">Telepon</p>
                  <p className="text-gray-600">(0274) 513515</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue bg-opacity-10 flex items-center justify-center text-blue mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-blue-dark">Email</p>
                  <p className="text-gray-600">admin@blud.smkn2depoksleman.sch.id</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue bg-opacity-10 flex items-center justify-center text-blue mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-blue-dark">Alamat</p>
                  <p className="text-gray-600 text-center">Jl. STM Pembangunan No. 1, Mrican, Depok, Sleman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}