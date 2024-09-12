// components/TabBar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './TabBar.module.scss'; // Импортируем SCSS

const TabBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.tabBar}> {/* Применяем класс tabBar */}
      <Link href="/" className={`${styles.tabLink} ${pathname === '/' ? styles.active : ''}`}>
        Home
      </Link>
      <Link href="/profile" className={`${styles.tabLink} ${pathname === '/profile' ? styles.active : ''}`}>
        Profile
      </Link>
      <Link href="/settings" className={`${styles.tabLink} ${pathname === '/settings' ? styles.active : ''}`}>
        Settings
      </Link>
    </nav>
  );
};

export default TabBar;
