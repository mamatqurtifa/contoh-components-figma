'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Building2, 
  TrendingUp, 
  FileText, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Calendar,
  DollarSign,
  Award,
  Target,
  Activity,
  ChevronRight,
  Zap,
  Clock,
  Upload,
  Share2,
  Database,
  PieChart,
  BarChart,
  Users2,
  Package,
  Wrench,
  GraduationCap,
  MapPin,
  ShoppingBag,
  Home,
  Layers,
  Tag,
  Grid3X3,
  Globe,
  LogOut,
  MessageSquare,
  Star,
  ThumbsUp,
  UserCheck,
  Image,
  FilePlus,
  Heart
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = [
    {
      title: 'Total Siswa',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Program Keahlian',
      value: '8',
      change: '+1',
      trend: 'up',
      icon: BookOpen,
      color: 'bg-blue-600'
    },
    {
      title: 'Kerjasama Industri',
      value: '45',
      change: '+8%',
      trend: 'up',
      icon: Building2,
      color: 'bg-blue-700'
    },
    {
      title: 'Pendapatan BLUD',
      value: 'Rp 2.8M',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-blue-800'
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: 'Workshop SMK PPK-BLUD di SMKN 2 Depok Sleman',
      date: '12 Juli 2025',
      status: 'Published',
      views: 1240,
      author: 'Admin BLUD'
    },
    {
      id: 2,
      title: 'Produksi Barang dan Jasa BLUD SMK Tahun 2025',
      date: '5 Juli 2025',
      status: 'Published',
      views: 987,
      author: 'Admin BLUD'
    },
    {
      id: 3,
      title: 'Kerjasama BLUD SMK dengan 5 Industri Terkemuka',
      date: '28 Juni 2025',
      status: 'Draft',
      views: 0,
      author: 'Admin BLUD'
    },
    {
      id: 4,
      title: 'Pelatihan Digital Marketing untuk UMKM',
      date: '20 Juni 2025',
      status: 'Published',
      views: 845,
      author: 'Admin BLUD'
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'berita', label: 'Kelola Berita', icon: FileText },
    { id: 'program-keahlian', label: 'Program Keahlian', icon: GraduationCap },
    { id: 'produk-jasa', label: 'Produk & Jasa', icon: Package },
    { id: 'kerjasama', label: 'Kerjasama', icon: Building2 },
    { id: 'unduhan', label: 'File Unduhan', icon: Download },
    { id: 'review', label: 'Pesan & Review', icon: MessageSquare },
    { id: 'keuangan', label: 'Laporan Keuangan', icon: DollarSign }
  ];

  const quickActions = [
    {
      icon: Plus,
      label: 'Tambah Berita',
      description: 'Buat artikel berita terbaru',
      color: 'bg-blue-500',
      action: () => console.log('Tambah berita')
    },
    {
      icon: Users2,
      label: 'Data Siswa',
      description: 'Kelola data siswa baru',
      color: 'bg-blue-600',
      action: () => console.log('Data siswa')
    },
    {
      icon: Building2,
      label: 'Kerjasama',
      description: 'Tambah mitra industri',
      color: 'bg-blue-700',
      action: () => console.log('Kerjasama')
    },
    {
      icon: Package,
      label: 'Kelola Produk',
      description: 'Produk jurusan & fasilitas',
      color: 'bg-blue-700',
      action: () => console.log('Kelola produk')
    },
    {
      icon: GraduationCap,
      label: 'Program Keahlian',
      description: 'Kelola jurusan sekolah',
      color: 'bg-blue-800',
      action: () => console.log('Program keahlian')
    },
    {
      icon: Upload,
      label: 'Upload File',
      description: 'Upload dokumen penting',
      color: 'bg-blue-500',
      action: () => console.log('Upload')
    },
    {
      icon: Award,
      label: 'Sertifikat',
      description: 'Kelola sertifikat siswa',
      color: 'bg-blue-600',
      action: () => console.log('Sertifikat')
    }
  ];

  const Sidebar = () => (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Logo Header */}
          <div className="flex items-center justify-between h-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg p-1">
                <img 
                  src="/logo.webp" 
                  alt="SMKN 2 Depok Sleman Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white">
                <h1 className="text-lg font-bold">BLUD Admin</h1>
                <p className="text-xs text-blue-100">SMKN 2 Depok Sleman</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-blue-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`h-5 w-5 ${activeTab === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${activeTab === item.id ? 'rotate-90 text-blue-600' : 'text-gray-300 group-hover:text-gray-400'}`} />
                </button>
              );
            })}
          </nav>
          
          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin BLUD</p>
                <p className="text-xs text-gray-500">Super Administrator</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
              <LogOut className="h-4 w-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );

  const Header = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard Admin</h1>
            <p className="text-sm text-gray-500">Kelola website BLUD dengan mudah</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search - Hidden on mobile */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari..."
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
          </button>
          
          {/* Mobile user avatar */}
          <div className="sm:hidden w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </header>
  );

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-200 group">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-sm font-semibold text-blue-600">{stat.change}</span>
              <span className="text-sm text-gray-500 ml-1">bulan lalu</span>
            </div>
          </div>
          <div className={`${stat.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
    );
  };

  const QuickActionCard = ({ action, index }) => {
    const Icon = action.icon;
    return (
      <button
        onClick={action.action}
        className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-left w-full"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
            {action.label}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-700">
            {action.description}
          </p>
          
          {/* Arrow indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ChevronRight className="h-5 w-5 text-blue-500" />
          </div>
        </div>
      </button>
    );
  };

  const DashboardContent = () => (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -translate-x-12 translate-y-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Zap className="h-8 w-8 text-blue-200 mr-3" />
            <span className="text-blue-200 text-sm font-medium">Dashboard Admin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Selamat Datang Kembali!</h2>
          <p className="text-blue-100 mb-6 text-lg">Kelola website BLUD SMKN 2 Depok Sleman dengan mudah dan efisien.</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-200" />
                <span className="text-sm text-blue-100">Login: 2 Agt 2025, 14:37</span>
              </div>
            </div>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm">
              Lihat Aktivitas
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Fast Controls */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Kontrol Cepat</h3>
            <p className="text-gray-600">Akses fitur utama dengan sekali klik</p>
          </div>
          <div className="hidden sm:block">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} action={action} index={index} />
          ))}
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Statistik Pengunjung</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>7 Hari Terakhir</option>
              <option>30 Hari Terakhir</option>
              <option>3 Bulan Terakhir</option>
            </select>
          </div>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart className="h-16 w-16 text-blue-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Grafik Pengunjung Website</p>
              <p className="text-sm text-gray-500 mt-1">Data akan ditampilkan di sini</p>
            </div>
          </div>
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Berita Terbaru</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>Lihat Semua</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentNews.map((news) => (
              <div key={news.id} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                    {news.title}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs text-gray-500">{news.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      news.status === 'Published' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {news.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span className="text-xs font-medium">{news.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl">
            {activeTab === 'dashboard' && <DashboardContent />}
            
            {activeTab === 'program-keahlian' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="mb-4 sm:mb-0">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Program Keahlian</h2>
                      <p className="text-gray-600">Kelola program keahlian dan jurusan di SMKN 2 Depok Sleman</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2 transition-colors shadow-lg">
                      <Plus className="h-5 w-5" />
                      <span>Tambah Program</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'Sistem Informasi Jaringan & Aplikasi', code: 'SIJA', students: 145, icon: Database },
                      { name: 'Kimia Analisis', code: 'KA', students: 98, icon: Wrench },
                      { name: 'Teknik Kendaraan Ringan', code: 'TKR', students: 167, icon: Wrench },
                      { name: 'Teknik Sepeda Motor', code: 'TSM', students: 134, icon: Wrench },
                      { name: 'Teknik Komputer Jaringan', code: 'TKJ', students: 156, icon: Database },
                      { name: 'Multimedia', code: 'MM', students: 123, icon: Target }
                    ].map((program, index) => {
                      const Icon = program.icon;
                      return (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 group">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-blue-${500 + (index % 4) * 100} rounded-xl flex items-center justify-center`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {program.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Kode: {program.code}</span>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-600">{program.students} siswa</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'produk-jasa' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div className="mb-4 sm:mb-0">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Produk & Jasa BLUD</h2>
                      <p className="text-gray-600">Kelola produk dan jasa yang dihasilkan oleh program keahlian dan fasilitas sekolah</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2 transition-colors shadow-lg">
                      <Plus className="h-5 w-5" />
                      <span>Tambah Produk/Jasa</span>
                    </button>
                  </div>

                  {/* Category Tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
                    {['Semua', 'Produk SIJA', 'Produk KA', 'Fasilitas Sekolah', 'Jasa Layanan'].map((category, index) => (
                      <button
                        key={index}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          index === 0 
                            ? 'bg-blue-600 text-white shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        name: 'Sistem Informasi Akademik', 
                        category: 'SIJA', 
                        type: 'Produk Digital',
                        price: 'Rp 15.000.000',
                        status: 'Tersedia',
                        icon: Database,
                        color: 'bg-blue-500'
                      },
                      { 
                        name: 'Website Company Profile', 
                        category: 'SIJA', 
                        type: 'Jasa Pembuatan',
                        price: 'Rp 5.000.000',
                        status: 'Tersedia',
                        icon: Globe,
                        color: 'bg-blue-600'
                      },
                      { 
                        name: 'Analisis Kualitas Air', 
                        category: 'KA', 
                        type: 'Jasa Analisis',
                        price: 'Rp 500.000',
                        status: 'Tersedia',
                        icon: Wrench,
                        color: 'bg-blue-700'
                      },
                      { 
                        name: 'Gedung Auditorium Bima', 
                        category: 'Fasilitas', 
                        type: 'Sewa Fasilitas',
                        price: 'Rp 2.000.000/hari',
                        status: 'Tersedia',
                        icon: Home,
                        color: 'bg-blue-800'
                      },
                      { 
                        name: 'Laboratorium Komputer', 
                        category: 'Fasilitas', 
                        type: 'Sewa Lab',
                        price: 'Rp 1.000.000/hari',
                        status: 'Tersedia',
                        icon: MapPin,
                        color: 'bg-blue-500'
                      },
                      { 
                        name: 'Pelatihan IT', 
                        category: 'SIJA', 
                        type: 'Jasa Pelatihan',
                        price: 'Rp 3.000.000',
                        status: 'Booking',
                        icon: GraduationCap,
                        color: 'bg-blue-600'
                      }
                    ].map((item, index) => {
                      const Icon = item.icon || Package;
                      return (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 group">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Edit className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="mb-3">
                            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                              item.category === 'SIJA' ? 'bg-blue-100 text-blue-800' :
                              item.category === 'KA' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">{item.type}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-blue-600">{item.price}</span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              item.status === 'Tersedia' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== 'dashboard' && activeTab !== 'berita' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 capitalize">
                    {menuItems.find(item => item.id === activeTab)?.label}
                  </h2>
                  <p className="text-gray-600">Kelola data dan informasi dengan mudah</p>
                </div>
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {React.createElement(menuItems.find(item => item.id === activeTab)?.icon, {
                      className: "h-10 w-10 text-blue-500"
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Fitur Dalam Pengembangan</h3>
                  <p className="text-gray-500">Modul ini sedang dalam tahap pengembangan</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}