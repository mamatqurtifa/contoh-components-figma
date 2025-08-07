'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Package, 
  TrendingUp, 
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
  DollarSign,
  ChevronRight,
  Zap,
  Clock,
  Upload,
  Database,
  Users2,
  Wrench,
  GraduationCap,
  MapPin,
  Home,
  Globe,
  LogOut,
  MessageSquare,
  Star,
  UserPlus,
  Key,
  User,
  AlertCircle,
  Save,
  Camera,
  FilePlus,
  Shield,
  Archive,
  File,
  Folder
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
      title: 'Total Berita',
      value: '156',
      change: '+8',
      trend: 'up',
      icon: FileText,
      color: 'bg-blue-600'
    },
    {
      title: 'Produk & Jasa',
      value: '23',
      change: '+3',
      trend: 'up',
      icon: Package,
      color: 'bg-blue-700'
    },
    {
      title: 'Total Admin',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Users2,
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
    { id: 'produk-jasa', label: 'Produk & Jasa', icon: Package },
    { id: 'unduhan', label: 'File Unduhan', icon: Download },
    { id: 'review', label: 'Pesan & Review', icon: MessageSquare },
    { id: 'admin', label: 'Kelola Admin', icon: Users2 },
    { id: 'settings', label: 'Pengaturan', icon: Settings }
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
      icon: Package,
      label: 'Kelola Produk',
      description: 'Produk jurusan & fasilitas',
      color: 'bg-blue-700',
      action: () => console.log('Kelola produk')
    },
    {
      icon: Upload,
      label: 'Upload File',
      description: 'Upload dokumen penting',
      color: 'bg-blue-500',
      action: () => setActiveTab('unduhan')
    },
    {
      icon: MessageSquare,
      label: 'Pesan & Review',
      description: 'Kelola feedback pengunjung',
      color: 'bg-blue-600',
      action: () => setActiveTab('review')
    },
    {
      icon: UserPlus,
      label: 'Tambah Admin',
      description: 'Kelola admin sistem',
      color: 'bg-blue-700',
      action: () => setActiveTab('admin')
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
                <div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
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
                <span className="text-sm text-blue-100">Login: 7 Agt 2025, 14:37</span>
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
              <BarChart3 className="h-16 w-16 text-blue-400 mx-auto mb-3" />
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

  // Admin Management Content
  const AdminManagementContent = () => {
    const admins = [
      { id: 1, name: 'Super Admin', email: 'superadmin@smkn2depoksleman.sch.id', role: 'Super User', status: 'Active', lastLogin: '7 Agt 2025, 14:30' },
      { id: 2, name: 'Admin BLUD 1', email: 'adminblud1@smkn2depoksleman.sch.id', role: 'Admin BLUD', status: 'Active', lastLogin: '6 Agt 2025, 09:15' },
      { id: 3, name: 'Admin BLUD 2', email: 'adminblud2@smkn2depoksleman.sch.id', role: 'Admin BLUD', status: 'Active', lastLogin: '5 Agt 2025, 16:45' },
      { id: 4, name: 'Admin SIJA', email: 'adminsija@smkn2depoksleman.sch.id', role: 'Admin Kejuruan', status: 'Active', lastLogin: '7 Agt 2025, 11:20' },
      { id: 5, name: 'Admin KA', email: 'adminka@smkn2depoksleman.sch.id', role: 'Admin Kejuruan', status: 'Inactive', lastLogin: '3 Agt 2025, 14:10' }
    ];

    const getRoleColor = (role) => {
      switch (role) {
        case 'Super User': return 'bg-red-100 text-red-800';
        case 'Admin BLUD': return 'bg-blue-100 text-blue-800';
        case 'Admin Kejuruan': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Kelola Admin</h2>
            <p className="text-gray-600">Kelola data admin sistem BLUD</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Login Terakhir</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{admin.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(admin.role)}`}>
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        admin.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {admin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{admin.lastLogin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // Product & Services Content
  const ProdukJasaContent = () => (
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
                    item.category === 'KA' ? 'bg-green-100 text-green-800' :
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
                    item.status === 'Tersedia' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
  );

  // Messages & Reviews Content
  const MessagesReviewsContent = () => {
    const messages = [
      {
        id: 1,
        name: 'Budi Santoso',
        email: 'budi@email.com',
        type: 'Review',
        rating: 5,
        subject: 'Pelayanan BLUD Sangat Baik',
        message: 'Saya sangat puas dengan pelayanan BLUD SMKN 2 Depok Sleman. Prosesnya cepat dan staf sangat membantu.',
        date: '7 Agt 2025, 10:30',
        status: 'Unread'
      },
      {
        id: 2,
        name: 'Siti Aminah',
        email: 'siti@email.com',
        type: 'Pesan',
        subject: 'Pertanyaan tentang Program Keahlian',
        message: 'Selamat siang, saya ingin menanyakan tentang syarat masuk untuk program keahlian SIJA.',
        date: '6 Agt 2025, 14:15',
        status: 'Read'
      },
      {
        id: 3,
        name: 'Ahmad Rahman',
        email: 'ahmad@email.com',
        type: 'Review',
        rating: 4,
        subject: 'Fasilitas Laboratorium',
        message: 'Fasilitas laboratorium cukup lengkap, namun ada beberapa peralatan yang perlu diperbaharui.',
        date: '5 Agt 2025, 09:20',
        status: 'Read'
      },
      {
        id: 4,
        name: 'Dewi Lestari',
        email: 'dewi@email.com',
        type: 'Pesan',
        subject: 'Kerjasama Industri',
        message: 'Kami dari PT. XYZ ingin menjalin kerjasama untuk program magang siswa.',
        date: '4 Agt 2025, 16:45',
        status: 'Unread'
      }
    ];

    const renderStars = (rating) => {
      return [...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ));
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pesan & Review</h2>
              <p className="text-gray-600">Kelola pesan dan review dari pengunjung website</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
                Filter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                Tandai Sudah Dibaca
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Total Pesan</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">18</p>
                  <p className="text-sm text-gray-600">Review</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="text-sm text-gray-600">Belum Dibaca</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.2</p>
                  <p className="text-sm text-gray-600">Rating Rata-rata</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`p-6 rounded-xl border transition-all duration-200 ${
                message.status === 'Unread' 
                  ? 'bg-blue-50 border-blue-200 shadow-sm' 
                  : 'bg-white border-gray-200 hover:shadow-sm'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{message.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{message.name}</h3>
                      <p className="text-sm text-gray-600">{message.email}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      message.type === 'Review' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {message.type}
                    </span>
                    {message.status === 'Unread' && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">{message.date}</span>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {message.rating && (
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      {renderStars(message.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({message.rating}/5)</span>
                  </div>
                )}
                
                <h4 className="font-medium text-gray-900 mb-2">{message.subject}</h4>
                <p className="text-gray-700 mb-4">{message.message}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Balas
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                      Tandai Dibaca
                    </button>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // File Upload Content
  const FileUploadContent = () => {
    const [dragActive, setDragActive] = useState(false);
    
    const files = [
      {
        id: 1,
        name: 'Dokumen BLUD 2025.pdf',
        type: 'PDF',
        size: '2.5 MB',
        uploadDate: '7 Agt 2025, 10:30',
        downloads: 45,
        category: 'Dokumen Resmi'
      },
      {
        id: 2,
        name: 'Brosur Program Keahlian.pdf',
        type: 'PDF', 
        size: '1.8 MB',
        uploadDate: '5 Agt 2025, 14:20',
        downloads: 23,
        category: 'Promosi'
      },
      {
        id: 3,
        name: 'Laporan Keuangan Q2.xlsx',
        type: 'Excel',
        size: '856 KB',
        uploadDate: '3 Agt 2025, 09:15',
        downloads: 12,
        category: 'Laporan'
      },
      {
        id: 4,
        name: 'Foto Kegiatan Workshop.zip',
        type: 'Archive',
        size: '15.2 MB',
        uploadDate: '1 Agt 2025, 16:45',
        downloads: 8,
        category: 'Media'
      }
    ];

    const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        console.log('Files dropped:', e.dataTransfer.files);
      }
    };

    const getFileIcon = (type) => {
      switch (type) {
        case 'PDF': return <FileText className="h-6 w-6 text-red-500" />;
        case 'Excel': return <File className="h-6 w-6 text-green-500" />;
        case 'Archive': return <Archive className="h-6 w-6 text-yellow-500" />;
        default: return <File className="h-6 w-6 text-gray-500" />;
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">File Unduhan</h2>
              <p className="text-gray-600">Kelola file dokumen yang dapat diunduh pengunjung</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
                <Folder className="h-4 w-4 inline mr-2" />
                Kategori
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div 
            className={`border-2 border-dashed rounded-2xl p-8 mb-8 text-center transition-all duration-200 ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Upload className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload File Baru</h3>
            <p className="text-gray-600 mb-4">Drag & drop file atau klik untuk browse</p>
            <div className="flex items-center justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                <FilePlus className="h-5 w-5 inline mr-2" />
                Pilih File
              </button>
              <span className="text-sm text-gray-500">
                PDF, DOC, XLS, ZIP (Max 50MB)
              </span>
            </div>
          </div>

          {/* File List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">File Tersedia</h3>
              <div className="flex space-x-2">
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-2">
                  <option>Semua Kategori</option>
                  <option>Dokumen Resmi</option>
                  <option>Promosi</option>
                  <option>Laporan</option>
                  <option>Media</option>
                </select>
              </div>
            </div>
            
            {files.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {getFileIcon(file.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{file.name}</h4>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-sm text-gray-500">{file.size}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{file.uploadDate}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        file.category === 'Dokumen Resmi' ? 'bg-red-100 text-red-800' :
                        file.category === 'Promosi' ? 'bg-blue-100 text-blue-800' :
                        file.category === 'Laporan' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {file.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    <Download className="h-4 w-4 inline mr-1" />
                    {file.downloads}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Settings Content
  const SettingsContent = () => {
    const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const ProfileSettings = () => (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
          <div className="relative">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Admin BLUD</h3>
            <p className="text-gray-600">Super Administrator</p>
            <p className="text-sm text-gray-500">Login terakhir: 7 Agt 2025, 14:37</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              defaultValue="Admin BLUD"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              defaultValue="admin@smkn2depoksleman.sch.id"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
            <input 
              type="tel" 
              defaultValue="+62 812 3456 7890"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input 
              type="text" 
              defaultValue="Super Administrator"
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600" 
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Save className="h-5 w-5" />
            <span>Simpan Perubahan</span>
          </button>
        </div>
      </div>
    );

    const SecuritySettings = () => (
      <div className="space-y-6">
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-5 w-5 text-yellow-600" />
            <h3 className="font-medium text-yellow-800">Keamanan Akun</h3>
          </div>
          <p className="text-sm text-yellow-700">
            Pastikan akun Anda aman dengan menggunakan password yang kuat dan mengaktifkan autentikasi dua faktor.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Ubah Password</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password Saat Ini</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Masukkan password saat ini"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Masukkan password baru"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Password Baru</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Konfirmasi password baru"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Kriteria Password:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Minimal 8 karakter</li>
              <li>• Mengandung huruf besar dan kecil</li>
              <li>• Mengandung angka</li>
              <li>• Mengandung simbol khusus</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Key className="h-5 w-5" />
            <span>Update Password</span>
          </button>
        </div>
      </div>
    );

    const DangerZone = () => (
      <div className="space-y-6">
        <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <h3 className="font-medium text-red-800">Zona Berbahaya</h3>
          </div>
          <p className="text-sm text-red-700">
            Tindakan di bawah ini bersifat permanen dan tidak dapat dibatalkan. Harap berhati-hati.
          </p>
        </div>

        <div className="border border-red-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hapus Akun</h3>
              <p className="text-gray-600 mb-4">
                Menghapus akun akan menghilangkan semua data dan akses Anda secara permanen. 
                Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Yang akan terjadi:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Akun akan dihapus permanen</li>
                  <li>• Kehilangan akses ke sistem admin</li>
                  <li>• Data aktivitas akan dihapus</li>
                  <li>• Tidak dapat login kembali</li>
                </ul>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <Trash2 className="h-5 w-5" />
            <span>Hapus Akun</span>
          </button>
        </div>
      </div>
    );

    const settingsMenuItems = [
      { id: 'profile', label: 'Profil', icon: User },
      { id: 'security', label: 'Keamanan', icon: Shield },
      { id: 'danger', label: 'Zona Berbahaya', icon: AlertCircle }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Pengaturan</h2>
            <p className="text-gray-600">Kelola pengaturan akun dan sistem</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Settings Navigation */}
            <div className="lg:w-64">
              <nav className="space-y-2">
                {settingsMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSettingsTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                        activeSettingsTab === item.id
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${
                        activeSettingsTab === item.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Settings Content */}
            <div className="flex-1">
              <div className="bg-gray-50 rounded-xl p-6">
                {activeSettingsTab === 'profile' && <ProfileSettings />}
                {activeSettingsTab === 'security' && <SecuritySettings />}
                {activeSettingsTab === 'danger' && <DangerZone />}
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Konfirmasi Hapus Akun</h3>
                <p className="text-gray-600">
                  Apakah Anda yakin ingin menghapus akun ini? Tindakan ini tidak dapat dibatalkan.
                </p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ketik &quot;HAPUS&quot; untuk konfirmasi
                </label>
                <input
                  type="text"
                  placeholder="HAPUS"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                  Hapus Akun
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // News Management Content
  const NewsManagementContent = () => {
    const newsData = [
      {
        id: 1,
        title: 'Workshop SMK PPK-BLUD di SMKN 2 Depok Sleman',
        excerpt: 'Workshop ini bertujuan untuk meningkatkan pemahaman tentang pengelolaan BLUD di SMK...',
        category: 'Workshop',
        author: 'Admin BLUD',
        date: '12 Juli 2025',
        status: 'Published',
        views: 1240,
        featured: true
      },
      {
        id: 2,
        title: 'Produksi Barang dan Jasa BLUD SMK Tahun 2025',
        excerpt: 'Laporan pencapaian produksi barang dan jasa BLUD SMKN 2 Depok Sleman...',
        category: 'Laporan',
        author: 'Admin BLUD',
        date: '5 Juli 2025',
        status: 'Published',
        views: 987,
        featured: false
      },
      {
        id: 3,
        title: 'Kerjasama BLUD SMK dengan 5 Industri Terkemuka',
        excerpt: 'BLUD SMKN 2 Depok Sleman menjalin kerjasama strategis dengan berbagai industri...',
        category: 'Kerjasama',
        author: 'Admin BLUD',
        date: '28 Juni 2025',
        status: 'Draft',
        views: 0,
        featured: false
      },
      {
        id: 4,
        title: 'Pelatihan Digital Marketing untuk UMKM',
        excerpt: 'Program pelatihan digital marketing yang diselenggarakan untuk mendukung UMKM lokal...',
        category: 'Pelatihan',
        author: 'Admin BLUD',
        date: '20 Juni 2025',
        status: 'Published',
        views: 845,
        featured: true
      }
    ];

    const getCategoryColor = (category) => {
      switch (category) {
        case 'Workshop': return 'bg-blue-100 text-blue-800';
        case 'Laporan': return 'bg-green-100 text-green-800';
        case 'Kerjasama': return 'bg-purple-100 text-purple-800';
        case 'Pelatihan': return 'bg-yellow-100 text-yellow-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Kelola Berita</h2>
              <p className="text-gray-600">Kelola artikel berita dan pengumuman</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">
                Filter
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2 transition-colors shadow-lg">
                <Plus className="h-5 w-5" />
                <span>Tulis Berita</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Total Berita</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">124</p>
                  <p className="text-sm text-gray-600">Published</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <div className="flex items-center">
                <Edit className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">32</p>
                  <p className="text-sm text-gray-600">Draft</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">Featured</p>
                </div>
              </div>
            </div>
          </div>

          {/* News Table */}
          <div className="space-y-4">
            {newsData.map((news) => (
              <div key={news.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 hover:text-blue-700 transition-colors cursor-pointer">
                        {news.title}
                      </h3>
                      {news.featured && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-3 line-clamp-2">{news.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <span>oleh {news.author}</span>
                      <span>{news.date}</span>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{news.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      news.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {news.status}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Main render function
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'berita':
        return <NewsManagementContent />;
      case 'produk-jasa':
        return <ProdukJasaContent />;
      case 'unduhan':
        return <FileUploadContent />;
      case 'review':
        return <MessagesReviewsContent />;
      case 'admin':
        return <AdminManagementContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-72">
        <Header />
        <main className="p-4 sm:p-6 lg:p-8">
          {renderActiveContent()}
        </main>
      </div>
    </div>
  );
}