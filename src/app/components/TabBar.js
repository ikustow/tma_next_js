// components/TabBar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TabBar = () => {
  const pathname = usePathname();

  return (
    <nav className="tab-bar">
      <Link href="/" className={pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/profile" className={pathname === '/profile' ? 'active' : ''}>
        Profile
      </Link>
      <Link href="/settings" className={pathname === '/settings' ? 'active' : ''}>
        Settings
      </Link>


      <style jsx>{`
        .tab-bar {
          display: flex;
          justify-content: space-around;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          border-top: 1px solid #eaeaea;
          padding: 10px 0;
        }

        a {
          text-decoration: none;
          color: #888;
          font-size: 16px;
        }

        a.active {
          color: #0070f3;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default TabBar;
