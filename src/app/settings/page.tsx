// app/settings/page.js

'use client';

import { useEffect, useRef, useState } from 'react';
import { TonConnectUI } from '@tonconnect/ui';
import styles from './SettingsPage.module.scss'; // Импорт SCSS

let globalTonConnect: TonConnectUI | null = null;

export default function SettingsPage() {
    const [walletInfo, setWalletInfo] = useState<any>(null);
    const tonConnectRef = useRef<TonConnectUI | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            if (!globalTonConnect) {
                globalTonConnect = new TonConnectUI({
                    manifestUrl: 'https://gist.githubusercontent.com/ikustow/cb642b537e3ea0fab51527a60a8a895a/raw/b78a6d3a27fd4ab15d902e907d293b0944280221/gistfile1.txt',
                    buttonRootId: 'ton-connect-button',
                });

                // Подписка на изменения статуса подключения кошелька
                globalTonConnect.onStatusChange((walletInfo) => {
                    setWalletInfo(walletInfo);
                    console.log(walletInfo);
                });
            }

            tonConnectRef.current = globalTonConnect;
        }
    }, []);

    const handleConnect = async () => {
        if (tonConnectRef.current) {
            try {
                await tonConnectRef.current.openModal();
            } catch (error) {
                console.error('Failed to open modal:', error);
            }
        }
    };

    const formatAddress = (address: string) => {
        const firstPart = address.slice(0, 5); // первые 5 символов
        const lastPart = address.slice(-5); // последние 5 символов
        return `${firstPart}...${lastPart}`; // соединяем
    };

    return (
        <div className={styles.container}> {/* Используем стили */}
            <h1>Connect to Ton Wallet</h1>
            <div id="ton-connect-button"></div>
            {walletInfo && (
                <div>

                </div>
            )}
        </div>
    );
}
