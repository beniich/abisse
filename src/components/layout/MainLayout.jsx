import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Background3D from './Background3D';
import ChatBox from '../chat/ChatBox';

const MainLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden relative text-white">
            <Background3D />

            <Sidebar />

            <div className="flex-1 flex flex-col relative z-10 overflow-hidden">
                <header className="h-16 flex items-center justify-end px-8 border-b border-white/5 bg-[rgba(5,5,16,0.5)] backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary-light)] animate-pulse-glow" />
                        <span className="text-xs font-mono text-[var(--color-primary-light)]">SYSTEM ONLINE</span>
                        <LanguageSwitcher />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
                    <Outlet />
                </main>
                {/* Chat floating widget */}
                <div className="fixed bottom-4 right-4 w-80 h-96 shadow-lg rounded-lg overflow-hidden bg-[rgba(0,0,0,0.6)] backdrop-blur-md">
                    <ChatBox />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
