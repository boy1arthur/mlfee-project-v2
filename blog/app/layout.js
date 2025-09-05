import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: {
    default: 'ML Fee - 머신러닝 블로그',
    template: '%s | ML Fee'
  },
  description: '머신러닝과 AI에 관한 인사이트를 공유합니다.',
  keywords: ['머신러닝', '인공지능', 'AI', '데이터사이언스', '블로그'],
  authors: [{ name: 'ML Fee' }],
  creator: 'ML Fee',
  publisher: 'ML Fee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">ML Fee</Link>
          <div className="nav-links">
            <Link href="/">홈</Link>
            <Link href="/blog">블로그</Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 ML Fee. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
