import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'ML Fee - 머신러닝 블로그',
  description: '머신러닝과 AI에 관한 인사이트를 공유합니다.',
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
