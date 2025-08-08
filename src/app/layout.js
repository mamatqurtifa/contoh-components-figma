import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'BLUD SMKN 2 Depok Sleman | Badan Layanan Umum Daerah',
  description: 'Website resmi Badan Layanan Umum Daerah (BLUD) SMKN 2 Depok Sleman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}